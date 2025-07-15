'use client'

import React, { useState } from 'react';
import { GraduationCap, X, ArrowRight } from 'lucide-react';

export default function StudentAnnouncement() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gray-900 text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-1">
          <GraduationCap className="h-5 w-5 text-white" />
          <span className="text-sm font-medium">
            Students get Pro for <span className="font-serif text-white">free</span> with educational email
          </span>
          <button className="ml-2 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
            Claim Student Access
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          style={{ lineHeight: 0 }}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}