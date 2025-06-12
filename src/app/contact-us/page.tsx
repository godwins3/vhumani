"use client";
import React from "react";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import NewsletterSignup from "@/components/shared/newsletter"

const ContactUsPage = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-900">
      <div className="text-center py-12 bg-white-gradient-to-b from-orange-50 to-white dark:bg-slate-900">
        <h1 className="text-3xl font-bold text-orange-600">We&apos;d Love to Hear from You</h1>
        <p className="text-muted-foreground mt-2">
          Whether you&apos;re a brand or an influencer, reach out—we&apos;re here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-12">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-blue-700 text-base">Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="role">I&apos;m contacting you as a...</Label>
              <Input id="role" placeholder="Business or Influencer" />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Subject" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} placeholder="Your message here..." />
            </div>
            <Button className="w-full bg-orange-400 hover:bg-orange-500">Send Message</Button>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-blue-700 text-base">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p><strong>Email:</strong> support@vhumani.com</p>
            <p><strong>Phone:</strong> +254 713 181 192</p>
            <p><strong>Business Hours:</strong> Mon–Fri, 9am–5pm (EAT)</p>
            <p><strong>Location:</strong> Kenrail Towers, Nairobi, Kenya</p>
            <iframe
              className="w-full h-48 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.999488051866!2d36.8189!3d-1.2921"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="bg-sky-50">
          <CardContent className="flex items-center justify-between p-4">
            <div className="text-sm">
              <p className="font-medium">Need help faster?</p>
              <p className="text-muted-foreground">Start a live chat with our support team for immediate assistance.</p>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600">Start Live Chat</Button>
          </CardContent>
        </Card>
      </div>
      <NewsletterSignup />
    </div>
  )
};

export default ContactUsPage;
