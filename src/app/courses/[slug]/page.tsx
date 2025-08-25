'use client';

import React, { useState, useEffect, use } from 'react';
import { Star, Users, BarChart3, Clock, Globe, BookOpen, Calendar, Award, Play, Check, ChevronRight, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { COURSE_DETAILS } from '@/constants/courses';
import { CourseDetail } from '@/interfaces/courses';
import { notFound, useRouter } from 'next/navigation';
import { HeroVideoDialog } from '@/components/magicui/hero-video-dialog';

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [courseNotFound, setCourseNotFound] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    // Find course by slug
    const foundCourse = COURSE_DETAILS.find(c => c.slug === slug);
    if (foundCourse) {
      setCourse(foundCourse);
      // Set first section as expanded by default
      setExpandedSections(new Set([foundCourse.curriculum[0]?.section || '']));
    } else {
      setCourseNotFound(true);
    }
    setIsLoading(false);
  }, [slug]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'All level':
        return 'bg-purple-500';
      case 'Beginner':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-blue-500';
      case 'Advanced':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const navigateToCourse = (courseSlug: string) => {
    router.push(`/courses/${courseSlug}`);
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  // If course not found after loading, show 404
  if (courseNotFound || !course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-8 lg:px-16 py-8">
          <Badge className="bg-primary text-white mb-4">
            {course.category}
          </Badge>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-6 max-w-4xl">
            {course.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">{course.rating}/5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">{course.enrolled.toLocaleString()} Enrolled</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">{course.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Last updated {course.lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="font-medium">{course.language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-white border border-gray-200">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
                <TabsTrigger value="comment">Comment</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="bg-white rounded-lg p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What you&apos;ll learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYouLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Curriculum</h3>
                  <div className="space-y-4">
                    {course.curriculum.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleSection(section.section)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div>
                            <h4 className="font-medium text-gray-900">{section.section}</h4>
                            <p className="text-sm text-gray-600">{section.lectures.length} lectures</p>
                          </div>
                          {expandedSections.has(section.section) ? (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        
                        {expandedSections.has(section.section) && (
                          <div className="border-t border-gray-200 p-4 space-y-3">
                            {section.lectures.map((lecture, lectureIndex) => (
                              <div key={lectureIndex} className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Play className="w-4 h-4 text-gray-600" />
                                  </div>
                                  <span className="text-gray-700">{lecture.title}</span>
                                </div>
                                <span className="text-sm text-gray-500">{lecture.duration}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Instructor</h3>
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{course.instructor.name}</h4>
                      <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Areas of Expertise:</h5>
                        <div className="flex flex-wrap gap-2">
                          {course.instructor.expertise.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Reviews</h3>
                  <div className="space-y-6">
                    {course.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex gap-1">
                            {renderStars(review.rating)}
                          </div>
                          <span className="font-medium text-gray-900">{review.user}</span>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faqs" className="mt-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {course.faqs.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleSection(`faq-${index}`)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          {expandedSections.has(`faq-${index}`) ? (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        
                        {expandedSections.has(`faq-${index}`) && (
                          <div className="border-t border-gray-200 p-4">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="comment" className="mt-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Comments & Discussion</h3>
                  <p className="text-gray-600">Comments will be displayed here...</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
                             {/* Video Player */}
               <div className="bg-white rounded-lg p-4">
                 <HeroVideoDialog
                   animationStyle="from-center"
                   videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                   thumbnailSrc={course.imagePath}
                   thumbnailAlt={`${course.title} preview`}
                   className="w-full"
                 />
               </div>

              {/* Pricing & Enrollment */}
              <div className="bg-white rounded-lg p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                    <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    <Badge className="bg-green-100 text-green-800">
                      {course.discount}% off
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {course.daysLeft} days left at this price
                  </p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Free trial
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Buy course
                  </Button>
                </div>
              </div>

                             {/* Course Includes */}
               <div className="bg-white rounded-lg p-6">
                 <h4 className="font-semibold text-gray-900 mb-4">This course includes:</h4>
                 <div className="space-y-3">
                   <div className="flex items-center gap-3">
                     <BookOpen className="w-5 h-5 text-gray-500" />
                     <span className="text-sm text-gray-700">{course.lectures} lectures</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Clock className="w-5 h-5 text-gray-500" />
                     <span className="text-sm text-gray-700">{course.duration}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <BarChart3 className="w-5 h-5 text-gray-500" />
                     <span className="text-sm text-gray-700">{course.level}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Globe className="w-5 h-5 text-gray-500" />
                     <span className="text-sm text-gray-700">{course.language}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Calendar className="w-5 h-5 text-gray-500" />
                     <span className="text-sm text-gray-700">Deadline: {course.deadline}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Award className="w-5 h-5 text-gray-500" />
                     <span className="text-sm text-gray-700">Certificate: {course.certificate ? 'Yes' : 'No'}</span>
                   </div>
                 </div>
               </div>

               {/* Recently Viewed Courses */}
               <div className="bg-white rounded-lg p-6">
                 <h4 className="font-semibold text-gray-900 mb-4">Recently Viewed</h4>
                 <div className="space-y-4">
                   {COURSE_DETAILS.filter(c => c.id !== course.id).slice(0, 2).map((recentCourse) => (
                     <div 
                       key={recentCourse.id} 
                       className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                       onClick={() => navigateToCourse(recentCourse.slug)}
                     >
                       <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                         <img
                           src={recentCourse.imagePath}
                           alt={recentCourse.title}
                           className="w-full h-full object-cover"
                         />
                       </div>
                       <div className="flex-1 min-w-0">
                         <h5 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                           {recentCourse.title}
                         </h5>
                         <div className="flex items-center gap-2 text-xs text-gray-600">
                           <span className="flex items-center gap-1">
                             <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                             {recentCourse.rating}
                           </span>
                           <span>${recentCourse.price}</span>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Popular Tags */}
               <div className="bg-white rounded-lg p-6">
                 <h4 className="font-semibold text-gray-900 mb-4">Popular Tags</h4>
                 <div className="flex flex-wrap gap-2">
                   {['blog', 'business', 'theme', 'bootstrap', 'data science', 'web development', 'tips', 'machine learning'].map((tag) => (
                     <span
                       key={tag}
                       className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                     >
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
                     </div>
         </div>
       </div>

       {/* Related Courses Section */}
       <div className="container mx-auto px-8 lg:px-16 py-12">
         <div className="mb-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-2">Related Courses</h2>
           <p className="text-gray-600">Explore more courses in this category</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {COURSE_DETAILS.filter(c => c.category === course.category && c.id !== course.id).slice(0, 3).map((relatedCourse) => (
             <div 
               key={relatedCourse.id} 
               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
               onClick={() => navigateToCourse(relatedCourse.slug)}
             >
               <div className="relative">
                 <img
                   src={relatedCourse.imagePath}
                   alt={relatedCourse.title}
                   className="w-full h-48 object-cover"
                 />
                 <div className="absolute top-3 right-3">
                   <Badge className={`${getLevelColor(relatedCourse.level)} text-white text-xs`}>
                     {relatedCourse.level}
                   </Badge>
                 </div>
               </div>
               
               <div className="p-4">
                 <div className="flex items-center gap-2 mb-2">
                   <div className="flex gap-1">
                     {renderStars(relatedCourse.rating)}
                   </div>
                   <span className="text-sm text-gray-600">({relatedCourse.rating})</span>
                 </div>
                 
                 <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedCourse.title}</h3>
                 
                 <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                   <span>{relatedCourse.lectures} lectures</span>
                   <span>{relatedCourse.duration}</span>
                 </div>
                 
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <img
                       src={relatedCourse.instructor.avatar}
                       alt={relatedCourse.instructor.name}
                       className="w-6 h-6 rounded-full"
                     />
                     <span className="text-sm text-gray-600">{relatedCourse.instructor.name}</span>
                   </div>
                   <div className="text-right">
                     <div className="flex items-center gap-2">
                       <span className="text-lg font-bold text-gray-900">${relatedCourse.price}</span>
                       <span className="text-sm text-gray-500 line-through">${relatedCourse.originalPrice}</span>
                     </div>
                     <Badge className="bg-green-100 text-green-800 text-xs">
                       {relatedCourse.discount}% off
                     </Badge>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* Video Modal */}
       {isVideoModalOpen && (
         <div 
           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
           onClick={closeVideoModal}
         >
           <div 
             className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
             onClick={(e) => e.stopPropagation()}
           >
             {/* Modal Header */}
             <div className="flex items-center justify-between p-4 border-b border-gray-200">
               <h3 className="text-lg font-semibold text-gray-900">
                 {course.title} - Course Preview
               </h3>
               <button
                 onClick={closeVideoModal}
                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
               >
                 <X className="w-5 h-5 text-gray-500" />
               </button>
             </div>

             {/* Video Content */}
             <div className="relative">
               {/* Placeholder for actual video - replace with your video component */}
               <div className="w-full aspect-video bg-gray-900 flex items-center justify-center">
                 <div className="text-center text-white">
                   <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                     <Play className="w-10 h-10 text-white" />
                   </div>
                   <p className="text-lg font-medium">Course Preview Video</p>
                   <p className="text-sm text-gray-300 mt-2">
                     This is where your actual video content would be displayed
                   </p>
                 </div>
               </div>
               
               {/* Video Controls */}
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                 <div className="flex items-center gap-4 text-white">
                   <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                     <Play className="w-5 h-5" />
                   </button>
                   <div className="flex-1 bg-white bg-opacity-30 rounded-full h-1">
                     <div className="bg-white h-1 rounded-full w-1/3"></div>
                   </div>
                   <span className="text-sm">2:45 / 8:30</span>
                 </div>
               </div>
             </div>

             {/* Modal Footer */}
             <div className="p-4 border-t border-gray-200 bg-gray-50">
               <div className="flex flex-col sm:flex-row gap-3">
                 <Button 
                   onClick={closeVideoModal}
                   variant="outline"
                   className="flex-1"
                 >
                   Close
                 </Button>
                 <Button 
                   className="flex-1 bg-primary hover:bg-primary/90"
                 >
                   Enroll Now
                 </Button>
               </div>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }
