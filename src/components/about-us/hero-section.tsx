"use client";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const handleGetStarted = () => {
    // console.log('Get Started clicked');
    router.push('/#waitlist'); // Navigate to the Get Started page
    // Handle navigation or action here
  };
  return (
    <section className="bg-white-gradient-to-b from-white to-[#e8f2f5] text-center py-28 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 dark:text-teal-100 leading-tight">
          Empowering Brands & Creators to Thrive Together
        </h1>
        <p className="text-gray-600 mt-6 text-lg md:text-xl">
          At Vhumani, we simplify influencer marketing by building trusted connections between businesses and authentic voices.
        </p>
        <button className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-teal-50 dark:text-teal-100 font-semibold rounded-full shadow-lg transition duration-300" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection