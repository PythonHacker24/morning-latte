'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';

import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Image from 'next/image';

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
        <Navbar /> 

      {/* Hero Section with Gradient Overlay */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Hero Image Centered */}
         {/* Placeholder for Hero Image */}
         <div className="absolute inset-0 bg-gradient-to-r from-black to-black">
            {/* <Image src='/cropped-wolf.png' width={4000} height={4000} alt='hero'/> */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-60"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            The Morning Latte Manifesto
          </h1>
          <p className="text-xl md:text-2xl font-serif mb-6 max-w-3xl mx-auto leading-relaxed">
            We are busy professionals who love to be updated with content written by the best writers
          </p>
          <div className="text-lg md:text-xl text-gray-300 font-serif italic">
            &quot;The best investment is in yourself&quot; — Warren Buffett
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-serif text-gray-900 mb-8 leading-tight">
                Our Manifesto
              </h2>
            </div>
            
            {/* First Section */}
            <div className="font-serif mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                <span className="text-6xl text-gray-900 float-left mr-3 mt-2 leading-none">W</span>
                e believe that knowledge is the ultimate currency of success. In a world overflowing with information, 
                the true differentiator isn&apos;t access to data. It&apos;s the ability to distill wisdom from the noise. 
                Every morning, millions of newsletters land in inboxes worldwide, carrying insights from industry 
                titans, thought leaders, and visionaries who&apos;ve shaped our world.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                Yet most of these treasures remain unread, buried beneath the weight of digital overwhelm. 
                We refuse to let brilliance go unnoticed. We refuse to let your growth be limited by time constraints 
                or information overload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section 1 */}
      <section className="py-16 bg-gray-50 items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <Image src={'/children-studying.jpg'} width={700} height={700} alt='reading' />
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                <span className="text-6xl text-gray-900 float-left mr-3 mt-2 leading-none">M</span>
                orning Latte isn&apos;t just a product, it&apos;s a movement. A tool for relentless learners who understand 
                that the gap between good and great is measured not in talent alone, but in the quality of ideas
                they consume and the speed at which they can act upon them.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                We&apos;ve watched too many brilliant minds plateau because they couldn&apos;t keep pace with the exponential 
                growth of knowledge in their fields. We&apos;ve seen entrepreneurs miss breakthrough insights because they 
                were drowning in their own success. We&apos;ve witnessed students graduate without ever learning from the 
                masters who could have accelerated their journey by decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section 1 */}
      <section className="py-16 bg-gray-50 items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <Image src={'/workplace.jpg'} width={700} height={700} alt='reading' />
        </div>
      </section>

      {/* Final Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                <span className="text-6xl  text-gray-900 float-left mr-3 mt-2 leading-none">T</span>
                his is our promise: Every morning, we&apos;ll deliver the concentrated wisdom of the world&apos;s 
                greatest minds directly to your consciousness. No fluff. No filler. Just pure, actionable 
                intelligence that compounds your growth daily.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                Join us at <span className="font-bold">Morning Latte</span>. Not because you need another app, but because you refuse to 
                let another day pass without becoming a better version of yourself. Because you understand 
                that in the economy of ideas, the wealthy are those who learn fastest.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                The masters are waiting. Their wisdom is ready. Your growth is inevitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">
            Ready to Join Morning Latte?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey with the world&apos;s most curated learning experience. 
            Your future self will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              Begin Your Growth Journey
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-gray-400 text-sm">Join thousands of ambitious learners</p>
          </div>
        </div>
      </section>

      {/* Footer */}
        <Footer /> 
    </div>
  );
}