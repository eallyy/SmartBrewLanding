import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import FacebookPixel from '@/lib/pixel/facebook-pixel'
import GoogleAnalytics from '@/lib/analytics'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - SmartBrew',
    default: 'SmartBrew - Perfect Your Pour-Over Brewing with AI-Powered Recipes',
  },
  description:
    'Brew the perfect pour-over coffee every time with SmartBrew. Create, optimize, and share recipes using AI-driven insights and personalized brewing techniques.',
  openGraph: {
    title: 'SmartBrew - The Ultimate Pour-Over Coffee Experience',
    description:
      'Take your pour-over coffee to the next level with AI-powered recipe optimization, flavor analysis, and brewing tips. Start your 7-day free trial today!',
    url: 'https://smartbrew.co',
    images: [
      {
        url: 'https://smartbrew.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SmartBrew - Brew the Perfect Pour-Over',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@smartbrew',
    title: 'SmartBrew - Perfect Your Pour-Over Brewing',
    description:
      'Unlock the full potential of your pour-over coffee with SmartBrew’s AI-driven recipe optimization and brewing insights.',
    images: [
      {
        url: 'https://smartbrew.co/twitter-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SmartBrew - Brew the Perfect Pour-Over',
      },
    ]
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'Pour-over coffee',
    'Coffee brewing',
    'Coffee recipes',
    'Recipe optimization',
    'Flavor analysis',
    'Brew log',
    'AI-powered brewing',
    'Coffee techniques',
    'Coffee community',
    'Coffee brewing app',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: 'Emir Alanyalioglu',
    url: 'https://alany.co',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <head>
        <FacebookPixel />
        <GoogleAnalytics />
      </head>
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
