import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, Lock } from "lucide-react";

const features = [
	{
		icon: <Search className="w-8 h-8 text-orange-400" />,
		title: "Seamless Brand Collaborations",
		description:
			"Partner with brands that align with your niche and audience. We match you with the perfect campaign.",
		gradient: "from-orange-500 to-yellow-500",
	},
	{
		icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
		title: "Real-Time Perfomance Analytics",
		description:
			"Track your campaign metrics and earnings with our integrated dashboard that provides insights into your performance.",
		gradient: "from-blue-500 to-purple-500",
	},
	{
		icon: <Lock className="w-8 h-8 text-green-500" />,
		title: "Timely and Transparent Payments",
		description:
			"We ensure timely payments and complete transparency in all transactions, so you can focus on what you do best.",
		gradient: "from-green-500 to-teal-500",
	},
];

const WhyChooseVhumani = () => {
	return (
		<section className="py-16 bg-white dark:bg-slate-900 text-center">
			<h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-white mb-12">
				Why Influencers Love Vhumani?
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 max-w-7xl mx-auto">
				{features.map((feature, idx) => (
					<Card
						key={idx}
						className="shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
					>
						<CardContent className="p-6 flex flex-col items-center gap-4">
							<div
								className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient} mb-2`}
							>
								{feature.icon}
							</div>
							<h3 className="text-lg font-semibold text-blue-700 dark:text-white text-center">
								{feature.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300 text-sm text-center">
								{feature.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default WhyChooseVhumani;
