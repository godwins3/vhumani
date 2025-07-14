"use client"

import React, { useState } from 'react';
import { Check, Users, BarChart3 } from 'lucide-react';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import WaitlistSuccessModal from '../shared/waitlist-success-modal';

const VhumaniWaitlist = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'Business' | 'Influencer'>('Business');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    handle: '',
    newsletter: false
  });
  const [message, setMessage] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: async (data: typeof formData & { type: string }) => {
      const res = await axios.post("/api/v1/waitlist", data);
      return res.data;
    },
    onSuccess: () => {
      setMessage("Thanks for joining the waitlist!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        handle: '',
        newsletter: false
      });
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000); // Hide after 3s
    },
    onError: (error: any) => {
      setMessage(error?.response?.data?.error || "Something went wrong.");
    },
  });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMessage(null);
    mutation.mutate({ ...formData, type: selectedTab });
  };

  return (
    <>
      {showSuccessPopup && <WaitlistSuccessModal onClose={() => setShowSuccessPopup(false)} />}
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8" id='waitlist'>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Form */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-orange-500">Be the First</span>
                <span className="block text-gray-900 dark:text-gray-100">to Experience Vhumani</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
                Join the waitlist to get early access and be part of the first wave 
                of businesses and influencers changing how social media 
                promotions work.
              </p>
            </div>

            {/* Tab Selector */}
            <div className="flex bg-white dark:bg-gray-800 rounded-full p-1 w-fit shadow-sm border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setSelectedTab('Influencer')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTab === 'Influencer'
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                Influencer
              </button>
              <button
                onClick={() => setSelectedTab('Business')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTab === 'Business'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                Business
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* Handle/Business Name */}
              <div className="space-y-2">
                <label htmlFor="handle" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Social Media Handle or Business Name
                </label>
                <input
                  type="text"
                  id="handle"
                  name="handle"
                  value={formData.handle}
                  onChange={handleInputChange}
                  placeholder="@yourhandle or Business Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-orange-500 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-300 leading-5">
                  Subscribe to our newsletter for exclusive updates
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Join the Waitlist"}
              </button>
              {message && (
                <div className="text-center text-sm mt-2 text-blue-700 dark:text-blue-300">
                  {message}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="order-first lg:order-last">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              {/* Icons */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl text-gray-400 dark:text-gray-500">⟷</div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
                Business & Influencer Connection
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8 leading-relaxed">
                Vhumani bridges the gap between brands looking to 
                grow and influencers seeking meaningful 
                collaborations.
              </p>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Verified Profiles
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Performance Metrics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VhumaniWaitlist;