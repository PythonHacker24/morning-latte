import React from 'react';

type ErrorMessageProps = {
  title?: string;
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
  size?: 'sm' | 'md' | 'lg';
};

const ErrorMessage = ({ 
  title = "Oops! Something went wrong", 
  message = "We couldn't fetch the content you're looking for. Please try again in a moment.",
  showRetry = true,
  onRetry,
  size = 'md'
}: ErrorMessageProps) => {
  const sizeClasses = {
    sm: {
      container: 'max-w-md p-6',
      title: 'text-2xl',
      message: 'text-base',
      icon: 'w-12 h-12',
      button: 'px-4 py-2 text-sm'
    },
    md: {
      container: 'max-w-lg p-8',
      title: 'text-3xl',
      message: 'text-lg',
      icon: 'w-16 h-16',
      button: 'px-6 py-3 text-base'
    },
    lg: {
      container: 'max-w-xl p-10',
      title: 'text-4xl',
      message: 'text-xl',
      icon: 'w-20 h-20',
      button: 'px-8 py-4 text-lg'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-4">
      <div className={`${currentSize.container} bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-200/50 text-center relative overflow-hidden`}>
        
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 left-4 w-24 h-24 bg-amber-300 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-rose-300 rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-8 h-8 bg-orange-300 rounded-full"></div>
        </div>

        <div className="relative z-10">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className={`${currentSize.icon} bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center border-2 border-amber-200 shadow-lg`}>
              <svg 
                className="w-2/3 h-2/3 text-amber-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className={`${currentSize.title} font-serif text-gray-800 mb-4 leading-tight`}>
            {title}
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24"></div>
            <div className="mx-3 w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24"></div>
          </div>

          {/* Message */}
          <p className={`${currentSize.message} font-serif text-gray-600 leading-relaxed mb-8 max-w-md mx-auto`}>
            {message}
          </p>

          {/* Retry Button */}
          {showRetry && (
            <button
              onClick={onRetry}
              className={`${currentSize.button} bg-gradient-to-r from-amber-600 to-orange-600 text-white font-serif font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-amber-700 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-amber-200`}
            >
              Try Again
            </button>
          )}

          {/* Subtle animation elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-200 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-200 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/5 via-orange-400/5 to-rose-400/5 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ErrorMessage;