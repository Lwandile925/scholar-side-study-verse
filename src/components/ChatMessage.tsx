
import React from 'react';
import { Brain, User } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, timestamp }) => {
  const isAssistant = role === 'assistant';

  return (
    <div className={`flex gap-3 ${isAssistant ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isAssistant ? 'bg-primary' : 'bg-secondary'
      }`}>
        {isAssistant ? (
          <Brain className="h-4 w-4 text-primary-foreground" />
        ) : (
          <User className="h-4 w-4 text-secondary-foreground" />
        )}
      </div>
      <div className={`flex-1 ${isAssistant ? '' : 'text-right'}`}>
        <div className={`p-3 rounded-lg ${
          isAssistant 
            ? 'bg-background border' 
            : 'bg-primary text-primary-foreground ml-12'
        }`}>
          <p className="whitespace-pre-wrap">{content}</p>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
