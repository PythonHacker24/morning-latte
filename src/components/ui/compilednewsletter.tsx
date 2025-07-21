import React, { useState } from 'react';
import { Mail, ExternalLink, Heart, Share, Bookmark, TrendingUp, Lightbulb, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';

const NewsletterComponent = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [feedData, setFeedData] = useState({
    feed: [
      {
        source: "Tech Daily",
        time_published: "2 hours ago",
        read_time_minutes: 3,
        title: "The AI Revolution: What's Next for 2025",
        summary: "OpenAI announces GPT-5 capabilities, Google's new Gemini updates, and how AI regulation is shaping the industry.",
        tags: ["AI", "Technology", "Innovation"],
        trends: [
          "GPT-5 shows 40% improvement in reasoning tasks",
          "Google Gemini integration across all products accelerating",
          "EU AI Act enforcement begins affecting major tech companies"
        ],
        insights: [
          "Companies investing heavily in AI safety protocols to meet regulatory requirements",
          "Consumer adoption of AI tools reaching mainstream tipping point",
          "Open-source AI models gaining enterprise traction"
        ],
        market_impacts: [
          "NVIDIA stock up 8% following AI chip demand surge",
          "Traditional software companies pivoting to AI-first strategies",
          "Venture funding for AI startups reaches $50B in 2025"
        ],
        actions: {
          read_full_url: "#",
          liked: false,
          saved: false
        }
      }
    ]
  });

  const toggleSection = (newsletterIdx: number, section: string) => {
    const key = `${newsletterIdx}-${section}`;
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleLike = (idx: number) => {
    setFeedData(prevData => {
      const newFeed = [...prevData.feed];
      newFeed[idx] = {
        ...newFeed[idx],
        actions: {
          ...newFeed[idx].actions,
          liked: !newFeed[idx].actions.liked
        }
      };
      return { ...prevData, feed: newFeed };
    });
  };

  const toggleSave = (idx: number) => {
    setFeedData(prevData => {
      const newFeed = [...prevData.feed];
      newFeed[idx] = {
        ...newFeed[idx],
        actions: {
          ...newFeed[idx].actions,
          saved: !newFeed[idx].actions.saved
        }
      };
      return { ...prevData, feed: newFeed };
    });
  };

  const shareNewsletter = (idx: number) => {
    const newsletter = feedData.feed[idx];
    if (navigator.share) {
      navigator.share({
        title: newsletter.title,
        text: newsletter.summary,
        url: newsletter.actions.read_full_url
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      window.open(newsletter.actions.read_full_url, '_blank');
    }
  };

  type SectionToggleProps = {
    newsletterIdx: number;
    section: string;
    title: string;
    items: string[];
    icon: React.ElementType;
    color: string;
  };

  const SectionToggle = ({
    newsletterIdx,
    section,
    title,
    items,
    icon: Icon,
    color,
  }: SectionToggleProps) => {
    const key = `${newsletterIdx}-${section}`;
    const isExpanded = expandedSections[key];
    
    return (
      <div className="border-t border-gray-100 first:border-t-0">
        <button
          onClick={() => toggleSection(newsletterIdx, section)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-25 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
              <Icon className="h-4 w-4 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-900">{title}</h4>
              <p className="text-sm text-gray-500">{items.length} items</p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </button>
        
        {isExpanded && (
          <div className="px-6 pb-4">
            <div className="space-y-3">
              {items.map((item: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 ${color.replace('bg-', 'bg-').replace('-500', '-400')}`}></div>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-6">
      <div className="space-y-6">
        {feedData.feed.map((newsletter, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border-2 border-blue-200 shadow-sm overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 pb-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{newsletter.source}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{newsletter.time_published}</span>
                      <span>•</span>
                      <span>{newsletter.read_time_minutes} min read</span>
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
              
              <p className="text-gray-600 font-serif leading-relaxed mb-4">
                {newsletter.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {newsletter.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={newsletter.actions.read_full_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium transition-colors mb-6"
              >
                <span>Read full newsletter</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Data Sections */}
            <div className="bg-white font-serif">
              <SectionToggle
                newsletterIdx={idx}
                section="trends"
                title="Key Trends"
                items={newsletter.trends}
                icon={TrendingUp}
                color="bg-emerald-500"
              />
              
              <SectionToggle
                newsletterIdx={idx}
                section="insights"
                title="Strategic Insights"
                items={newsletter.insights}
                icon={Lightbulb}
                color="bg-blue-500"
              />
              
              <SectionToggle
                newsletterIdx={idx}
                section="market_impacts"
                title="Market Impact"
                items={newsletter.market_impacts}
                icon={BarChart3}
                color="bg-purple-500"
              />
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => toggleLike(idx)}
                    className={`flex items-center space-x-2 ${
                      newsletter.actions.liked 
                        ? 'text-red-500' 
                        : 'text-gray-500 hover:text-red-500'
                    } transition-colors`}
                  >
                    <Heart className={`h-5 w-5 ${newsletter.actions.liked ? 'fill-current' : ''}`} />
                    <span className="text-sm">Like</span>
                  </button>
                  
                  <button
                    onClick={() => shareNewsletter(idx)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Share className="h-5 w-5" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
                
                <button
                  onClick={() => toggleSave(idx)}
                  className={`flex items-center space-x-2 ${
                    newsletter.actions.saved 
                      ? 'text-amber-600' 
                      : 'text-gray-500 hover:text-amber-600'
                  } transition-colors`}
                >
                  <Bookmark className={`h-5 w-5 ${newsletter.actions.saved ? 'fill-current' : ''}`} />
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
  );
};

export default NewsletterComponent;