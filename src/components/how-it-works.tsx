import Image from 'next/image';
import React from 'react';
import { FindingMatches, HowVhumaniWorks, LauchingCampaign, MeasuringResults } from '../../public/assets/images/images';

const HowVhumaniWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Businesses describe their brand and campaign goals. Influencers showcase their audience and content style.",
      image: HowVhumaniWorks, // Replace with your actual image path
      position: "right"
    },
    {
      number: 2,
      title: "Find Your Match",
      description: "Our algorithm suggests the best matches, or you can browse and search our database of influencers/brands.",
      image: FindingMatches, // Replace with your actual image path
      position: "left"
    },
    {
      number: 3,
      title: "Launch Campaign",
      description: "Agree on deliverables, timeline, and compensation. Our platform helps manage the entire collaboration.",
      image: LauchingCampaign, // Replace with your actual image path
      position: "right"
    },
    {
      number: 4,
      title: "Measure Results",
      description: "Track engagement, reach, and conversions. Get detailed analytics to measure your campaign's success.",
      image: MeasuringResults, // Replace with your actual image path
      position: "left"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-orange-500">How Vhumani</span>{" "}
            <span className="text-gray-900 dark:text-white">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple steps to launch your influencer marketing campaign
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 hidden lg:block" 
               style={{ height: 'calc(100% - 100px)', top: '50px' }}>
          </div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 lg:hidden" 
               style={{ height: 'calc(100% - 80px)', top: '40px' }}>
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  {/* Step Number Circle */}
                  <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 transform -translate-x-1/2">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    {/* Image */}
                    <div className="mb-6">
                      <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-teal-400 to-cyan-500 p-4 rounded-2xl shadow-lg">
                        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden aspect-[4/3]">
                          <Image
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center">
                  {/* Step Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg">
                    {step.number}
                  </div>

                  {step.position === "right" ? (
                    <>
                      {/* Text Content - Left Side */}
                      <div className="w-1/2 pr-16 text-right">
                        <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Image - Right Side */}
                      <div className="w-1/2 pl-16">
                        <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-md">
                          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden aspect-[4/3]">
                            <Image
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image - Left Side */}
                      <div className="w-1/2 pr-16 flex justify-end">
                        <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-md">
                          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden aspect-[4/3]">
                            <Image
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Text Content - Right Side */}
                      <div className="w-1/2 pl-16 text-left">
                        <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowVhumaniWorksSection;