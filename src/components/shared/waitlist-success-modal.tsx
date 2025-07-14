// components/WaitlistSuccessModal.tsx
'use client';

import React from 'react';
import { X, Facebook, Linkedin, Twitter } from 'lucide-react';

interface WaitlistSuccessModalProps {
  onClose: () => void;
}

const WaitlistSuccessModal: React.FC<WaitlistSuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white dark:bg-gray-900 max-w-md w-full mx-4 p-8 rounded-xl text-center shadow-xl border border-gray-200 dark:border-gray-700">
        {/* Close button (optional) */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400">
          You're on the Waitlist!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          Thank you for signing up. You've been successfully added to the Vhumani waitlist. We’ll notify you as soon as we launch!
        </p>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900 text-sm text-blue-800 dark:text-blue-200 p-4 rounded-lg flex items-start gap-2">
          <span>ℹ️</span>
          <span>Want to stay in the loop? Follow us on social media or subscribe to our newsletter.</span>
        </div>

        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg">
            Go Back to Home
          </button>
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg">
            Follow Us
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-4 text-gray-400">
          <a href="#"><Twitter className="w-5 h-5 hover:text-blue-500" /></a>
          <a href="#"><Linkedin className="w-5 h-5 hover:text-blue-500" /></a>
          <a href="#"><Facebook className="w-5 h-5 hover:text-blue-500" /></a>
        </div>

        <div className="text-xs text-gray-400 mt-4">
          © 2025 Vhumani. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default WaitlistSuccessModal;
