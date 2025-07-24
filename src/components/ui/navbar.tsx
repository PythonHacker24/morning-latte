'use client'

import Image from "next/image"
import { useRouter } from 'next/navigation';

export default function Navbar() {    
    const router = useRouter();

    const Onboard = () => {
        router.push('/onboard');
    };

    const Pricing = () => {
        router.push('/pricing');
    };

    const Manifesto = () => {
        router.push('/manifesto');
    };

    const Writers = () => {
      router.push('forwriters')
    };

    const LandingPage = () => {
        router.push('/');
    };

    return (
    <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <button onClick={LandingPage}>
            <div className="flex items-center space-x-1">
              <Image src="/logo.png" width={40} height={40} alt="logo" />
              <span className="text-3xl font-serif text-gray-900">Morning Latte</span>
            </div>
            </button>
            <div className="flex items-center space-x-8">
              <button className="text-gray-600 hover:text-gray-900 transition-colors" onClick={Pricing}>
                Pricing
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors" onClick={Writers}>
                Writers
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors" onClick={Manifesto}>
                Manifesto
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors" onClick={Onboard}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
}