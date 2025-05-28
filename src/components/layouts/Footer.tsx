import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const VhumaniFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    forBusinesses: [
      { label: 'Find Influencers', href: '/businesses/find-influencers' },
      { label: 'Campaign Dashboard', href: '/businesses/dashboard' },
      { label: 'Pricing', href: '/businesses/pricing' },
      { label: 'Your Wallet', href: '/businesses/wallet' }
    ],
    forInfluencers: [
      { label: 'Find Brands', href: '/influencers/find-brands' },
      { label: 'Get Verified', href: '/influencers/verification' },
      { label: 'Creator Resources', href: '/influencers/resources' },
      { label: 'Earnings Calculator', href: '/influencers/calculator' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ]
  };

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/vhumani', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/vhumani', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/vhumani', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/vhumani', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Vhumani</h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Connecting businesses with the right influencers for authentic 
                  marketing campaigns.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors duration-200 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* For Businesses */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
                For Businesses
              </h4>
              <ul className="space-y-3">
                {footerLinks.forBusinesses.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Influencers */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
                For Influencers
              </h4>
              <ul className="space-y-3">
                {footerLinks.forInfluencers.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 dark:border-slate-600 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} Vhumani. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-6">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600 hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VhumaniFooter;