'use client'

import React, { useState } from 'react';
import { Home, Compass, User, Mail, Twitter, Linkedin, Users, Sun, Bell, Globe, Palette, Coffee, Clock, Zap, Shield, Eye, HeadphonesIcon } from 'lucide-react';
import Image from 'next/image';
import ErrorMessage from './error';
import NewsletterComponent from './compilednewsletter';

// Discover Page Component
function DiscoverPage() {
  const [subscribing, setSubscribing] = useState<number | null>(null);
  type TopPick = {
    name: string;
    title: string;
    newsletter_name: string;
    description: string;
    subscribers: number | string;
    image_url: string;
    tags: string[];
    socials: {
      twitter?: string;
      linkedin?: string;
      website?: string;
    };
    button_text?: string;
  };

  // --- CACHE UTILS ---
  const CACHE_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes
  function setCache(key: string, value: unknown) {
    const data = { value, expiry: Date.now() + CACHE_EXPIRY_MS };
    localStorage.setItem(key, JSON.stringify(data));
  }
  function getCache(key: string): unknown {
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
      const data = JSON.parse(item);
      if (data.expiry && data.expiry > Date.now()) {
        return data.value;
      } else {
        localStorage.removeItem(key);
        return null;
      }
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  }

  const [topPicks, setTopPicks] = useState<TopPick[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    const cacheKey = 'discover_top_picks';
    const cached = getCache(cacheKey);
    if (cached) {
      setTopPicks(cached as TopPick[]);
      setLoading(false);
      return;
    }
    fetch('http://localhost:4444/user/feed/discover/top-picks', { credentials: 'include' })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch top picks');
        return res.json();
      })
      .then((data) => {
        setTopPicks(data);
        setCache(cacheKey, data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Unknown error');
        setLoading(false);
      });
  }, []);

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
    buttonText?: string;
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
          <Image
            src={writer.avatar}
            alt={writer.name}
            width={size === "large" ? 64 : 48}
            height={size === "large" ? 64 : 48}
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
              <a href={writer.social.twitter} className="text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {writer.social.linkedin && (
              <a href={writer.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {writer.social.website && (
              <a href={writer.social.website} className="text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
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
            {subscribing === writer.id ? 'Joining...' : writer.buttonText || 'Join Newsletter'}
          </button>
        </div>
      </div>
    </div>
  );

  // Remove hardcoded featuredWriter and add state for featured writer
  const [featuredWriter, setFeaturedWriter] = useState<null | {
    title: string;
    author: string;
    description: string;
    subscribers: number;
    image_url: string;
    button_text: string;
  }>(null);
  const [featuredLoading, setFeaturedLoading] = useState(true);
  const [featuredError, setFeaturedError] = useState<string | null>(null);

  React.useEffect(() => {
    setFeaturedLoading(true);
    setFeaturedError(null);
    const cacheKey = 'discover_featured_writer';
    const cached = getCache(cacheKey);
    if (cached) {
      setFeaturedWriter(cached as {
        title: string;
        author: string;
        description: string;
        subscribers: number;
        image_url: string;
        button_text: string;
      });
      setFeaturedLoading(false);
      return;
    }
    fetch('http://localhost:4444/user/feed/discover/featured', { credentials: 'include' })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch featured writer');
        return res.json();
      })
      .then((data) => {
        setFeaturedWriter(data);
        setCache(cacheKey, data);
        setFeaturedLoading(false);
      })
      .catch((err) => {
        setFeaturedError(err.message || 'Unknown error');
        setFeaturedLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-serif text-gray-900">Discover Writers</h1>
          <p className="text-gray-600 mt-1">Find your next favorite newsletter</p>
        </div>
      </div>

        {/* Featured Section */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          {featuredLoading && (
            <div className="text-center py-16 text-gray-500">Loading featured writer...</div>
          )}
          {featuredError && (
            <ErrorMessage message={featuredError} size="sm" showRetry={false} />
          )}
          {!featuredLoading && !featuredError && featuredWriter && (
            <div 
              className="relative h-96 md:h-[28rem] lg:h-[26rem] rounded-2xl overflow-hidden shadow-lg"
              style={{
                background: featuredWriter.image_url ? `url(${featuredWriter.image_url})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent"></div>
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="mb-4">
                  <h2 className="text-white font-serif text-xl mb-2">Featured this Week</h2>
                  <h3 className="text-white font-serif text-3xl mb-3">{featuredWriter.title}</h3>
                  <p className="text-white/90 font-serif text-lg mb-2">by {featuredWriter.author}</p>
                  <p className="text-white/80 font-serif text-base max-w-md mb-4">{featuredWriter.description}</p>
                  <p className="text-gray-50 font-serif text-sm">{featuredWriter.subscribers.toLocaleString()} subscribers</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-fit">
                  {featuredWriter.button_text || 'Join Newsletter'}
                </button>
              </div>
            </div>
          )}
        </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Top Picks Section */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Top Picks for You</h2>
          {loading && <div className="text-center py-8 text-gray-500">Loading top picks...</div>}
          {error && <ErrorMessage message={error} size="sm" showRetry={false} />}
          {!loading && !error && (
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {topPicks.map((writer, idx) => {
                // Map API response to WriterCard props
                const mappedWriter: Writer = {
                  id: idx + 1, // No id in API, so use index
                  name: writer.name,
                  title: writer.title,
                  newsletter: writer.newsletter_name,
                  bio: writer.description,
                  subscribers: typeof writer.subscribers === 'number' ? writer.subscribers.toLocaleString() : writer.subscribers,
                  avatar: writer.image_url,
                  tags: writer.tags,
                  social: {
                    twitter: writer.socials?.twitter,
                    linkedin: writer.socials?.linkedin,
                    website: writer.socials?.website,
                  },
                  buttonText: writer.button_text,
                };
                return <WriterCard key={mappedWriter.id} writer={mappedWriter} size="large" />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Preferences({ profileImageUrl }: { profileImageUrl?: string }) {
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
            <Image
              src={profileImageUrl || '/logo.png'}
              alt="Profile Photo"
              width={80}
              height={80}
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
          <div className='font-serif text-gray-500 text-xs'>Relax, we are not interested in your love letters, just Newsletters!</div>
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
            Or email us at <a href="mailto:support@morninglatte.com" className="text-gray-600 font-bold hover:underline">support@morninglatte.com</a>
          </div>
        </div>
      </div>
    );
  }

// Add types for API response
interface NewsletterActions {
  read_full_url: string;
  liked?: boolean;
  shared?: boolean;
  saved?: boolean;
}

interface NewsletterItem {
  source: string;
  time_published: string;
  read_time_minutes: number;
  title: string;
  summary: string;
  tags: string[];
  actions: NewsletterActions;
}

interface FeedResponse {
  date: string;
  total_newsletters_today: number;
  feed: NewsletterItem[];
}

export default function NewsletterFeed() {
  const [activeTab, setActiveTab] = useState('home');
  const [feedData, setFeedData] = useState<FeedResponse | null>(null);
  // const [loading, setLoading] = useState(true);
  const [, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const [, setError] = useState<string | null>(null);

  // --- LIFTED FEATURED WRITER STATE ---
  const [featuredWriter, setFeaturedWriter] = useState<null | {
    title: string;
    author: string;
    description: string;
    subscribers: number;
    image_url: string;
    button_text: string;
  }>(null);
  // const [featuredLoading, setFeaturedLoading] = useState(true);
  const [, setFeaturedLoading] = useState(true);
  // const [featuredError, setFeaturedError] = useState<string | null>(null);
  const [, setFeaturedError] = useState<string | null>(null);

  React.useEffect(() => {
    setFeaturedLoading(true);
    setFeaturedError(null);
    fetch('http://localhost:4444/user/feed/discover/featured', { credentials: 'include' })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch featured writer');
        return res.json();
      })
      .then((data) => {
        setFeaturedWriter(data);
        setFeaturedLoading(false);
      })
      .catch((err) => {
        setFeaturedError(err.message || 'Unknown error');
        setFeaturedLoading(false);
      });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('http://localhost:4444/test', { credentials: 'include' })
      .then(async (res) => {
        if (res.status === 401 || res.status === 403) {
          throw new Error('Please log in to view your feed.');
        }
        if (!res.ok) throw new Error('Failed to fetch feed');
        return res.json();
      })
      .then((data: FeedResponse) => {
        setFeedData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Unknown error');
        setLoading(false);
      });
  }, []);

  // const toggleLike = (id: number) => {
  //   // Toggle like functionality
  //   console.log(`Toggle like for newsletter ${id}`);
  // };

  // const toggleSave = (id: number) => {
  //   // Toggle save functionality
  //   console.log(`Toggle save for newsletter ${id}`);
  // };

  // const shareNewsletter = (id: number) => {
  //   // Share functionality
  //   console.log(`Share newsletter ${id}`);
  // };

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Home', active: true },
    // { id: 'search', icon: Search, label: 'Search', active: false },
    { id: 'discover', icon: Compass, label: 'Discover', active: false },
    { id: 'listen', icon: HeadphonesIcon, label: 'Listen', active: false },
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
                      {feedData ? feedData.total_newsletters_today : 0} newsletters today
                    </span>
                    <button className="text-amber-600 hover:text-amber-700">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feed */}
             <NewsletterComponent />
          </>
        )}

        {activeTab === 'discover' && <DiscoverPage />}
        {activeTab === 'profile' && <Preferences profileImageUrl={featuredWriter?.image_url} />}
      </div>
    </div>
  );
}