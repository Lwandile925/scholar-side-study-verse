
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const useGeminiAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI study assistant powered by Google Gemini. I can help you understand concepts, solve problems, and organize your learning. What would you like to work on today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini-api-key') || '');
  const { toast } = useToast();

  const saveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('gemini-api-key', key);
    toast({
      title: "API Key Saved",
      description: "Your Gemini API key has been saved locally.",
    });
  };

  const sendMessage = async (userMessage: string) => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Google Gemini API key first.",
        variant: "destructive"
      });
      return;
    }

    const newUserMessage: Message = {
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful AI study assistant. Please provide a clear, educational response to this question: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";

      const assistantMessage: Message = {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Gemini AI Error:', error);
      toast({
        title: "Error",
        description: "Failed to get AI response. Please check your API key and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    apiKey,
    sendMessage,
    saveApiKey
  };
};
