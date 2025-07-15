'use client'

import React from 'react';
import { Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MorningLatteLanding() {

  const router = useRouter();

  const Onboard = () => {
    router.push('/onboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-1">
              <Image src="/logo.png" width={40} height={40} alt="logo" />
              <span className="text-2xl font-serif text-gray-900">Morning Latte</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors" onClick={Onboard}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
              Scroll Newsletters,<br />
              <span className="text-gray-600">like Instagram Reels</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your inbox chaos into a clean, summarized reading experience. 
              Get the essence of every newsletter in seconds, not minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                Start Your Morning Ritual
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Drowning in Newsletters?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                An average person subscribes to 15+ newsletters of their favourite creators and experts. Most sit unread.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Inbox Overwhelm</h3>
              <p className="text-gray-600">Hundreds of newsletters competing for your attention every morning</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Time Drain</h3>
              <p className="text-gray-600">Reading full newsletters takes 3-5 minutes each. Who has that time?</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Lost Information</h3>
              <p className="text-gray-600">Treasure of information from your favourite creators is lost in the chaos</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Morning Latte connects to your Gmail, intelligently summarizes every newsletter, 
              and serves you Reels in a beautiful, distraction-free feed.
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
                  <h3 className="text-xl font-serif mb-2">Intelligent Summaries</h3>
                  <p className="text-gray-600">Extract key insights, trends, and actionable points automatically</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-serif">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Clean Reading Experience</h3>
                  <p className="text-gray-600">Scroll through summaries in seconds, click to read full versions</p>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-gray-900 mb-6">
              Reclaim your Smart Morning Routine
            </h2>
            <span className='text-lg font-style: italic text-gray-500'>"Not all readers are leaders, but all leaders are readers." - Harry S. Truman</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif text-gray-900 mb-4">5 min → 30 sec</div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition-colors flex items-center gap-2" onClick={Onboard}>
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-gray-400 text-sm">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Morning Latte Logo" className="h-6 w-6" />
                <span className="text-lg font-serif text-gray-900">Morning Latte</span>
              </div>
              <p className="text-gray-600 text-sm">
                Your newsletters, perfectly brewed every morning.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
            © 2025 Morning Latte. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
