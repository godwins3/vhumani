import AnalyticsShowcase from '@/components/for-influencers/analytics-showcase'
import HeroSection from '@/components/for-influencers/Hero-section'
import Testimonials from '@/components/for-influencers/testimonials'
import VhumaniCTASection from '@/components/for-influencers/vhunami-cta-section'
import WhyChooseVhumani from '@/components/for-influencers/why-choose-vhumani'
import NewsletterSignup from '@/components/shared/newsletter'
import React from 'react'

const ForInfluencers = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <WhyChooseVhumani />
      <AnalyticsShowcase />
      <Testimonials />
      <NewsletterSignup />
      <VhumaniCTASection />
    </div>
  )
}

export default ForInfluencers
