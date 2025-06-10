import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ClientTestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah Katheu",
            title: "CEO, Organic Skincare Co.",
            avatar: "/assets/images/Sarah.jpg", // Replace with your actual image path
            testimonial: "Vhumani helped us find micro-influencers who genuinely love our products. Our campaign resulted in a 300% ROI, something we never achieved with traditional ads.",
            rating: 5
        },
        {
            name: "Mike Omollo",
            title: "Fitness Influencer (250K followers)",
            avatar: "/assets/images/mike.jpg", // Replace with your actual image path
            testimonial: "As a content creator, Vhumani makes it so easy to find brands that align with my values. The payment system is secure and I've doubled my income since joining.",
            rating: 5
        },
        {
            name: "Lisa Anari",
            title: "Marketing Director, TechStart",
            avatar: "/assets/images/lisa.jpg", // Replace with your actual image path
            testimonial: "The analytics dashboard is incredible. We can track exactly which influencers drive the most conversions, helping us optimize our marketing spend.",
            rating: 4.5
        }
    ];

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

        return (
            <div className="flex items-center gap-1 mb-4">
                {/* Full Stars */}
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}

                {/* Half Star */}
                {hasHalfStar && (
                    <div className="relative">
                        <Star size={18} className="text-gray-300 dark:text-gray-600" />
                        <div className="absolute inset-0 overflow-hidden w-1/2">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                        </div>
                    </div>
                )}

                {/* Empty Stars */}
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={`empty-${i}`} size={18} className="text-gray-300 dark:text-gray-600" />
                ))}
            </div>
        );
    };

    return (
        <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-orange-500">What Our Clients</span>{" "}
                        <span className="text-gray-900 dark:text-white">Say</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Don&apos;t just take our word for it - hear from businesses and influencers who&apos;ve
                        found success with Vhumani.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                        >
                            {/* Avatar and Info */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-0.5">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={400}
                                            height={300}
                                            className="w-full h-full rounded-full object-cover bg-white dark:bg-gray-800"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
                                &quot;{testimonial.testimonial}&quot;
                            </blockquote>

                            {/* Star Rating */}
                            {renderStars(testimonial.rating)}
                        </div>
                    ))}
                </div>

                {/* CTA Link */}
                <div className="text-center">
                    <Link href="/about-us">
                        <button className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg transition-colors duration-300">
                            Read more success stories
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default ClientTestimonialsSection;