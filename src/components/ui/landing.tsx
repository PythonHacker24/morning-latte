'use client'

import React from 'react';
import { Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from './navbar';
import Footer from './footer';
import NewsletterDemo from './newsletterdemo';
import NewsletterPodcastDemo from './nwslpodcast';

export default function MorningLatteLanding() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
       < Navbar />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-35">
          <div className="text-center">
            <h1 className="text-6xl md:text-6xl font-serif text-gray-900 mb-3 leading-tight">
              Consume Newsletters,<br />
              <span className="text-gray-600">by Listening and Scrolling</span>
            </h1>
            <p className="text-lg text-gray-900/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your inbox chaos into a clean, summarized listening and reading experience. 
              Get the essence of every newsletter in seconds, not minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                Start Your Morning Ritual
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <span className='px-14'>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-gray-900 mb-4">
              Drowning in Information Overload of Newsletters?
            </h2>
            <p className="text-3xs text-gray-900/60 max-w-3xl mx-auto">
                An average person subscribes to 15+ newsletters of their favourite creators and experts. <span className='font-bold'>Most sit unread.</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">Inbox Overwhelm</h3>
              <p className="text-gray-900/60">Hundreds of newsletters competing for your attention every morning</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">Time Drain</h3>
              <p className="text-gray-900/60">Reading full newsletters takes more than 10 minutes each. Who has that time?</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">Lost Information</h3>
              <p className="text-gray-900/60">Treasure of information from your favourite creators is lost in the chaos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-gray-900 mb-6">
                  Be the Smartest Person in the Room
            </h2>
            <p className="text-3xs text-gray-900/60 max-w-3xl mx-auto">
              Morning Latte connects to your inbox, intelligently summarizes every newsletter, 
              and serves you podcasts and reels in a beautiful, distraction-free feed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-serif">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Connect Your Gmail</h3>
                  <p className="text-gray-600">Secure, one-click connection to your existing newsletters</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-serif">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Intelligent Summaries and Audio Streaming</h3>
                  <p className="text-gray-600">Extract key insights, trends, and actionable points automatically</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-serif">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Clean Learning Experience</h3>
                  <p className="text-gray-600">Listen to newsletters, scroll through summaries, click to read full versions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-serif text-lg mb-4">Your Morning Feed</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-gray-900 pl-4">
                    <h5 className="font-medium text-sm text-gray-500">TECH DIGEST</h5>
                    <p className="text-sm mt-1">AI regulation updates, new React features, and startup funding trends...</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h5 className="font-medium text-sm text-gray-500">MARKET INSIGHTS</h5>
                    <p className="text-sm mt-1">Q3 earnings preview, inflation data, and commodity price movements...</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h5 className="font-medium text-sm text-gray-500">DESIGN WEEKLY</h5>
                    <p className="text-sm mt-1">New design system patterns, accessibility updates, and tool reviews...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterPodcastDemo />

      <NewsletterDemo />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-gray-900 mb-6">
              Reclaim your Smart Morning Routine
            </h2>
            <span className='text-lg font-serif italic text-gray-500'>&quot;Not all readers are leaders, but all leaders are readers.&quot; - Harry S. Truman</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif text-gray-900 mb-4">10+ min → 30 sec</div>
              <h3 className="text-xl font-serif mb-3">Time Saved</h3>
              <p className="text-gray-600">Get the same insights in a fraction of the time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-gray-900 mb-4">Zero</div>
              <h3 className="text-xl font-serif mb-3">Inbox Clutter</h3>
              <p className="text-gray-600">Clean inbox, organized mind</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-gray-900 mb-4">100%</div>
              <h3 className="text-xl font-serif mb-3">Stay Informed</h3>
              <p className="text-gray-600">Never miss important updates again</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">
            Start Your Perfect Morning Ritual
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No more impulsive newsletter subscribing and ghosting. 
            Get started in under 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div>
          <p className="text-gray-400 text-xs">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
