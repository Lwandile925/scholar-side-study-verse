
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  MessageSquare, 
  Users, 
  GraduationCap,
  TrendingUp,
  Clock,
  Target,
  Star,
  ArrowRight
} from 'lucide-react';

const HomeScreen = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Smart Study Tools',
      description: 'Interactive flashcards, notes, and personalized study sessions to maximize your learning efficiency.',
      link: '/study'
    },
    {
      icon: MessageSquare,
      title: 'Homework Help',
      description: 'Get instant AI assistance or connect with expert tutors for personalized homework support.',
      link: '/homework-help'
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Join collaborative study groups and connect with peers who share your academic interests.',
      link: '/groups'
    }
  ];

  const stats = [
    { icon: TrendingUp, label: 'Success Rate', value: '95%' },
    { icon: Clock, label: 'Study Hours Saved', value: '1000+' },
    { icon: Target, label: 'Goals Achieved', value: '500+' },
    { icon: Star, label: 'User Rating', value: '4.9/5' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Ultimate <span className="text-primary">Study Companion</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your learning experience with AI-powered study tools, expert tutoring, and collaborative study groups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/study">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and resources designed to enhance your learning experience and academic performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link to={feature.link}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Studies?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students who have already improved their academic performance with ScholarSide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/study">Start Studying Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/homework-help">Get Homework Help</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
