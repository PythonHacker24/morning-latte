'use client'

import React, { useState } from 'react';
import { Home, Compass, User, ExternalLink, Mail, Heart, Bookmark, Share, Twitter, Linkedin, Users, Moon, Sun, Bell, Globe, Palette, Coffee, Clock, Zap, Shield, Eye } from 'lucide-react';
import Image from 'next/image';

// Discover Page Component
function DiscoverPage() {
  const [subscribing, setSubscribing] = useState<number | null>(null);

  const topPicks = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Tech Strategist & AI Expert",
      newsletter: "The AI Weekly",
      bio: "Former Google PM turned AI newsletter writer. Covers the latest in machine learning, startups, and tech policy.",
      subscribers: "125K",
      avatar: "https://warburgpincus.com/wp-content/uploads/2019/10/Sarah-Chen-web-1024x991.jpg",
      tags: ["AI", "Technology", "Startups"],
      social: {
        twitter: "@sarahchen",
        linkedin: "sarah-chen-ai",
        website: "aiweekly.com"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Finance & Markets Analyst",
      newsletter: "Market Pulse",
      bio: "15 years on Wall Street. Now breaking down complex market trends for everyday investors.",
      subscribers: "89K",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      tags: ["Finance", "Markets", "Investment"],
      social: {
        twitter: "@marcusmarkets",
        linkedin: "marcus-rodriguez-finance",
        website: "marketpulse.io"
      }
    },
    {
      id: 3,
      name: "Dr. Emma Watson",
      title: "Climate Scientist",
      newsletter: "Climate Clarity",
      bio: "Making climate science accessible. Weekly insights on sustainability, policy, and green technology.",
      subscribers: "67K",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      tags: ["Climate", "Science", "Environment"],
      social: {
        twitter: "@dremmaclimate",
        linkedin: "dr-emma-watson-climate",
        website: "climateclarity.org"
      }
    },
    {
      id: 4,
      name: "Alex Kim",
      title: "Product Design Leader",
      newsletter: "Design Systems",
      bio: "Design director at top tech companies. Sharing insights on UX, design systems, and product thinking.",
      subscribers: "45K",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      tags: ["Design", "UX", "Product"],
      social: {
        twitter: "@alexkimdesign",
        linkedin: "alex-kim-design",
        website: "designsystems.guide"
      }
    }
  ];

  const inspiration = [
    {
      id: 5,
      name: "Lisa Park",
      title: "Wellness Coach",
      newsletter: "Mindful Mornings",
      bio: "Daily practices for mental wellness and productivity.",
      subscribers: "32K",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&h=120&fit=crop&crop=face",
      tags: ["Wellness", "Mindfulness"],
      social: { twitter: "@lisapark", website: "mindfulmornings.co" }
    },
    {
      id: 6,
      name: "David Kumar",
      title: "Startup Founder",
      newsletter: "Founder's Journal",
      bio: "Real stories from the startup trenches.",
      subscribers: "28K",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
      tags: ["Startups", "Entrepreneurship"],
      social: { twitter: "@davidkumar", website: "foundersjournal.com" }
    },
    {
      id: 7,
      name: "Rachel Green",
      title: "Food Writer",
      newsletter: "Seasonal Eats",
      bio: "Sustainable cooking and seasonal recipes.",
      subscribers: "41K",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
      tags: ["Food", "Sustainability"],
      social: { twitter: "@rachelgreen", website: "seasonaleats.com" }
    },
    {
      id: 8,
      name: "Tom Zhang",
      title: "Crypto Analyst",
      newsletter: "Crypto Decoded",
      bio: "Making sense of the crypto world.",
      subscribers: "55K",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face",
      tags: ["Crypto", "DeFi"],
      social: { twitter: "@tomzhang", website: "cryptodecoded.io" }
    },
    {
      id: 9,
      name: "Maya Patel",
      title: "Travel Writer",
      newsletter: "Wanderlust Weekly",
      bio: "Hidden gems and travel tips from around the world.",
      subscribers: "38K",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
      tags: ["Travel", "Culture"],
      social: { twitter: "@mayapatel", website: "wanderlustweekly.com" }
    }
  ];

  const handleSubscribe = async (writerId: number) => {
    setSubscribing(writerId);
    // Simulate API call
    setTimeout(() => {
      setSubscribing(null);
    }, 1500);
  };

  type Writer = {
    id: number;
    name: string;
    title: string;
    newsletter: string;
    bio: string;
    subscribers: string;
    avatar: string;
    tags: string[];
    social: {
      twitter?: string;
      linkedin?: string;
      website?: string;
    };
  };

  type WriterCardProps = {
    writer: Writer;
    size?: 'large' | 'small';
  };

  const WriterCard: React.FC<WriterCardProps> = ({ writer, size = 'large' }) => (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex-shrink-0 ${
      size === "large" ? "w-80" : "w-64"
    }`}>
      <div className={`p-${size === "large" ? "6" : "4"}`}>
        <div className="flex items-start space-x-4">
          <img
            src={writer.avatar}
            alt={writer.name}
            className={`${size === "large" ? "w-16 h-16" : "w-12 h-12"} rounded-full object-cover`}
          />
          <div className="flex-1 min-w-0">
            <h3 className={`font-serif ${size === "large" ? "text-lg" : "text-base"} text-gray-900 mb-1`}>
              {writer.name}
            </h3>
            <p className={`text-gray-600 ${size === "large" ? "text-sm" : "text-xs"} mb-1`}>
              {writer.title}
            </p>
            <p className={`text-amber-600 font-medium ${size === "large" ? "text-sm" : "text-xs"} mb-2`}>
              {writer.newsletter}
            </p>
          </div>
        </div>
        
        <p className={`text-gray-600 ${size === "large" ? "text-sm" : "text-xs"} mb-4 leading-relaxed`}>
          {writer.bio}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <Users className="h-4 w-4" />
            <span className="text-sm">{writer.subscribers} subscribers</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {writer.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className={`px-2 py-1 bg-gray-100 text-gray-600 rounded-full ${size === "large" ? "text-xs" : "text-xs"}`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {writer.social.twitter && (
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {writer.social.linkedin && (
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {writer.social.website && (
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Globe className="h-4 w-4" />
              </a>
            )}
          </div>
          
          <button
            onClick={() => handleSubscribe(writer.id)}
            disabled={subscribing === writer.id}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${size === "large" ? "text-sm" : "text-xs"} ${
              subscribing === writer.id
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : 'bg-amber-600 text-white hover:bg-amber-700'
            }`}
          >
            {subscribing === writer.id ? 'Joining...' : 'Join Newsletter'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-serif text-gray-900">Discover Writers</h1>
          <p className="text-gray-600 mt-1">Find your next favorite newsletter</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Top Picks Section */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Top Picks for You</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {topPicks.map((writer) => (
              <WriterCard key={writer.id} writer={writer} size="large" />
            ))}
          </div>
        </div>

        {/* Get Inspired Section
        <div>
          <h2 className="text-xl font-serif text-gray-900 mb-6">Get Inspired by these</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {inspiration.map((writer) => (
              <WriterCard key={writer.id} writer={writer} size="small" />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

function Preferences() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [autoUpdate, setAutoUpdate] = useState(true);
    const [dataCollection, setDataCollection] = useState(false);
    const [readingMode, setReadingMode] = useState(false);
    const [newsletterFreq, setNewsletterFreq] = useState('weekly');
    const [timezone, setTimezone] = useState('asia/kolkata');
    const [theme, setTheme] = useState('warm');
    const [digestTime, setDigestTime] = useState('08:00');
    const [contentLength, setContentLength] = useState('medium');
  
    type ToggleSwitchProps = {
      checked: boolean;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      label: string;
      description?: string;
    };
    const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label, description }) => (
      <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <span className="text-gray-800 font-medium">{label}</span>
          </div>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only peer"
          />
          <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-200 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-amber-600 transition-all duration-300 shadow-inner">
            <div className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-0.5 peer-checked:translate-x-6 mt-0.5"></div>
          </div>
        </label>
      </div>
    );
  
    type SelectFieldProps = {
      label: string;
      value: string;
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
      options: { value: string; label: string }[];
      icon: React.ElementType;
    };
    const SelectField: React.FC<SelectFieldProps> = ({ label, value, onChange, options, icon: Icon }) => (
      <div className="py-4 border-b border-gray-100 last:border-b-0">
        <div className="flex items-center space-x-3 mb-2">
          <Icon className="h-5 w-5 text-amber-600" />
          <label className="text-gray-800 font-medium">{label}</label>
        </div>
        <select
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-colors bg-white text-gray-800"
        >
          {options.map((option: { value: string; label: string }) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  
    return (
      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8 flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src="/api/placeholder/80/80"
              alt="Profile Photo"
              className="w-20 h-20 rounded-full object-cover border-4 border-amber-100"
            />
            <button className="absolute bottom-0 right-0 bg-amber-600 text-white rounded-full p-1 hover:bg-amber-700 transition-colors border-2 border-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.94l-4.243 1.415 1.415-4.243a4 4 0 01.94-1.414z" />
              </svg>
            </button>
          </div>
          <form className="w-full max-w-sm flex flex-col items-center">
            <label className="text-gray-700 font-medium mb-1" htmlFor="username">Username</label>
            <div className="flex w-full mb-2">
              <input
                id="username"
                type="text"
                defaultValue="John Doe"
                className="flex-1 text-black px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
              <button type="button" className="bg-amber-600 text-white px-4 py-2 rounded-r-md hover:bg-amber-700 transition-colors font-medium">Save</button>
            </div>
          </form>
          <p className="text-gray-500 text-sm">aditya@example.com</p>
        </div>
  
        {/* Integrations */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-serif text-gray-900 mb-4">Integrations</h2>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-red-500" />
              <span className="font-medium text-gray-800">Gmail</span>
            </div>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-medium">Connect</button>
          </div>
        </div>
  
        {/* Enhanced Preferences */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg p-2">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-serif text-gray-900">Preferences</h2>
          </div>
  
          {/* Appearance Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <Sun className="h-5 w-5 text-amber-600 mr-2" />
              Appearance
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <ToggleSwitch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                label="Dark Mode"
                description="Switch to a darker theme for comfortable reading"
              />
              <ToggleSwitch
                checked={readingMode}
                onChange={(e) => setReadingMode(e.target.checked)}
                label="Reading Mode"
                description="Enhanced typography and spacing for better reading experience"
              />
              <SelectField
                label="Color Theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                icon={Palette}
                options={[
                  { value: 'warm', label: 'Warm (Coffee & Amber)' },
                  { value: 'cool', label: 'Cool (Blue & Teal)' },
                  { value: 'neutral', label: 'Neutral (Gray & Black)' },
                  { value: 'nature', label: 'Nature (Green & Brown)' }
                ]}
              />
            </div>
          </div>
  
          {/* Content & Delivery Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <Coffee className="h-5 w-5 text-amber-600 mr-2" />
              Content & Delivery
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <SelectField
                label="Newsletter Frequency"
                value={newsletterFreq}
                onChange={(e) => setNewsletterFreq(e.target.value)}
                icon={Bell}
                options={[
                  { value: 'daily', label: 'Daily - Fresh brew every morning' },
                  { value: 'weekly', label: 'Weekly - Sunday summary' },
                  { value: 'monthly', label: 'Monthly - Best of the month' }
                ]}
              />
              <SelectField
                label="Preferred Delivery Time"
                value={digestTime}
                onChange={(e) => setDigestTime(e.target.value)}
                icon={Clock}
                options={[
                  { value: '06:00', label: '6:00 AM - Early Bird' },
                  { value: '08:00', label: '8:00 AM - Morning Brew' },
                  { value: '10:00', label: '10:00 AM - Mid-Morning' },
                  { value: '12:00', label: '12:00 PM - Lunch Break' },
                  { value: '18:00', label: '6:00 PM - Evening Digest' }
                ]}
              />
              <SelectField
                label="Content Length"
                value={contentLength}
                onChange={(e) => setContentLength(e.target.value)}
                icon={Eye}
                options={[
                  { value: 'short', label: 'Short - Quick sips (2-3 min read)' },
                  { value: 'medium', label: 'Medium - Perfect brew (5-7 min read)' },
                  { value: 'long', label: 'Long - Deep dive (10+ min read)' }
                ]}
              />
              <SelectField
                label="Timezone"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                icon={Globe}
                options={[
                  { value: 'asia/kolkata', label: 'Asia/Kolkata (IST)' },
                  { value: 'america/new_york', label: 'America/New_York (EST)' },
                  { value: 'europe/london', label: 'Europe/London (GMT)' },
                  { value: 'asia/tokyo', label: 'Asia/Tokyo (JST)' },
                  { value: 'australia/sydney', label: 'Australia/Sydney (AEST)' }
                ]}
              />
            </div>
          </div>
  
          {/* Notifications Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <Bell className="h-5 w-5 text-amber-600 mr-2" />
              Notifications
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <ToggleSwitch
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                label="Push Notifications"
                description="Get notified when your daily brew is ready"
              />
              <ToggleSwitch
                checked={autoUpdate}
                onChange={(e) => setAutoUpdate(e.target.checked)}
                label="Auto-refresh Content"
                description="Automatically update content in real-time"
              />
            </div>
          </div>
  
          {/* Privacy Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <Shield className="h-5 w-5 text-amber-600 mr-2" />
              Privacy & Data
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <ToggleSwitch
                checked={dataCollection}
                onChange={(e) => setDataCollection(e.target.checked)}
                label="Personalized Recommendations"
                description="Allow us to analyze your reading patterns for better content suggestions"
              />
            </div>
          </div>
  
          {/* Save Button */}
          <div className="pt-6 border-t border-gray-200">
            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Save Preferences</span>
            </button>
          </div>
        </div>
  
        {/* Support & Feedback */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-serif text-gray-900 mb-4">Support & Feedback</h2>
          <form className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 mb-1">Send us your feedback</label>
            <textarea
              id="feedback"
              rows={3}
              className="w-full border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200 mb-2"
              placeholder="Your feedback..."
            ></textarea>
            <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-medium">Submit</button>
          </form>
          <div className="text-sm text-gray-600">
            Or email us at <a href="mailto:support@morninglatte.com" className="text-amber-600 hover:underline">support@morninglatte.com</a>
          </div>
        </div>
      </div>
    );
  }

export default function NewsletterFeed() {
  const [activeTab, setActiveTab] = useState('home');
  
  // Sample newsletter data
  const newsletters = [
    {
      id: 1,
      title: "The AI Revolution: What's Next for 2025",
      source: "Tech Daily",
      date: "2025-07-15",
      timeAgo: "2 hours ago",
      readTime: "3 min read",
      summary: "OpenAI announces GPT-5 capabilities, Google's new Gemini updates, and how AI regulation is shaping the industry. Key trends include multimodal AI, enterprise adoption, and the rise of AI-powered productivity tools.",
      tags: ["AI", "Technology", "Innovation"],
      isLiked: false,
      isSaved: false,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 2,
      title: "Market Moves: Q3 Earnings Preview",
      source: "Wall Street Insights",
      date: "2025-07-15",
      timeAgo: "4 hours ago",
      readTime: "4 min read",
      summary: "Major tech companies report mixed results. Apple beats expectations, Tesla faces challenges, and emerging markets show strong growth. Fed signals potential rate adjustments ahead.",
      tags: ["Finance", "Markets", "Economy"],
      isLiked: true,
      isSaved: false,
      color: "bg-green-50 border-green-200"
    },
    {
      id: 3,
      title: "Design Systems That Scale",
      source: "UX Weekly",
      date: "2025-07-14",
      timeAgo: "1 day ago",
      readTime: "5 min read",
      summary: "Best practices for building design systems that grow with your team. Covers component libraries, design tokens, and collaboration workflows between designers and developers.",
      tags: ["Design", "UX", "Development"],
      isLiked: false,
      isSaved: true,
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: 4,
      title: "Climate Tech Breakthrough",
      source: "Green Tomorrow",
      date: "2025-07-14",
      timeAgo: "1 day ago",
      readTime: "6 min read",
      summary: "New carbon capture technology promises 90% efficiency. Major funding rounds for clean energy startups and policy updates from the climate summit.",
      tags: ["Climate", "Technology", "Environment"],
      isLiked: false,
      isSaved: false,
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      id: 5,
      title: "The Future of Remote Work",
      source: "Work Evolution",
      date: "2025-07-13",
      timeAgo: "2 days ago",
      readTime: "4 min read",
      summary: "Companies are rethinking hybrid policies. Latest trends in virtual collaboration, productivity tools, and how teams are adapting to distributed work culture.",
      tags: ["Remote Work", "Productivity", "Culture"],
      isLiked: true,
      isSaved: true,
      color: "bg-orange-50 border-orange-200"
    },
    {
      id: 6,
      title: "Crypto Market Analysis",
      source: "Digital Assets Daily",
      date: "2025-07-13",
      timeAgo: "2 days ago",
      readTime: "3 min read",
      summary: "Bitcoin stabilizes above $45K, Ethereum 2.0 updates, and new regulatory clarity from major economies. DeFi protocols show increased institutional adoption.",
      tags: ["Cryptocurrency", "Finance", "Blockchain"],
      isLiked: false,
      isSaved: false,
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const toggleLike = (id: number) => {
    // Toggle like functionality
    console.log(`Toggle like for newsletter ${id}`);
  };

  const toggleSave = (id: number) => {
    // Toggle save functionality
    console.log(`Toggle save for newsletter ${id}`);
  };

  const shareNewsletter = (id: number) => {
    // Share functionality
    console.log(`Share newsletter ${id}`);
  };

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Home', active: true },
    // { id: 'search', icon: Search, label: 'Search', active: false },
    { id: 'discover', icon: Compass, label: 'Discover', active: false },
    { id: 'profile', icon: User, label: 'Profile', active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6">
          <div className="flex items-center space-x-1 mb-8">
            <Image src='/logo.png' width={40} height={40} alt='logo' />
            <span className="text-2xl font-serif text-gray-900">Morning Latte</span>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-amber-50 text-amber-600 border border-amber-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {activeTab === 'home' && (
          <>
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
              <div className="max-w-2xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-serif text-gray-900">Today&apos;s Insights Feed</h1>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      {newsletters.length} newsletters today
                    </span>
                    <button className="text-amber-600 hover:text-amber-700">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feed */}
            <div className="max-w-2xl mx-auto px-6 py-6">
              <div className="space-y-6">
                {newsletters.map((newsletter) => (
                  <div
                    key={newsletter.id}
                    className={`bg-white rounded-lg border-2 ${newsletter.color} shadow-sm overflow-hidden`}
                  >
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Mail className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{newsletter.source}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <span>{newsletter.timeAgo}</span>
                              <span>•</span>
                              <span>{newsletter.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      
                      <h2 className="text-xl font-serif text-gray-900 mb-3 leading-tight">
                        {newsletter.title}
                      </h2>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {newsletter.summary}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {newsletter.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium transition-colors">
                        <span>Read full newsletter</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button
                            onClick={() => toggleLike(newsletter.id)}
                            className={`flex items-center space-x-2 ${
                              newsletter.isLiked 
                                ? 'text-red-500' 
                                : 'text-gray-500 hover:text-red-500'
                            } transition-colors`}
                          >
                            <Heart className={`h-5 w-5 ${newsletter.isLiked ? 'fill-current' : ''}`} />
                            <span className="text-sm">Like</span>
                          </button>
                          
                          <button
                            onClick={() => shareNewsletter(newsletter.id)}
                            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            <Share className="h-5 w-5" />
                            <span className="text-sm">Share</span>
                          </button>
                        </div>
                        
                        <button
                          onClick={() => toggleSave(newsletter.id)}
                          className={`flex items-center space-x-2 ${
                            newsletter.isSaved 
                              ? 'text-amber-600' 
                              : 'text-gray-500 hover:text-amber-600'
                          } transition-colors`}
                        >
                          <Bookmark className={`h-5 w-5 ${newsletter.isSaved ? 'fill-current' : ''}`} />
                          <span className="text-sm">Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center py-8">
                <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Load more newsletters
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'discover' && <DiscoverPage />}
        {activeTab === 'profile' && <Preferences />}
      </div>
    </div>
  );
}