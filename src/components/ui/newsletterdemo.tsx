'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, TrendingUp, Lightbulb, Users, Zap } from 'lucide-react';

const NewsletterDemo = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const originalNewsletter = (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto overflow-hidden">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-serif text-gray-800">AI Weekly Insights</h3>
        </div>
        <div className="text-xs text-gray-500 mb-4">Issue #247 • March 15, 2025 • 12 min read</div>
      </div>
      
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p className="font-medium text-gray-800">This Week in AI: Major Breakthroughs and Market Shifts</p>
        <p>OpenAIcomma&apos;s latest research reveals GPT-5 could deliver unprecedented performance improvements, with internal benchmarks showing 100x faster processing speeds and significantly enhanced reasoning capabilities. Industry insiders suggest this breakthrough could fundamentally reshape enterprise AI adoption timelines...</p>
        <p>Meanwhile, venture capital continues flooding into AI startups with $2.1 billion invested this week alone across 47 companies. Notable funding rounds include Anthropic&apos;s $450M Series C and emerging players in AI infrastructure who are building the next generation of model training platforms...</p>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400">+ 847 more words...</p>
        </div>
      </div>
    </div>
  );

  const transformedNewsletter = (
    <div className="bg-gray-50 rounded-xl shadow-lg p-8 max-w-md mx-auto border border-gray-100">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-serif text-gray-800">AI Weekly Insights</h3>
          </div>
          <div className="flex items-center text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3 mr-1" />
            30s read
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
            <span className="font-medium font-serif text-gray-800">Key Trend</span>
          </div>
          <p className="text-sm text-gray-700">GPT-5 rumors suggest 100x performance improvement, potentially revolutionizing enterprise AI adoption.</p>
        </div>

        <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
          <div className="flex items-center mb-2">
            <Lightbulb className="w-4 h-4 text-green-600 mr-2" />
            <span className="font-medium font-serif text-gray-800">Actionable Insight</span>
          </div>
          <p className="text-sm text-gray-700">Companies should start preparing AI infrastructure now - early adopters will gain 6-month advantage.</p>
        </div>

        <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
          <div className="flex items-center mb-2">
            <Users className="w-4 h-4 text-purple-600 mr-2" />
            <span className="font-medium font-serif text-gray-800">Market Impact</span>
          </div>
          <p className="text-sm text-gray-700">$2.1B in new AI funding this week signals investor confidence in breakthrough technologies.</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-blue-100">
        <div className="text-xs text-gray-500">Extracted from 847 words • 3 key insights identified</div>
      </div>
    </div>
  );

  const processingSteps = [
    "Analyzing newsletter content...",
    "Identifying key insights...",
    "Extracting actionable points...",
    "Generating summary..."
  ];

  return (
    <div className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-gray-900 mb-4 py-5">
            See the Magic in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how Morning Latte transforms a lengthy AI newsletter into digestible, actionable insights
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Original Newsletter */}
          <div className="flex-1 max-w-md">
            <div className="text-center mb-4">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Before: 12 min read
              </span>
            </div>
            {originalNewsletter}
          </div>

          {/* Transformation Arrow */}
          <div className="flex-shrink-0 px-10">
            <div className="relative">
              <div className="flex items-center">
                <span className="mr-2 font-serif text-xl">Transform</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-48 animate-pulse">
                <div className="text-xs text-gray-600 text-center">
                  {processingSteps[animationStep]}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div 
                    className="bg-amber-600 h-1 rounded-full transition-all duration-500"
                    style={{ width: `${(animationStep + 1) * 25}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformed Newsletter */}
          <div className="flex-1 max-w-md">
            <div className="text-center mb-4">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                After: 30 sec read
              </span>
            </div>
            {transformedNewsletter}
          </div>
        </div>

        {/* Stats
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="font-serif text-center">
            <div className="text-3xl text-black mb-2">95%</div>
            <div className="text-gray-600">Less Reading Time</div>
          </div>
          <div className="font-serif text-center">
            <div className="text-3xl text-black mb-2">3x</div>
            <div className="text-gray-600">Better Retention</div>
          </div>
          <div className="font-serif text-center">
            <div className="text-3xl text-black mb-2">100%</div>
            <div className="text-gray-600">Key Insights Captured</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NewsletterDemo;