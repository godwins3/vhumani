"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const VhumaniCTASection = () => {
  const router = useRouter();
  const handleGetStarted = () => {
    // console.log('Get Started clicked');
    router.push('/#waitlist'); // Navigate to the Get Started page
  };

  return (
    <section className="bg-gradient-to-r from-teal-400 to-teal-500 dark:from-teal-600 dark:to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to elevate Your Influence?
              </h2>
              <p className="text-lg sm:text-xl text-teal-50 dark:text-teal-100 max-w-2xl leading-relaxed">
                Join Vhumani and start collaborating with top brands today. Whether you&apos;re just starting out or an established creator, we have opportunities for you.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <button
                onClick={handleGetStarted}
                className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-4 focus:ring-orange-300 focus:outline-none"
              >
                <span className="text-lg">Join waitlist</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VhumaniCTASection;