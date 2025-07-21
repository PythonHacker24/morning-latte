'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Pause, Clock, Mic, FileText, Headphones } from 'lucide-react';

const NewsletterPodcastDemo = () => {
  const [animationStep, setAnimationStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioTime, setAudioTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioTime(prev => (prev + 1) % 180); // 3 minute demo loop
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // For demo purposes, we'll simulate audio playback
        // In a real implementation, you'd load and play an actual audio file
        audioRef.current.play().catch(() => {
          // Fallback for demo - just toggle the visual state
          console.log('Demo mode - no actual audio file');
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Audio visualization bars
  const AudioBars: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1 bg-amber-600 rounded-full transition-all duration-300 ${
              isActive 
                ? `animate-pulse` 
                : 'opacity-40'
            }`}
            style={{
              height: isActive ? `${12 + Math.sin((audioTime + i) * 0.5) * 8}px` : '4px',
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    );
  };

  const originalNewsletter = (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto overflow-hidden">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-serif text-gray-800">Tech Weekly Digest</h3>
        </div>
        <div className="text-xs text-gray-500 mb-4">Issue #312 • July 21, 2025 • 15 min read</div>
      </div>
      
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p className="font-medium text-gray-800">This Week: AI Breakthroughs and Market Disruptions</p>
        <p>The latest developments in artificial intelligence continue to reshape industries at an unprecedented pace. Major tech companies announced significant breakthroughs in natural language processing, with new models showing remarkable improvements in reasoning and contextual understanding...</p>
        <p>Venture capital activity reached new heights this quarter, with over $3.2 billion invested across emerging tech startups. The focus has shifted toward practical AI applications in healthcare, finance, and education sectors...</p>
        <p>Regulatory frameworks are finally catching up with technological advancement. New AI governance policies were announced in three major markets, setting precedents for responsible AI development...</p>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400">+ 1,247 more words...</p>
        </div>
      </div>
    </div>
  );

  const podcastScript = (
    <div className="bg-gray-50 rounded-xl shadow-lg p-8 max-w-md mx-auto border border-gray-100">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-serif text-gray-800">Podcast Script</h3>
          </div>
          <div className="flex items-center text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3 mr-1" />
            3 min listen
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
          <div className="flex items-center mb-2">
            <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded">INTRO</span>
          </div>
          <p className="text-sm text-gray-700 italic">&quot;Welcome back to Tech Weekly. I&apos;m your host, and today we&apos;re diving into the AI breakthroughs that are reshaping entire industries...&quot;</p>
        </div>

        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
          <div className="flex items-center mb-2">
            <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">KEY POINT 1</span>
          </div>
          <p className="text-sm text-gray-700 italic">&quot;Let&apos;s start with the biggest story: new AI models are showing unprecedented reasoning capabilities. What does this mean for businesses?&quot;</p>
        </div>

        <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
          <div className="flex items-center mb-2">
            <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded">INSIGHTS</span>
          </div>
          <p className="text-sm text-gray-700 italic">&quot;With $3.2 billion in new funding, VCs are betting big on practical AI applications. The focus has clearly shifted from research to real-world impact...&quot;</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-blue-100">
        <div className="text-xs text-gray-500">Generated from 1,247 words • Conversational format</div>
      </div>
    </div>
  );

  const podcastAudio = (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-8 max-w-md mx-auto border border-gray-700 text-white">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
              <Headphones className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-serif text-white">Tech Weekly Podcast</h3>
          </div>
          <div className="flex items-center text-xs text-amber-400 bg-amber-900 px-2 py-1 rounded-full">
            <Headphones className="w-3 h-3 mr-1" />
            Ready to play
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Waveform Visualization */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <AudioBars isActive={isPlaying} />
          </div>
          
          {/* Play Control */}
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(audioTime / 180) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>{formatTime(audioTime)}</span>
              <span>3:00</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-300 mb-2">Now Playing</p>
          <p className="font-medium text-white">&quot;AI Breakthroughs &amp; Market Disruptions&quot;</p>
          <p className="text-xs text-gray-400 mt-1">Episode 312 • July 21, 2025</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="text-xs text-gray-400">Narrated by AI • For Demo Purposes Only</div>
      </div>

      {/* Hidden audio element for demo */}
      <audio 
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
        style={{ display: 'none' }}
      >
        {/* In a real implementation, you'd have a source element here */}
        <source src="/demo-podcast.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );

  const processingSteps = [
    "Analyzing newsletter content...",
    "Generating podcast script...",
    "Converting to natural speech...",
    "Finalizing audio podcast..."
  ];

  return (
    <div className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-gray-900 mb-4 py-5">
            Introducing Newsletter to Podcast Streaming
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how we transform lengthy newsletters into engaging audio content you can listen to anywhere.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-8">
          {/* Original Newsletter */}
          <div className="flex-1 max-w-md">
            <div className="text-center mb-4">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Original: 15 min read
              </span>
            </div>
            {originalNewsletter}
          </div>

          {/* First Transformation Arrow */}
          <div className="flex-shrink-0 px-4">
            <div className="relative">
              <div className="flex items-center">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-40 animate-pulse">
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

          {/* Podcast Script */}
          <div className="flex-1 max-w-md">
            <div className="text-center mb-4">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Script: Structured for audio
              </span>
            </div>
            {podcastScript}
          </div>

          {/* Second Transformation Arrow */}
          <div className="flex-shrink-0 px-4">
            <div className="flex items-center">
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Final Podcast */}
          <div className="flex-1 max-w-md">
            <div className="text-center mb-4">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Podcast: 3 min listen
              </span>
            </div>
            {podcastAudio}
          </div>
        </div>


      </div>
    </div>
  );
};

export default NewsletterPodcastDemo;