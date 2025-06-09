const impactStats = [
	{
		value: '500+',
		label: 'Successful Campaigns',
		gradient: 'from-orange-500 to-yellow-500',
		textColor: 'text-orange-500',
	},
	{
		value: '300+',
		label: 'Verified Influencers',
		gradient: 'from-blue-500 to-purple-500',
		textColor: 'text-blue-500',
	},
	{
		value: '200+',
		label: 'Satisfied Businesses',
		gradient: 'from-green-500 to-teal-500',
		textColor: 'text-teal-500',
	},
	{
		value: '90%',
		label: 'Positive Rating',
		gradient: 'from-orange-400 to-orange-500',
		textColor: 'text-orange-400',
	},
];

const OurImpact = () => {
	return (
		<section className="py-16 bg-white dark:bg-slate-900 text-center">
			<h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-white mb-12">
				Our Impact
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-12 max-w-7xl mx-auto">
				{impactStats.map((stat, idx) => (
					<div
						key={idx}
						className="shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex flex-col items-center p-8"
					>
						<div
							className={`w-16 h-16 flex items-center justify-center ${stat.gradient} mb-4`}
						>
							<span
								className={`text-3xl font-extrabold ${stat.textColor}`}
							>
								{stat.value}
							</span>
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm text-center">
							{stat.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurImpact;