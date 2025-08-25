'use client';

import React from 'react';
import { HeroVideoDialog } from '@/components/magicui/hero-video-dialog';
import { Play, BookOpen, Users, Award, Clock, CheckCircle } from 'lucide-react';

export default function VideoFeatureSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience Learning Like Never Before
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative approach to education with interactive video content, 
            expert instructors, and cutting-edge learning technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Video Component */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <HeroVideoDialog
                animationStyle="from-left"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="/images/course-hero-img.png"
                thumbnailAlt="Interactive Learning Experience"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Interactive Video Learning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Engage with high-quality video content that adapts to your learning pace. 
                    Our interactive videos make complex concepts easy to understand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprehensive Course Library
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access thousands of courses across various disciplines, from beginner to advanced levels, 
                    all designed by industry experts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Instructors
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Learn from certified professionals and industry leaders who bring real-world 
                    experience and practical knowledge to every lesson.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Certificates & Recognition
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Earn industry-recognized certificates upon completion and showcase your new skills 
                    to advance your career or personal development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Learn at Your Own Pace
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Study whenever and wherever you want. Our platform adapts to your schedule, 
                    allowing you to learn at your own comfortable pace.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Proven Learning Methods
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our curriculum is built on research-backed learning methodologies that ensure 
                    maximum retention and practical application of knowledge.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Learning Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
