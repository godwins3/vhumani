import HeroSection from '@/components/home/Hero-section'
import HowVhumaniWorksSection from '@/components/home/how-it-works'
import StatsSection from '@/components/home/stats-section'
import VhumaniCTASection from '@/components/home/vhunami-cta-section'
import VhumaniWaitlist from '@/components/home/vhunami-join-waitlist'
import ClientTestimonialsSection from '@/components/home/what-client-say'
import WhatWeDoSection from '@/components/home/what-we-do'
import WhatWeDoTextSection from '@/components/home/what-we-do-text-section'
import VhumaniFooter from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import GoogleAd from '@/components/shared/google-ad'
import Script from 'next/dist/client/script'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full">
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8937280226879055"
        crossOrigin="anonymous"
      />
      <Header />
      <HeroSection />
      {/* <GoogleAd adSlot=''/> */}
      <StatsSection />
      <WhatWeDoSection />
      <HowVhumaniWorksSection />
      <WhatWeDoTextSection />
      <ClientTestimonialsSection />
      <VhumaniWaitlist />
      <VhumaniCTASection />
      <VhumaniFooter />
    </div>
  )
}

export default HomePage