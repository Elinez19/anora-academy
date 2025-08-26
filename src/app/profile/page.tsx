import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Users, TrendingUp, Edit, Camera } from 'lucide-react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Profile</h1>
            <p className="text-muted-foreground text-lg">
              Manage your account and learning progress
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src="/images/default-avatar.jpg" alt="Profile" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-2xl">John Doe</CardTitle>
                  <CardDescription>john.doe@example.com</CardDescription>
                  <div className="flex justify-center gap-2 mt-3">
                    <Badge variant="outline">Student</Badge>
                    <Badge variant="default" className="bg-yellow-600">Premium</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Overview */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Learning Overview</CardTitle>
                  <CardDescription>Your progress and achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm text-muted-foreground">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold">8</div>
                      <div className="text-sm text-muted-foreground">Certificates</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold">156</div>
                      <div className="text-sm text-muted-foreground">Study Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold">85%</div>
                      <div className="text-sm text-muted-foreground">Progress</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest learning activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Completed UI/UX Design Fundamentals</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                      <Badge variant="default" className="bg-green-600">Completed</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Started JavaScript ES6+ Mastery</p>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Earned React Fundamentals Certificate</p>
                        <p className="text-sm text-muted-foreground">3 days ago</p>
                      </div>
                      <Badge variant="default" className="bg-yellow-600">Certificate</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Settings */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates about your courses</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Privacy Settings</p>
                        <p className="text-sm text-muted-foreground">Control your data and privacy</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Subscription</p>
                        <p className="text-sm text-muted-foreground">Premium Plan - $19.99/month</p>
                      </div>
                      <Button variant="outline" size="sm">Upgrade</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

