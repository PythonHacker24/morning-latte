'use client'

import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { ArrowRight } from 'lucide-react';

export default function ForWriters() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     <Navbar /> 

      {/* Hero Section */}
      <section className="relative h-150 flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cg fill='%23ffffff' opacity='0.1'%3E%3Crect x='100' y='120' width='280' height='160' rx='8'/%3E%3Ccircle cx='240' cy='200' r='40'/%3E%3Crect x='420' y='180' width='360' height='40' rx='20'/%3E%3Crect x='50' y='80' width='120' height='20' rx='10'/%3E%3Crect x='200' y='90' width='200' height='15' rx='7'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-7xl font-serif mb-6">Your Writing Deserves More Audience</h1>
          <p className="text-xl mb-4 opacity-90">
            Get your newsletter in front of thousands of engaged readers
          </p>
          <p className="text-lg font-serif opacity-75 italic">
            &quot;Content is king, but distribution is queen and she wears the pants&quot; — Jonathan Perelman
          </p>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto font-serif">
          <h2 className="text-5xl font-serif text-center mb-16 text-gray-900">Our Promise to Writers</h2>
          
          <div className="text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              <span className="text-6xl font-serif float-left mr-4 mt-2 leading-none text-gray-900">W</span>
              e believe that every great newsletter deserves to be read. In a world where inbox chaos drowns out brilliant content, we serve as the bridge between exceptional writers and hungry readers. Whether you&apos;re building a personal brand, sharing industry insights, or running a company newsletter, we ensure your voice reaches the audience it deserves.
            </p>
            
            <p className="text-xl mb-8">
              Your words have power. Your insights have value. We refuse to let them get lost in the digital noise. We refuse to let your growth be limited by distribution challenges or discovery gaps.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif text-center mb-16 text-gray-900">
            Expand Your Reach,<br />
            Grow Your Audience
          </h2>
          
          <p className="text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
            Transform your newsletter distribution from a challenge into a competitive advantage. 
            Connect with readers who crave quality content.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - How it works */}
            <div className="space-y-8 font-serif">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl text-black mb-2">Submit Your Newsletter</h3>
                  <p className="text-gray-600">
                    Share your newsletter with our curation team. We welcome personal brands, industry experts, and company publications.
                  </p>
                </div>
              </div>

              <div className="flex text-black items-start space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl mb-2">Intelligent Audio Conversion and Summarization</h3>
                  <p className="text-gray-600">
                    Our AI extracts key insights and compelling hooks from your content, creating quick podcasts and engaging summaries that drive clicks.
                  </p>
                </div>
              </div>

              <div className="flex text-black items-start space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl mb-2">Featured Distribution</h3>
                  <p className="text-gray-600">
                    Get featured in our curated feeds, reaching thousands of professionals who actively seek quality content to consume and share.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Sample feed */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-serif mb-4 text-gray-900">Your Content in Action</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="text-sm font-medium text-blue-600 mb-1">TECH INSIGHTS</div>
                  <p className="text-gray-800 text-sm font-medium mb-1">The Future of Remote Work: 5 Trends Every Leader Should Know</p>
                  <p className="text-xs text-gray-600">AI adoption, hybrid policies, and productivity metrics reshaping...</p>
                  <div className="text-xs text-gray-500 mt-2">by Sarah Chen • TechLeader Weekly</div>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="text-sm font-medium text-green-600 mb-1">STARTUP STORIES</div>
                  <p className="text-gray-800 text-sm font-medium mb-1">From Side Project to $10M ARR: A Bootstrap Journey</p>
                  <p className="text-xs text-gray-600">Customer discovery, product-market fit, and scaling challenges...</p>
                  <div className="text-xs text-gray-500 mt-2">by Mike Rodriguez • Founder&apos;s Path</div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <div className="text-sm font-medium text-purple-600 mb-1">DESIGN WEEKLY</div>
                  <p className="text-gray-800 text-sm font-medium mb-1">Minimalism vs. Maximalism: Finding Your Design Voice</p>
                  <p className="text-xs text-gray-600">Brand personality, user psychology, and aesthetic trends...</p>
                  <div className="text-xs text-gray-500 mt-2">by Emma Thompson • Design Decoded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">
            Boost Your Newsletter with Right Audience
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join writers who&apos;ve expanded their reach with Morning Latte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-gray-400 text-sm">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer />
    </div>
  );
}