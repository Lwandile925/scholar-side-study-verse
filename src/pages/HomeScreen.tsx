
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  MessageSquare, 
  Clock, 
  Target, 
  TrendingUp,
  FileText,
  Users,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();
  
  // Mock data - would come from backend in real app
  const userStats = {
    dailyStreak: 5,
    studyTime: 120, // minutes
    flashcardsReviewed: 25,
    questionsAnswered: 12
  };

  const todaysTasks = [
    { id: 1, title: 'Math Homework - Chapter 5', due: '2:00 PM', priority: 'high' },
    { id: 2, title: 'History Essay Draft', due: 'Tomorrow', priority: 'medium' },
    { id: 3, title: 'Science Quiz Prep', due: 'Friday', priority: 'low' }
  ];

  const quickActions = [
    { 
      title: 'Upload Material', 
      description: 'Add notes or assignments for AI help',
      icon: FileText,
      action: () => navigate('/study')
    },
    { 
      title: 'Homework Help', 
      description: 'Get instant help with assignments',
      icon: MessageSquare,
      action: () => navigate('/homework-help')
    },
    { 
      title: 'Study Session', 
      description: 'Start focused study with AI guidance',
      icon: Target,
      action: () => navigate('/study')
    },
    { 
      title: 'Join Study Group', 
      description: 'Collaborate with other students',
      icon: Users,
      action: () => navigate('/groups')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Good morning! 👋</h1>
          <p className="text-primary-foreground/80">Ready to continue your learning journey?</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{userStats.dailyStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{userStats.studyTime}m</div>
              <div className="text-sm text-muted-foreground">Study Time</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{userStats.flashcardsReviewed}</div>
              <div className="text-sm text-muted-foreground">Flashcards</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{userStats.questionsAnswered}</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Assignments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaysTasks.map(task => (
              <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-sm text-muted-foreground">Due: {task.due}</p>
                </div>
                <div className={`px-2 py-1 rounded text-xs ${
                  task.priority === 'high' ? 'bg-destructive/10 text-destructive' :
                  task.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-600' :
                  'bg-green-500/10 text-green-600'
                }`}>
                  {task.priority}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 justify-start"
                  onClick={action.action}
                >
                  <div className="flex items-start gap-3">
                    <action.icon className="h-5 w-5 mt-0.5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-sm text-muted-foreground">{action.description}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Weekly Progress
            </CardTitle>
            <CardDescription>You're doing great! Keep up the momentum.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Study Goal</span>
                  <span>75%</span>
                </div>
                <Progress value={75} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Assignments Completed</span>
                  <span>60%</span>
                </div>
                <Progress value={60} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeScreen;
