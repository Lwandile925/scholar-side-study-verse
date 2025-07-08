
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { GraduationCap, BookOpen, Target, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OnboardingScreen = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    schoolLevel: '',
    subjects: [] as string[],
    studyGoals: [] as string[]
  });

  const schoolLevels = [
    'Middle School (6-8)',
    'High School (9-12)',
    'College/University',
    'Graduate School',
    'Professional Development'
  ];

  const availableSubjects = [
    'Mathematics', 'Science', 'English', 'History', 'Foreign Language',
    'Computer Science', 'Art', 'Music', 'Physical Education', 'Business'
  ];

  const studyGoalOptions = [
    'Improve Grades', 'Test Preparation', 'Homework Help',
    'Concept Mastery', 'Study Organization', 'Time Management'
  ];

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      studyGoals: prev.studyGoals.includes(goal)
        ? prev.studyGoals.filter(g => g !== goal)
        : [...prev.studyGoals, goal]
    }));
  };

  const handleComplete = () => {
    localStorage.setItem('scholarside-onboarding', JSON.stringify(formData));
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to ScholarSide</CardTitle>
          <CardDescription>
            Your AI-powered study companion. Let's personalize your learning experience.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">What's your name?</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label>What's your school level?</Label>
                <Select
                  value={formData.schoolLevel}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, schoolLevel: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your school level" />
                  </SelectTrigger>
                  <SelectContent>
                    {schoolLevels.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.schoolLevel}
                className="w-full"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-3">
                <Label className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Which subjects are you studying?
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {availableSubjects.map(subject => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject}
                        checked={formData.subjects.includes(subject)}
                        onCheckedChange={() => handleSubjectToggle(subject)}
                      />
                      <Label htmlFor={subject} className="text-sm">{subject}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={formData.subjects.length === 0}
                  className="flex-1"
                >
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-3">
                <Label className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  What are your study goals?
                </Label>
                <div className="space-y-2">
                  {studyGoalOptions.map(goal => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={formData.studyGoals.includes(goal)}
                        onCheckedChange={() => handleGoalToggle(goal)}
                      />
                      <Label htmlFor={goal} className="text-sm">{goal}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleComplete}
                  disabled={formData.studyGoals.length === 0}
                  className="flex-1"
                >
                  Get Started!
                </Button>
              </div>
            </div>
          )}

          <div className="flex justify-center space-x-2">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingScreen;
