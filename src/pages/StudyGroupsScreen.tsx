
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Plus, 
  Search, 
  Calendar, 
  Clock,
  MapPin,
  Star,
  MessageCircle,
  BookOpen,
  Video,
  Globe,
  Lock,
  UserPlus
} from 'lucide-react';

const StudyGroupsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const studyGroups = [
    {
      id: 1,
      name: 'AP Calculus Study Group',
      subject: 'Mathematics',
      members: 12,
      maxMembers: 15,
      description: 'Preparing for AP Calculus exam together. Weekly problem-solving sessions.',
      nextSession: 'Tomorrow at 3:00 PM',
      location: 'Online - Zoom',
      type: 'public',
      rating: 4.8,
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Organic Chemistry Warriors',
      subject: 'Chemistry',
      members: 8,
      maxMembers: 10,
      description: 'Tackling organic chemistry mechanisms and reactions. Lab report help included.',
      nextSession: 'Friday at 7:00 PM',
      location: 'Library - Room 204',
      type: 'public',
      rating: 4.9,
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Physics Problem Solvers',
      subject: 'Physics',
      members: 6,
      maxMembers: 8,
      description: 'Advanced physics problems and exam preparation. Focus on mechanics and thermodynamics.',
      nextSession: 'Monday at 5:30 PM',
      location: 'Online - Discord',
      type: 'private',
      rating: 4.7,
      avatar: '/placeholder.svg'
    }
  ];

  const myGroups = [
    {
      id: 4,
      name: 'Computer Science Algorithms',
      subject: 'Computer Science',
      members: 15,
      role: 'Admin',
      nextSession: 'Today at 2:00 PM',
      unreadMessages: 5
    },
    {
      id: 5,
      name: 'Spanish Conversation Practice',
      subject: 'Language',
      members: 8,
      role: 'Member',
      nextSession: 'Wednesday at 6:00 PM',
      unreadMessages: 0
    }
  ];

  const upcomingSessions = [
    {
      group: 'Computer Science Algorithms',
      time: 'Today, 2:00 PM',
      duration: '2 hours',
      type: 'online'
    },
    {
      group: 'AP Calculus Study Group',
      time: 'Tomorrow, 3:00 PM',
      duration: '1.5 hours',
      type: 'online'
    },
    {
      group: 'Organic Chemistry Warriors',
      time: 'Friday, 7:00 PM',
      duration: '2 hours',
      type: 'in-person'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Study Groups</h1>
          <p className="text-muted-foreground">Join collaborative study sessions and learn together</p>
        </div>

        <Tabs defaultValue="discover" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="my-groups">My Groups</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="create">Create Group</TabsTrigger>
          </TabsList>

          {/* Discover Groups Tab */}
          <TabsContent value="discover">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Search study groups by subject, topic, or keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button>
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studyGroups.map((group) => (
                  <Card key={group.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={group.avatar} alt={group.name} />
                          <AvatarFallback>
                            {group.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1">
                          {group.type === 'private' ? (
                            <Lock className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Globe className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{group.name}</CardTitle>
                      <Badge variant="secondary">{group.subject}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{group.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{group.members}/{group.maxMembers} members</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{group.nextSession}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{group.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{group.rating}/5.0</span>
                        </div>
                      </div>
                      
                      <Button className="w-full" size="sm">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join Group
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* My Groups Tab */}
          <TabsContent value="my-groups">
            <div className="space-y-6">
              {myGroups.map((group) => (
                <Card key={group.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback>
                            {group.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{group.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="outline">{group.subject}</Badge>
                            <span>{group.members} members</span>
                            <Badge variant={group.role === 'Admin' ? 'default' : 'secondary'}>
                              {group.role}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {group.unreadMessages > 0 && (
                          <Badge variant="destructive" className="rounded-full">
                            {group.unreadMessages}
                          </Badge>
                        )}
                        <Button variant="outline" size="sm">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Chat
                        </Button>
                        <Button size="sm">
                          <Video className="mr-2 h-4 w-4" />
                          Join Session
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Next session: {group.nextSession}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Study Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {session.type === 'online' ? (
                            <Video className="h-6 w-6 text-primary" />
                          ) : (
                            <MapPin className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{session.group}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{session.time}</span>
                            <span>Duration: {session.duration}</span>
                            <Badge variant="outline" className="capitalize">
                              {session.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <Button size="sm">
                        Join Session
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Create Group Tab */}
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Create New Study Group</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="group-name">Group Name</Label>
                    <Input id="group-name" placeholder="e.g., Advanced Biology Study Group" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Biology, Mathematics, Chemistry" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what your study group is about, goals, and expectations..."
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="max-members">Max Members</Label>
                    <Input id="max-members" type="number" placeholder="15" />
                  </div>
                  
                  <div>
                    <Label htmlFor="meeting-frequency">Meeting Frequency</Label>
                    <Input id="meeting-frequency" placeholder="e.g., Weekly, Bi-weekly" />
                  </div>
                  
                  <div>
                    <Label htmlFor="group-type">Group Type</Label>
                    <select className="w-full px-3 py-2 border border-border rounded-md">
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="meeting-location">Meeting Location</Label>
                    <Input id="meeting-location" placeholder="Online, Library, Classroom, etc." />
                  </div>
                  
                  <div>
                    <Label htmlFor="preferred-time">Preferred Meeting Time</Label>
                    <Input id="preferred-time" placeholder="e.g., Weekdays 6PM, Weekend mornings" />
                  </div>
                </div>
                
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Study Group
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudyGroupsScreen;
