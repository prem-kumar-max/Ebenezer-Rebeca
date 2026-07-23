import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import './globals.css'
import { SplashScreen } from '@/components/wedding/splash-screen'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ebenezer & Rebeca — Wedding Invitation',
  description:
    'Together with our families, we joyfully invite you to celebrate the Holy Matrimony of Ebenezer & Rebeca — 06 August 2026, Ashok Function Hall, Vijayawada.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#5b3e7e',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} bg-background`}
    >
      <body className="antialiased">
        <SplashScreen />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
