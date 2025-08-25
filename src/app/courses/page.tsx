'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CourseCard } from '@/components/courses/CourseCard';
import { POPULAR_COURSES, COURSE_DETAILS } from '@/constants/courses';

// Use the same course data from homepage
const COURSES = POPULAR_COURSES;

const CATEGORIES = [
  { id: 'all', name: 'All', count: 1256 },
  { id: 'web-design', name: 'Web Design', count: 156 },
  { id: 'development', name: 'Development', count: 365 },
  { id: 'graphic-design', name: 'Graphic Design', count: 98 },
  { id: 'marketing', name: 'Marketing', count: 184 },
  { id: 'finance', name: 'Finance', count: 184 }
];

const LANGUAGES = ['English', 'Français', 'Hindi', 'Russian', 'Spanish', 'Bengali', 'Portuguese'];

export default function CoursesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [skillLevel, setSkillLevel] = useState('all');
  const [selectedLanguages, setSelectedLanguages] = useState(['English']);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('most-viewed');

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSkill = skillLevel === 'all' || course.level.toLowerCase().includes(skillLevel.toLowerCase());
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSkill && matchesSearch;
  });

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const toggleFavorite = (courseId: string) => {
    // In a real app, this would update the backend
    console.log('Toggle favorite for course:', courseId);
  };

  const handleCourseClick = (courseId: string) => {
    // Find course by ID and navigate to slug-based URL
    const course = COURSE_DETAILS.find(c => c.id === courseId);
    if (course?.slug) {
      router.push(`/courses/${course.slug}`);
    } else {
      // Fallback to ID-based navigation
      router.push(`/courses/${courseId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-8 lg:px-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Course Grid Classic</h1>
          <nav className="text-white/80">
            <span>Home</span>
            <span className="mx-2">•</span>
            <span>Courses classic</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Find your course</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Sort by</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="most-viewed">Most Viewed</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <div key={category.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategory === category.id}
                          onCheckedChange={() => setSelectedCategory(category.id)}
                        />
                        <Label htmlFor={category.id} className="text-sm text-gray-700">
                          {category.name}
                        </Label>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              

              {/* Skill Level Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Skill level</h3>
                <RadioGroup value={skillLevel} onValueChange={setSkillLevel}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="skill-all" />
                      <Label htmlFor="skill-all" className="text-sm text-gray-700">All levels</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="skill-beginner" />
                      <Label htmlFor="skill-beginner" className="text-sm text-gray-700">Beginner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="skill-intermediate" />
                      <Label htmlFor="skill-intermediate" className="text-sm text-gray-700">Intermediate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="skill-advanced" />
                      <Label htmlFor="skill-advanced" className="text-sm text-gray-700">Advanced</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Language Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Language</h3>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map((language) => (
                    <button
                      key={language}
                      onClick={() => toggleLanguage(language)}
                      className={`p-2 text-xs rounded-md transition-colors ${
                        selectedLanguages.includes(language)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter Results Button */}
              <Button className="w-full bg-primary hover:bg-primary/90">
                Filter Results
              </Button>
            </div>
          </div>

          {/* Right Content - Course Grid */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing 1-{filteredCourses.length} of {filteredCourses.length} results
              </p>
            </div>

                         {/* Course Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
               {filteredCourses.map((course) => (
                 <CourseCard
                   key={course.id}
                   course={course}
                   onFavoriteToggle={() => toggleFavorite(course.id)}
                   onClick={() => handleCourseClick(course.id)}
                 />
               ))}
             </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">«</Button>
                <Button size="sm" className="bg-primary text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <span className="px-3 text-gray-600">...</span>
                <Button variant="outline" size="sm">6</Button>
                <Button variant="outline" size="sm">»</Button>
              </div>
            </div>
                     </div>
         </div>
       </div>

       {/* Newsletter Banner */}
       <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-16">
         <div className="container mx-auto px-8 lg:px-16">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
             <div className="text-center lg:text-left">
               <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                 Are you ready for a more great Conversation?
               </h2>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
               <Input
                 placeholder="Type your email here"
                 className="min-w-[300px] text-gray-900 placeholder:text-gray-500"
               />
               <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8">
                 Subscribe
               </Button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
