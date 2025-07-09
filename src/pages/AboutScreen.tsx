
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Heart, 
  Lightbulb,
  Users,
  Target,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';

const AboutScreen = () => {
  const founder = {
    name: "Alex Chen",
    title: "Founder & CEO of ScholarSide",
    bio: "Former Stanford Computer Science student passionate about democratizing education through AI. After struggling with traditional study methods, Alex created ScholarSide to help students learn more effectively and collaboratively.",
    mission: "To make personalized, AI-powered education accessible to every student, regardless of their background or learning style.",
    image: "/placeholder.svg",
    social: {
      email: "alex@scholarside.com",
      linkedin: "alexchen-scholarside",
      twitter: "@alexchen_ai"
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Student-First",
      description: "Every feature is designed with student success and wellbeing in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge AI to create new ways of learning and understanding."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections between students to foster collaborative learning."
    },
    {
      icon: Target,
      title: "Accessibility",
      description: "Making quality education tools available to students everywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">About ScholarSide</h1>
          <p className="text-muted-foreground text-lg">
            Empowering students through AI-powered learning
          </p>
        </div>

        {/* Founder Section */}
        <Card>
          <CardHeader className="text-center pb-4">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src={founder.image} alt={founder.name} />
              <AvatarFallback className="text-xl">
                {founder.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">{founder.name}</CardTitle>
            <CardDescription className="text-lg">{founder.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground leading-relaxed">
              {founder.bio}
            </p>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Our Mission
              </h3>
              <p className="text-muted-foreground italic">
                "{founder.mission}"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                {founder.social.email}
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Company Values */}
        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>
              The principles that guide everything we do at ScholarSide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* App Stats */}
        <Card>
          <CardHeader>
            <CardTitle>ScholarSide Impact</CardTitle>
            <CardDescription>
              Helping students succeed every day
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Questions Answered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Study Sessions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Student Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Have questions or feedback? We'd love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button variant="outline" className="flex-1">
                <Users className="mr-2 h-4 w-4" />
                Join Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutScreen;
