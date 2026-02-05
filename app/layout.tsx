import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Best Cardiovascular Biomarkers — CardioGuard',
  description: 'CardioGuard offers advanced cardiovascular biomarkers like ApoB and Lp(a) testing without insurance barriers. Get the heart tests cardiologists recommend in 2024.',
  keywords: 'best cardiovascular biomarkers, apolipoprotein b test, lipoprotein a test, advanced lipid panel, heart disease prevention blood tests, cardiovascular risk testing',
  authors: [{ name: 'CardioGuard' }],
  creator: 'CardioGuard',
  publisher: 'CardioGuard',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cardioguard.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best Cardiovascular Biomarkers — CardioGuard',
    description: 'CardioGuard offers advanced cardiovascular biomarkers like ApoB and Lp(a) testing without insurance barriers. Get the heart tests cardiologists recommend in 2024.',
    url: 'https://cardioguard.com',
    siteName: 'CardioGuard',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Cardiovascular Biomarkers — CardioGuard',
    description: 'CardioGuard offers advanced cardiovascular biomarkers like ApoB and Lp(a) testing without insurance barriers. Get the heart tests cardiologists recommend in 2024.',
    creator: '@cardioguard',
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-inter bg-background text-text antialiased">
        {children}
      </body>
    </html>
  )
}