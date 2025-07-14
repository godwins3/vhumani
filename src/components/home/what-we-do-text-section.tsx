import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhatWeDoTextSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12">
            <span className="text-orange-500">What We</span>{" "}
            <span className="text-gray-900 dark:text-white">Do</span>
          </h2>
          
          {/* Main Content */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              Vhumani connects businesses with the right influencers to create powerful, 
              data-driven marketing campaigns. Our platform streamlines discovery, 
              collaboration, and performance tracking—helping brands grow and influencers thrive.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
              Smart, seamless, and results-focused. Whether you’re launching a product or scaling your presence, 
              Vhumani makes the process intuitive. We match ambition with influence, creativity with reach, 
              and vision with verified results.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg">
            Learn More About Our Platform
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoTextSection;