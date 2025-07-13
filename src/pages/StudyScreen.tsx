import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Upload, 
  FileText, 
  MessageSquare, 
  Mic, 
  Camera,
  Brain,
  Target,
  Volume2,
  Send
} from 'lucide-react';
import { useGeminiAI } from '@/hooks/useGeminiAI';
import ApiKeyInput from '@/components/ApiKeyInput';
import ChatMessage from '@/components/ChatMessage';

const StudyScreen = () => {
  const [recording, setRecording] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const { messages, isLoading, apiKey, sendMessage, saveApiKey } = useGeminiAI();
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const toggleRecording = () => {
    setRecording(!recording);
    // In real app, would handle audio recording
  };

  const handleSendMessage = async () => {
    if (currentMessage.trim() && !isLoading) {
      await sendMessage(currentMessage);
      setCurrentMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">AI Study Assistant</h1>
          <p className="text-muted-foreground">Upload materials, ask questions, and get personalized help powered by Google Gemini</p>
        </div>

        <Tabs defaultValue="chat" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="chat">AI Chat</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="voice">Voice AI</TabsTrigger>
            <TabsTrigger value="scan">Live Scan</TabsTrigger>
          </TabsList>

          {/* AI Chat Tab - Now first and functional */}
          <TabsContent value="chat">
            {!apiKey && (
              <ApiKeyInput onApiKeySave={saveApiKey} currentKey={apiKey} />
            )}
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  AI Study Chat - Powered by Google Gemini
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-96 border rounded-lg p-4 overflow-y-auto bg-muted/30">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <ChatMessage
                        key={index}
                        role={message.role}
                        content={message.content}
                        timestamp={message.timestamp}
                      />
                    ))}
                    {isLoading && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <Brain className="h-4 w-4 text-primary-foreground animate-pulse" />
                        </div>
                        <div className="flex-1 bg-background p-3 rounded-lg border">
                          <p className="text-muted-foreground">AI is thinking...</p>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Textarea
                    placeholder="Ask me anything about your studies..."
                    className="flex-1"
                    rows={2}
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading || !apiKey}
                  />
                  <Button 
                    size="lg" 
                    onClick={handleSendMessage}
                    disabled={isLoading || !currentMessage.trim() || !apiKey}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setCurrentMessage("Can you explain this homework problem to me?")}
                    disabled={isLoading}
                  >
                    📝 Explain my homework
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setCurrentMessage("Create flashcards for the topic I'm studying")}
                    disabled={isLoading}
                  >
                    🧠 Create flashcards
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setCurrentMessage("Help me make a study plan for my upcoming exam")}
                    disabled={isLoading}
                  >
                    📊 Make a study plan
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setCurrentMessage("Quiz me on this topic to test my knowledge")}
                    disabled={isLoading}
                  >
                    🎯 Quiz me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upload Material Tab */}
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Study Material
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">Drop your files here</h3>
                  <p className="text-muted-foreground mb-4">
                    Support for PDFs, images, documents, and more
                  </p>
                  <Label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Choose Files
                    </Button>
                    <Input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                    />
                  </Label>
                </div>

                {uploadedFile && (
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{uploadedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button className="mt-3 w-full">
                      Process with AI
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Voice-to-Summary Tab */}
          <TabsContent value="voice">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5" />
                  Voice-to-Summary AI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-8">
                  <div className={`mx-auto w-24 h-24 rounded-full border-4 flex items-center justify-center ${
                    recording ? 'border-red-500 bg-red-50' : 'border-primary bg-primary/10'
                  }`}>
                    <Mic className={`h-12 w-12 ${recording ? 'text-red-500' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-lg font-medium mt-4 mb-2">
                    {recording ? 'Recording...' : 'Start Recording'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Record a lecture, discussion, or voice notes for AI summarization
                  </p>
                  <Button
                    size="lg"
                    onClick={toggleRecording}
                    variant={recording ? "destructive" : "default"}
                  >
                    {recording ? 'Stop Recording' : 'Start Recording'}
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Recent Recordings</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-3">
                        <Volume2 className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">Math Lecture - Chapter 5</p>
                          <p className="text-sm text-muted-foreground">15 minutes • 2 hours ago</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">View Summary</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Live Scan Tab */}
          <TabsContent value="scan">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Live Scan-to-Explain
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">Camera Preview</h3>
                    <p className="text-muted-foreground">
                      Point your camera at whiteboards, textbooks, or handouts
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Camera className="mr-2 h-4 w-4" />
                    Capture & Analyze
                  </Button>
                  <Button variant="outline">
                    Switch Camera
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>AI will extract text, identify key concepts, and provide explanations with citations.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudyScreen;
