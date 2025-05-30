import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 flex justify-center">
      <Card className="w-full max-w-4xl bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-none shadow-md">
        <CardContent className="py-12 flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-2xl font-bold text-blue-700 dark:text-white text-center">
            Get Platform Updates and Marketing Tips
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Sign up for our monthly newsletter—no spam, just value.
          </p>
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-md justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-slate-800 dark:text-white"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-md bg-orange-400 hover:bg-orange-500 text-white font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default NewsletterSignup;