'use client'

import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Clock, Star } from 'lucide-react';

import Navbar from '@/components/ui/navbar';
import StudentAnnouncement from './students';

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
        <Navbar />
        <StudentAnnouncement />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            Choose Your Perfect<br />
            <span className="text-gray-600">Morning Ritual</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Start free and upgrade as your reading habits grow. Every plan includes 
            intelligent summaries and a beautiful reading experience.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="mx-4 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900 transition-colors duration-200 ease-in-out focus:outline-none"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 text-sm text-green-600 font-medium">Save 25%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Free Tier */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-2">Free</h3>
                <p className="text-gray-600 mb-6">Perfect for newsletter newcomers</p>
                <div className="mb-6">
                  <span className="text-4xl font-serif text-gray-900">$0</span>
                  <span className="text-gray-600 ml-2">forever</span>
                </div>
                <button className="w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
                  Get Started Free
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Up to 5 newsletters</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic summaries</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Clean reading interface</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Mobile app access</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">7-day reading history</span>
                </div>
              </div>
            </div>

            {/* Pro Tier */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-gray-900 p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600 mb-6">Essential for busy professionals</p>
                <div className="mb-6">
                  {isAnnual ? (
                    <div>
                      <span className="text-4xl font-serif text-gray-900">$9</span>
                      <span className="text-gray-600 ml-2">per month</span>
                      <div className="text-sm text-gray-500 mt-1">
                        $90 billed annually
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-serif text-gray-900">$12</span>
                      <span className="text-gray-600 ml-2">per month</span>
                    </div>
                  )}
                </div>
                <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center">
                  Start 14 Days Free Trial
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-3">
                  Everything in Free, plus:
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Unlimited newsletters</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AI-powered insights & trends</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom categories & tags</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced search & filters</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Export summaries to notes</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Priority support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Unlimited reading history</span>
                </div>
              </div>
            </div>

            {/* Team Tier */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-2">Team</h3>
                <p className="text-gray-600 mb-6">For leaders who believe in team growth through expert writings</p>
                <div className="mb-6">
                  <span className="text-4xl font-serif text-gray-900">Custom</span>
                  <div className="text-sm text-gray-500 mt-1">
                    Pricing based on team size
                  </div>
                </div>
                <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  Contact Sales
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-3">
                  Everything in Pro, plus:
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Team dashboard & analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Shared reading lists</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Team collaboration tools</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Admin controls & permissions</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom integrations</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">SLA & 24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Why Professionals Choose Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your reading from casual browsing to strategic insight gathering
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Zap className="h-12 w-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600">Discover patterns and trends across your newsletters that you&apos;d never notice manually</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Save 10+ Hours Weekly</h3>
              <p className="text-gray-600">Professional readers save an average of 10 hours per week with intelligent summaries</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Star className="h-12 w-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Stay Ahead</h3>
              <p className="text-gray-600">Never miss industry trends or expert insights that could impact your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-serif text-gray-900 mb-3">Can I switch plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-serif text-gray-900 mb-3">How does the Gmail integration work?</h3>
              <p className="text-gray-600">We use secure OAuth to connect to your Gmail. We only read newsletters, never personal emails, and never store your Gmail password.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-serif text-gray-900 mb-3">What happens to my data if I cancel?</h3>
              <p className="text-gray-600">Your data remains accessible for 30 days after cancellation. After that, it&apos;s permanently deleted from our servers.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-serif text-gray-900 mb-3">Is there a free trial for Pro?</h3>
              <p className="text-gray-600">Yes! Every Pro subscription comes with a 14-day free trial. No credit card required to start.</p>
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
            Join thousands of professionals who&apos;ve transformed their reading habits. 
            Start free and upgrade when you&apos;re ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-gray-400 text-sm">No credit card required • 14-day Pro trial</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-serif text-sm">ML</span>
                </div>
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