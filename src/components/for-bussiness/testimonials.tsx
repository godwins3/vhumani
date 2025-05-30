import { Card, CardContent } from "@/components/ui/card";
import { User, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Kariuki",
    title: "Marketing Director, Safi Foods",
    text: `“Vhumani helped us connect with the perfect influencers for our health food brand. Our campaign ROI increased by 300% in just three months!”`,
    rating: 5,
  },
  {
    name: "Amina Mohammed",
    title: "CEO, Zawadi Fashion",
    text: `“The analytics dashboard gave us incredible insights into our campaign performance. We could make data-driven decisions in real-time.”`,
    rating: 5,
  },
  {
    name: "David Ofori",
    title: "Digital Manager, TechHub Africa",
    text: `“The secure payment system and contract management features saved us countless hours and gave us peace of mind.”`,
    rating: 4.5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-white mb-12">
        Trusted by Businesses Across Africa
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <Card
            key={idx}
            className="shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col items-center"
          >
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 mb-2">
                <User className="w-7 h-7 text-gray-500 dark:text-gray-300" />
              </div>
              <div className="text-left w-full">
                <span className="font-semibold text-gray-900 dark:text-white">{t.name}</span>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t.title}</div>
              </div>
              <p className="italic text-gray-700 dark:text-gray-200 text-left w-full">{t.text}</p>
              <div className="flex items-center mt-2">
                {[...Array(Math.floor(t.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                ))}
                {t.rating % 1 !== 0 && (
                  <Star className="w-5 h-5 text-orange-400 fill-orange-400" style={{ clipPath: "inset(0 50% 0 0)" }} />
                )}
                {[...Array(5 - Math.ceil(t.rating))].map((_, i) => (
                  <Star key={i + 5} className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}