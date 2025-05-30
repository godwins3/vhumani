import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: "/assets/icons/searchicon.png",
      title: 'Matchmaking',
      description: 'Our AI-powered platform matches businesses with influencers who align with their brand values and target audience.',
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: "/assets/icons/marketicon.png",
      title: 'Campaign Management',
      description: 'We provide tools to manage your influencer campaigns from start to finish, including performance tracking.',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: "/assets/icons/market2icon.png",
      title: 'Secure Payments',
      description: 'Our escrow system ensures influencers get paid when they deliver, and businesses only pay for results.',
      gradient: 'from-emerald-400 to-teal-500',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-orange-500">What We</span>{' '}
            <span className="text-gray-900 dark:text-white">Do</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vhumani creates meaningful connections between brands and influencers for authentic marketing campaigns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon Container */}
              <div className="relative mb-8">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} p-0.5 mx-auto`}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={32}
                    className="mx-auto"
                  />
                </div>
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 blur-xl mx-auto group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
            Learn More About Our Platform
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
