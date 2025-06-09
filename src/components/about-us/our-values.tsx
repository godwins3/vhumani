const values = [
  {
    title: "Transparency",
    description:
      "We believe in open communication and clear metrics for every campaign, ensuring trust between brands and creators.",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Fairness",
    description:
      "Our platform is committed to fair compensation and equal opportunities for all influencers and businesses.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Innovation",
    description:
      "We leverage technology to create meaningful, data-driven partnerships that drive real results.",
    gradient: "from-green-500 to-teal-500",
  },
];

const OurValues = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-white mb-12">
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 max-w-7xl mx-auto">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex flex-col items-center p-8"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${value.gradient} mb-4`}
            />
            <h3 className="text-lg font-semibold text-blue-700 dark:text-white mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;