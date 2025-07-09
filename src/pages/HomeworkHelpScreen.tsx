
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  MessageSquare, 
  Brain, 
  Clock,
  CheckCircle,
  AlertCircle,
  Camera,
  FileText,
  Zap,
  Star
} from 'lucide-react';

const HomeworkHelpScreen = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [question, setQuestion] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const recentQuestions = [
    {
      id: 1,
      subject: 'Mathematics',
      question: 'How do I solve quadratic equations using the quadratic formula?',
      status: 'answered',
      timestamp: '2 hours ago',
      difficulty: 'Medium'
    },
    {
      id: 2,
      subject: 'Physics',
      question: 'Explain the concept of momentum and its conservation',
      status: 'pending',
      timestamp: '4 hours ago',
      difficulty: 'Hard'
    },
    {
      id: 3,
      subject: 'Chemistry',
      question: 'What is the difference between ionic and covalent bonds?',
      status: 'answered',
      timestamp: '1 day ago',
      difficulty: 'Easy'
    }
  ];

  const tutorSuggestions = [
    {
      name: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      rating: 4.9,
      responseTime: '< 30 min',
      price: '$15/hour'
    },
    {
      name: 'Prof. Michael Chen',
      subject: 'Physics',
      rating: 4.8,
      responseTime: '< 45 min',
      price: '$20/hour'
    },
    {
      name: 'Ms. Emily Davis',
      subject: 'Chemistry',
      rating: 4.7,
      responseTime: '< 1 hour',
      price: '$12/hour'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Homework Help</h1>
          <p className="text-muted-foreground">Get instant AI assistance or connect with expert tutors</p>
        </div>

        <Tabs defaultValue="ai-help" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ai-help">AI Assistant</TabsTrigger>
            <TabsTrigger value="tutors">Expert Tutors</TabsTrigger>
            <TabsTrigger value="history">My Questions</TabsTrigger>
          </TabsList>

          {/* AI Assistant Tab */}
          <TabsContent value="ai-help">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Ask AI Homework Helper
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Mathematics, Physics, Chemistry" />
                  </div>
                  
                  <div>
                    <Label htmlFor="question">Your Question</Label>
                    <Textarea
                      id="question"
                      placeholder="Describe your homework problem in detail..."
                      rows={4}
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                  </div>

                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload homework images or documents
                    </p>
                    <Label htmlFor="homework-upload">
                      <Button variant="outline" className="cursor-pointer">
                        Choose Files
                      </Button>
                      <Input
                        id="homework-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload}
                        accept="image/*,.pdf,.doc,.docx"
                      />
                    </Label>
                    {selectedFile && (
                      <p className="text-sm text-primary mt-2">
                        Selected: {selectedFile.name}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Zap className="mr-2 h-4 w-4" />
                      Get Instant Help
                    </Button>
                    <Button variant="outline">
                      <Camera className="mr-2 h-4 w-4" />
                      Scan Problem
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Step-by-Step Solutions</h3>
                      <p className="text-sm text-muted-foreground">
                        Get detailed explanations for every step of the problem
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Interactive Chat</h3>
                      <p className="text-sm text-muted-foreground">
                        Ask follow-up questions and get clarifications
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Multiple Formats</h3>
                      <p className="text-sm text-muted-foreground">
                        Upload images, PDFs, or type your questions
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">💡 Pro Tip</h4>
                    <p className="text-sm text-muted-foreground">
                      For best results, include all relevant information like formulas, 
                      given values, and what you're trying to find.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Expert Tutors Tab */}
          <TabsContent value="tutors">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Connect with Expert Tutors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tutorSuggestions.map((tutor, index) => (
                      <Card key={index} className="border-2">
                        <CardContent className="p-4">
                          <div className="text-center mb-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-primary font-semibold">
                                {tutor.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <h3 className="font-semibold">{tutor.name}</h3>
                            <p className="text-sm text-muted-foreground">{tutor.subject}</p>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                              <span>Rating:</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span>{tutor.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Response:</span>
                              <span className="text-green-600">{tutor.responseTime}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Price:</span>
                              <span className="font-semibold">{tutor.price}</span>
                            </div>
                          </div>
                          
                          <Button className="w-full mt-3" size="sm">
                            Connect Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Question History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Recent Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQuestions.map((q) => (
                    <div key={q.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{q.subject}</Badge>
                          <Badge variant={q.difficulty === 'Easy' ? 'default' : q.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                            {q.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          {q.status === 'answered' ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Clock className="h-4 w-4 text-yellow-600" />
                          )}
                          <span className="text-sm text-muted-foreground">{q.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-sm mb-2">{q.question}</p>
                      <Button size="sm" variant="outline">
                        View {q.status === 'answered' ? 'Answer' : 'Status'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeworkHelpScreen;
