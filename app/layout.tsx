import type React from 'react'
import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

const sourceSans = Source_Sans_Pro({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-source-sans',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-montserrat',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Clean Spaces - Beautiful Living Starts at Home',
    description:
        'Discover fresh inspiration, simple tips, and beautiful ideas to elevate your living space—one corner at a time.',
    generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${playfair.variable} ${sourceSans.variable} ${montserrat.variable}`}>
            <head></head>

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E653SBZBTQ" />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E653SBZBTQ');
  `}
            </Script>
            <body className="font-source-sans text-charcoal-black bg-white">
                <Navigation />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
