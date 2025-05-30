import HeroSection from '@/components/home/Hero-section'
import HowVhumaniWorksSection from '@/components/home/how-it-works'
import StatsSection from '@/components/home/stats-section'
import VhumaniCTASection from '@/components/home/vhunami-cta-section'
import VhumaniWaitlist from '@/components/home/vhunami-join-waitlist'
import ClientTestimonialsSection from '@/components/home/what-client-say'
import WhatWeDoSection from '@/components/home/what-we-do'
import WhatWeDoTextSection from '@/components/home/what-we-do-text-section'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <WhatWeDoSection />
      <HowVhumaniWorksSection />
      <WhatWeDoTextSection />
      <ClientTestimonialsSection />
      <VhumaniWaitlist />
      <VhumaniCTASection />
      
    
      
    </div>
  )
}

export default HomePage