'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Users, TrendingUp, Eye, Heart } from 'lucide-react'

interface StatItem {
  id: string
  value: string
  label: string
  icon: React.ReactNode
  color: string
}

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState({
    businesses: 0,
    influencers: 0,
    impressions: 0,
    satisfaction: 0
  })
  const sectionRef = useRef<HTMLElement>(null)

  const stats: StatItem[] = [
    {
      id: 'businesses',
      value: '5,000+',
      label: 'Businesses',
      icon: <Users className="w-8 h-8" />,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'influencers',
      value: '25,000+',
      label: 'Influencers',
      icon: <Heart className="w-8 h-8" />,
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      id: 'impressions',
      value: '10M+',
      label: 'Impressions',
      icon: <Eye className="w-8 h-8" />,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      id: 'satisfaction',
      value: '95%',
      label: 'Satisfaction Rate',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'text-orange-600 dark:text-orange-400'
    }
  ]

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateNumbers()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Number animation function
  const animateNumbers = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedValues({
        businesses: Math.floor(5000 * progress),
        influencers: Math.floor(25000 * progress),
        impressions: Math.floor(10 * progress),
        satisfaction: Math.floor(95 * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)
  }

  const formatAnimatedValue = (key: string, value: number) => {
    switch (key) {
      case 'businesses':
        return `${value.toLocaleString()}+`
      case 'influencers':
        return `${value.toLocaleString()}+`
      case 'impressions':
        return `${value}M+`
      case 'satisfaction':
        return `${value}%`
      default:
        return value.toString()
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by thousands worldwide
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join the growing community of businesses and influencers creating impactful campaigns together
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`text-center group transform transition-all duration-500 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`${stat.color} p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
              </div>

              {/* Animated Number */}
              <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                {isVisible 
                  ? formatAnimatedValue(stat.id, animatedValues[stat.id as keyof typeof animatedValues])
                  : stat.value
                }
              </div>

              {/* Label */}
              <div className="text-slate-600 dark:text-slate-400 font-medium text-lg">
                {stat.label}
              </div>

              {/* Decorative line */}
              <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent rounded-full group-hover:via-current transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-full border border-slate-200 dark:border-slate-700">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-semibold"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
              Join thousands of successful partnerships
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection