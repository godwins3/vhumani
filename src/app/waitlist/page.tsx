import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Instagram, Info, Facebook, Twitter, Linkedin } from "lucide-react";

const waitlist = () => {
    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com/vhumani', label: 'Facebook' },
        { icon: Twitter, href: 'https://twitter.com/vhumani', label: 'Twitter' },
        { icon: Instagram, href: 'https://instagram.com/vhumani', label: 'Instagram' },
        { icon: Linkedin, href: 'https://linkedin.com/company/vhumani', label: 'LinkedIn' }
    ];
    
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center p-4">
            <Card className="w-full max-w-3xl bg-white dark:bg-gray-800">
                <CardHeader className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-500 text-center">
                    You&apos;re on the waitlist
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <div className="text-gray-600 dark:text-gray-400 text-lg md:text-xl text-center space-y-4">
                        <p>Thank you for your interest! We are still working on our product and will notify you as soon as it&apos;s ready.</p>
                        <p>In the meantime, feel free to check out our website for updates and more information.</p>
                        <p>We are excited to have you on this journey with us!</p>
                    </div>
                    <Card className="w-full max-w-xl bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-none shadow-md mt-6">
                        <div className="text-gray-600 dark:text-gray-400 text-lg md:text-xl p-4 flex items-center gap-2 justify-center">
                            <Info size={30} className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300"/>
                            <span>Want to stay in the loop? Follow us on social media or subscribe to our newsletter for updates.</span>
                        </div>
                    </Card>
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-4 py-6">
                        <Button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                            Go back to home
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                            <Instagram size={20} className="group-hover:translate-x-1 transition-transform duration-300" /> 
                            Follow us
                        </Button>
                    </div>
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors duration-200 group"
                                    aria-label={social.label}
                                >
                                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                                </a>
                            );
                        })}
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default waitlist;