import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import { ThemeProvider } from "@/components/layouts/theme-provider";
import VhumaniFooter from "@/components/layouts/Footer";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "@/providers/query-client-provider";
import { EnhancedErrorBoundary } from "@/components/error-handling/error-boundary";
import SessionProvider from "@/providers/session-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL('https://vhumani.co.ke'),
  title: {
    default: 'Vhumani | Bridging Brands and Influencers',
    template: '%s | Vhumani',
  },
  description: 'Vhumani connects businesses with influencers and marketers to create powerful, targeted marketing campaigns. Empower your brand with authentic engagement.',
  keywords: [
    'influencer marketing',
    'brand collaboration',
    'digital marketing',
    'marketing platform',
    'social media influencers',
    'business growth',
    'brand awareness',
    'Vhumani',
    'Vhumani for businesses',
    'Vhumani for influencers',
    'influencer discovery',
    'campaign management',
    'influencer analytics',
    'influencer partnerships',
    'influencer outreach',
    'influencer engagement',
    'influencer marketing platform',
    'influencer marketing agency',
    'influencer marketing strategy',
    'influencer marketing tools',
    'influencer marketing campaigns',
    'influencer marketing software',
    'influencer marketing solutions',
    'influencer marketing trends',
    'influencer marketing best practices',
    'vhumani platform',
    'vhumani influencers',
    'vhumani businesses',
    'vhumani marketing',
    'vhumani campaigns',
    'vhumani partnerships',
    'vhumani engagement',
    'vhumani analytics',
    'vhumani outreach',
    'vhumani discovery',
    'vhumani collaboration',
    'vhumani growth',
    'vhumani brand awareness',
    'vhumani social media',
    'vhumani digital marketing',
    'vhumani influencer marketing',
    'vhumani influencer partnerships',
    'vhumani influencer engagement',
    'vhumani influencer discovery',
    'vhumani influencer campaigns',
    'vhumani influencer analytics',
    'vhumani influencer outreach',
    'vhumani influencer collaboration',
    'vhumani influencer marketing platform',
    'vhumani businesses',
    'vhumani startups',
    'vhumani brands',
    'vhumani organizations',
    
  ],
  authors: [{ name: 'Vhumani' }],
  creator: 'Vhumani',
  publisher: 'Vhumani',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vhumani.co.ke',
    siteName: 'Vhumani',
    title: 'Vhumani - Bridging Brands and Influencers',
    description: 'Discover Vhumani, a platform connecting businesses with influencers to drive real engagement and impactful marketing campaigns.',
    images: [
      {
        url: "/vhumani-logo.png",
        width: 1200,
        height: 630,
        alt: 'Vhumani Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const queryClient = new QueryClient();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <SessionProvider>
            <EnhancedErrorBoundary>
              <Analytics />
              <QueryProvider>{children}</QueryProvider>
            </EnhancedErrorBoundary>
            <Toaster />
        </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}