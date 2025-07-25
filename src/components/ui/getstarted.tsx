'use client'

import React, { useState } from 'react';
import { Mail, CheckCircle, TwitterIcon, XIcon } from 'lucide-react';
import Image from 'next/image';

import Navbar from './navbar';
import Footer from './footer';

import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential } from "firebase/auth";
import app from '../../../lib/firebase';

export default function GetStartedPage() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSignin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsEmailSent(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleOauth = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();

      await fetch("/api/set-cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      window.location.href = "/feed";
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleXOAuth = async () => {

  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Hero Text */}
          <div className="text-center">
            <div className="mb-6">
                <Image src="/logo.png" width={80} height={80} alt="logo" className="mx-auto mb-4" />
            </div>
            <h2 className="text-4xl font-serif text-gray-900 mb-4">
              Let&apos;s Make You Smarter
            </h2>
            <p className="text-lg text-gray-600 mb-2">
            Commit to your newsletters written by industry experts
            </p>
          </div>

          {/* Authentication Options */}
          <div className="bg-white py-8 px-6 shadow-lg rounded-2xl border border-gray-200">
            {!isEmailSent ? (
              <div className="space-y-4">
                {/* Google OAuth */}
                <button
                  onClick={() => handleGoogleOauth()}
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className='font-bold' >Continue with Google</span>
                </button>

                {/* X OAuth */}
                <button
                  onClick={() => handleXOAuth()}
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className='px-2'><TwitterIcon /></span>
                  <span className='font-bold' >Continue with Twitter</span>
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                {/* Email Passwordless */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-500 mb-1">
                      Use you Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    onClick={handleEmailSignin}
                    disabled={isLoading || !email}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin -ml-1 mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending magic link...
                      </div>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Send magic link
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  No passwords required. We&apos;ll send you a secure link to sign in.
                </p>
              </div>
            ) : (
              // Email Sent Success State
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-xl font-serif text-gray-900">Check your email</h3>
                <p className="text-gray-600">
                  We&apos;ve sent a magic link to <span className="font-medium text-gray-900">{email}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Click the link in your email to sign in. It may take a few minutes to arrive.
                </p>
                <button
                  onClick={() => setIsEmailSent(false)}
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                >
                  Try a different email
                </button>
              </div>
            )}
          </div>

          {/* Trust Signals */}
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No spam</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Free to start</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{' '}
              <a href="#" className="text-amber-600 hover:text-amber-700">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-amber-600 hover:text-amber-700">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}