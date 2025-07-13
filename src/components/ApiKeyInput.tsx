
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Key, ExternalLink } from 'lucide-react';

interface ApiKeyInputProps {
  onApiKeySave: (key: string) => void;
  currentKey: string;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onApiKeySave, currentKey }) => {
  const [key, setKey] = useState(currentKey);

  const handleSave = () => {
    if (key.trim()) {
      onApiKeySave(key.trim());
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-5 w-5" />
          Google Gemini API Key
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <Input
            id="api-key"
            type="password"
            placeholder="Enter your Google Gemini API key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSave} disabled={!key.trim()}>
            Save API Key
          </Button>
          <Button variant="outline" asChild>
            <a 
              href="https://aistudio.google.com/app/apikey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Get API Key
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Your API key is stored locally in your browser and never sent to our servers.
        </p>
      </CardContent>
    </Card>
  );
};

export default ApiKeyInput;
