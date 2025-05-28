import HeroSection from '@/components/Hero-section'
import HowVhumaniWorksSection from '@/components/how-it-works'
import StatsSection from '@/components/stats-section'
import VhumaniCTASection from '@/components/vhunami-cta-section'
import VhumaniWaitlist from '@/components/vhunami-join-waitlist'
import ClientTestimonialsSection from '@/components/what-client-say'
import WhatWeDoSection from '@/components/what-we-do'
import WhatWeDoTextSection from '@/components/what-we-do-text-section'
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