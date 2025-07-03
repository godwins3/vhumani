import AnalyticsShowcase from '@/components/for-bussiness/analytics-showcase'
import HeroSection from '@/components/for-bussiness/Hero-section'
import Testimonials from '@/components/for-bussiness/testimonials'
import VhumaniCTASection from '@/components/for-bussiness/vhunami-cta-section'
import WhyChooseVhumani from '@/components/for-bussiness/why-choose-vhumani'
import NewsletterSignup from '@/components/shared/newsletter'
import React from 'react'

const ForBusinesses = () => {
  return (
    <div>
      <h1 className='w-full'>
        <HeroSection />
        <WhyChooseVhumani />
        <AnalyticsShowcase />
        <Testimonials />
        <NewsletterSignup />
        <VhumaniCTASection />
      </h1>
    </div>
  )
}

export default ForBusinesses
