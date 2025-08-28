import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Lightbulb, 
  Globe, 
  BookOpen,
  Star,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-8 lg:px-16 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              About Anora Academy
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Learners Worldwide
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to democratize education and make quality learning accessible to everyone, 
              everywhere. Through innovative technology and expert instruction, we're building the future of education.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To break down barriers to education and create a world where anyone can learn, grow, 
              and achieve their dreams regardless of their background or location.
            </p>
            <p className="text-gray-600">
              We believe that education is the great equalizer and that every individual deserves 
              access to high-quality learning experiences that can transform their lives.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              A world where education is accessible, engaging, and empowering for everyone, 
              creating a more knowledgeable, skilled, and connected global community.
            </p>
            <p className="text-gray-600">
              We envision a future where learning knows no boundaries and where every person 
              can unlock their full potential through education.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the learning experience we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Passion for Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're passionate about learning and believe that curiosity and enthusiasm 
                  are the driving forces behind successful education.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Quality & Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain the highest standards of quality in our courses, instructors, 
                  and learning platform to ensure exceptional educational experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Global Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're committed to making education accessible to learners worldwide, 
                  breaking down geographical and economic barriers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We continuously innovate our learning methods and technology to provide 
                  cutting-edge educational experiences that engage and inspire.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We foster a supportive learning community where students can connect, 
                  collaborate, and grow together in their educational journey.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Lifelong Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe that learning is a lifelong journey and provide resources 
                  and support for continuous personal and professional development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <p className="text-gray-600">Students Enrolled</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Courses Available</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <p className="text-gray-600">Expert Instructors</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <p className="text-gray-600">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Anora Academy was founded in 2020 with a simple yet powerful vision: to make quality education 
                accessible to everyone, everywhere. What started as a small team of passionate educators and 
                technologists has grown into a global learning platform that serves tens of thousands of students.
              </p>
              <p>
                Our journey began when our founders recognized that traditional education systems were leaving 
                many people behind due to geographical, financial, and time constraints. They believed that 
                technology could bridge these gaps and create learning opportunities that were previously impossible.
              </p>
              <p>
                Today, we're proud to have helped thousands of learners achieve their goals, whether that's 
                advancing their careers, learning new skills, or pursuing their passions. Our commitment to 
                excellence and innovation continues to drive us forward as we work to democratize education globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="bg-primary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of learners who are already transforming their lives with our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
