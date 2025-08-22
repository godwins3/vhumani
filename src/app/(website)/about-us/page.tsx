import HeroSection from '@/components/about-us/hero-section';
import HowVhumaniWorks from '@/components/about-us/how-vhumani-works';
import OurImpact from '@/components/about-us/our-impact';
import OurStory from '@/components/about-us/our-story';
import OurValues from '@/components/about-us/our-values';
import VhumaniWaitlist from '@/components/home/vhunami-join-waitlist';
import ClientTestimonialsSection from '@/components/home/what-client-say';
import GoogleAd from '@/components/shared/google-ad';

export default function AboutUs() {
  return (
    <div className="font-sans">
      <HeroSection />
      {/* <GoogleAd adSlot='8937280226879055'/> */}
      <OurStory />
      {/* Our Vision */}
      <section className="bg-white dark:bg-slate-900 px-6 md:px-20 py-24 text-center mx-auto">
        <div className='max-w-7xl items-center mx-auto px-4'>
          <h2 className="text-3xl font-bold text-blue-700 dark:text-white mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We envision a world where businesses and creators collaborate seamlessly to deliver authentic value to audiences. Our goal is to become the most trusted platform in influencer marketing.
          </p>
        </div>  
      </section>
      <HowVhumaniWorks />
      <OurValues />
      <OurImpact />
      <ClientTestimonialsSection />
      <VhumaniWaitlist />
    </div>
  );
}
