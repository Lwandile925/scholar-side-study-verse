
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/context/ThemeContext';
import { 
  Moon, 
  Sun, 
  Bell, 
  User, 
  Shield, 
  Database,
  Smartphone,
  Volume2,
  Mail,
  Phone,
  Save
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  
  // Settings state
  const [notifications, setNotifications] = useState({
    studyReminders: true,
    homeworkDeadlines: true,
    groupUpdates: true,
    emailNotifications: true,
    pushNotifications: false
  });

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    school: ''
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    studyStats: true,
    onlineStatus: false
  });

  const handleSaveSettings = () => {
    // In a real app, this would save to backend
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Appearance
            </CardTitle>
            <CardDescription>
              Customize how ScholarSide looks and feels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Choose between light and dark mode
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                />
                <Moon className="h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={profile.name}
                  onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={profile.phone}
                  onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Grade Level</Label>
                <Input
                  id="grade"
                  placeholder="e.g., Grade 12"
                  value={profile.grade}
                  onChange={(e) => setProfile(prev => ({ ...prev, grade: e.target.value }))}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="school">School/Institution</Label>
                <Input
                  id="school"
                  placeholder="Your school name"
                  value={profile.school}
                  onChange={(e) => setProfile(prev => ({ ...prev, school: e.target.value }))}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Choose what notifications you want to receive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Study Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Get reminded about your study sessions
                  </p>
                </div>
                <Switch
                  checked={notifications.studyReminders}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, studyReminders: checked }))
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Homework Deadlines</Label>
                  <p className="text-sm text-muted-foreground">
                    Never miss an assignment deadline
                  </p>
                </div>
                <Switch
                  checked={notifications.homeworkDeadlines}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, homeworkDeadlines: checked }))
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Study Group Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about group activities
                  </p>
                </div>
                <Switch
                  checked={notifications.groupUpdates}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, groupUpdates: checked }))
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                </div>
                <Switch
                  checked={notifications.emailNotifications}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, emailNotifications: checked }))
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get instant notifications on your device
                    </p>
                  </div>
                </div>
                <Switch
                  checked={notifications.pushNotifications}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, pushNotifications: checked }))
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Control your privacy and data sharing preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Profile Visibility</Label>
                <p className="text-sm text-muted-foreground">
                  Allow others to see your profile
                </p>
              </div>
              <Switch
                checked={privacy.profileVisibility}
                onCheckedChange={(checked) => 
                  setPrivacy(prev => ({ ...prev, profileVisibility: checked }))
                }
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Study Statistics</Label>
                <p className="text-sm text-muted-foreground">
                  Share your study progress with others
                </p>
              </div>
              <Switch
                checked={privacy.studyStats}
                onCheckedChange={(checked) => 
                  setPrivacy(prev => ({ ...prev, studyStats: checked }))
                }
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Online Status</Label>
                <p className="text-sm text-muted-foreground">
                  Show when you're online and active
                </p>
              </div>
              <Switch
                checked={privacy.onlineStatus}
                onCheckedChange={(checked) => 
                  setPrivacy(prev => ({ ...prev, onlineStatus: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Data & Storage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data & Storage
            </CardTitle>
            <CardDescription>
              Manage your data and storage preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Study Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Your flashcards, notes, and progress
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Export Data
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Clear Cache</h4>
                  <p className="text-sm text-muted-foreground">
                    Free up storage space
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Clear Cache
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end pt-6">
          <Button onClick={handleSaveSettings} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save All Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
