// components/AnalyticsShowcase.tsx
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Real-time campaign tracking",
  "Audience demographic breakdown",
  "ROI and conversion metrics",
  "Custom report generation",
]

const gradients = [
  "from-orange-500 to-yellow-500",
  "from-blue-500 to-purple-500",
  "from-green-500 to-teal-500",
  "from-pink-500 to-red-500",
]

export default function AnalyticsShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-white mb-12">
        Insightful Analytics at Your Fingertips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12 max-w-7xl mx-auto items-center">
        {/* Left: Features */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-600 dark:text-gray-300 mb-2 max-w-md mx-auto md:mx-0">
            Track campaign performance, engagement rates, and audience growth with our comprehensive dashboard.
          </p>
          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${gradients[idx % gradients.length]}`}
                >
                  <CheckCircle className="w-6 h-6 text-white drop-shadow" />
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-base text-left">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image in a browser mockup */}
        <div className="relative rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
          {/* Browser Mockup Header */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">Dashboard</span>
          </div>
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/assets/images/dashboard.jpg"
              alt="Dashboard Analytics"
              width={600}
              height={350}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
