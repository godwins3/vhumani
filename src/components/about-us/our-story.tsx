import Image from "next/image"

const OurStory = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-white mb-12">
        Our Story
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-12 max-w-7xl mx-auto items-center">
        <div className="flex justify-center">
          <Image
            src="/assets/images/our-story.jpg"
            alt="Team working"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md p-8 text-left flex flex-col justify-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Vhumani was born out of a simple idea: to bridge the gap between
            growing businesses and digital influencers with real influence. We
            believe in the power of honest voices, clear metrics, and meaningful
            partnerships.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Founded in 2020, our platform has grown from a small startup to a
            trusted marketplace where brands find authentic voices and influencers
            discover meaningful collaborations.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We’re committed to transparency, fair compensation, and measurable
            results for all parties involved in the influencer marketing ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurStory