const howItWorks = [
  {
    title: "For Businesses",
    description:
      "Find the right influencers, launch campaigns, and track real results. Our AI-powered matching system connects you with creators who align with your brand values.",
    gradient: "from-orange-500 to-yellow-500",
    textColor: "text-orange-500",
  },
  {
    title: "For Influencers",
    description:
      "Connect with brands that align with your voice. Get paid fairly through our transparent pricing system and build long-term partnerships with reputable companies.",
    gradient: "from-blue-500 to-purple-500",
    textColor: "text-blue-500",
  },
  {
    title: "For Results",
    description:
      "Track engagement, ROI, and campaign success with real-time data. Our analytics dashboard provides actionable insights to optimize your marketing strategy.",
    gradient: "from-green-500 to-teal-500",
    textColor: "text-teal-500",
  },
];

const HowVhumaniWorks = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-white mb-12">
        How Vhumani Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 max-w-7xl mx-auto">
        {howItWorks.map((item, idx) => (
          <div
            key={idx}
            className="shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex flex-col items-center p-8"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} mb-4`}
            >
              <span className={`text-xl font-bold ${item.textColor}`}>{item.title[0]}</span>
            </div>
            <h3 className={`text-lg font-semibold ${item.textColor} mb-2`}>
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowVhumaniWorks;