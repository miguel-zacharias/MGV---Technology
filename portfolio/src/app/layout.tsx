import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Miguel Zacharias | Desenvolvedor e Projetista',
  description:
    'Miguel Zacharias - Desenvolvedor e Projetista com experiência em Full Stack, automação, áudio e inovação. Veja meu portfólio, trajetória e projetos.',
  keywords: [
    'miguel zacharias',
    'miguel zacharias portfolio',
    'desenvolvedor',
    'projetista',
    'full stack',
    'portfólio',
    'automação',
    'áudio',
    'inovação',
    'engenharia',
    'tecnologia',
    'projetos pessoais',
    'caixa de som',
    'receiver',
    'imobiliária',
    'segurança eletrônica'
  ],
  authors: [{ name: 'Miguel Zacharias' }],
  creator: 'Miguel Zacharias',
  publisher: 'Miguel Zacharias',
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://miguelzacharias.com',
    title: 'Miguel Zacharias - Desenvolvedor & Projetista',
    description: 'Portfólio de Miguel Zacharias, desenvolvedor e projetista com experiência em automação, áudio, sistemas e inovação.',
    siteName: 'Miguel Zacharias Portfolio',
    images: [
      {
        url: '/icon_profile_mz.jpg',
        width: 1200,
        height: 630,
        alt: 'Miguel Zacharias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miguel Zacharias - Desenvolvedor & Projetista',
    description: 'Portfólio de Miguel Zacharias, desenvolvedor e projetista.',
    images: ['/icon_profile_mz.jpg'],
    creator: '@miguelzacharias',
  },
  alternates: {
    canonical: 'https://miguelzacharias.com',
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Miguel Zacharias',
    jobTitle: 'Desenvolvedor e Projetista',
    description: 'Miguel Zacharias - Desenvolvedor e Projetista com experiência em Full Stack, automação, áudio e inovação.',
    url: 'https://miguelzacharias.com',
    image: '/',
    sameAs: [
      'https://github.com/miguel-zacharias',
      'https://linkedin.com/in/miguel-zacharias',
    ],
    knowsAbout: [
      'Desenvolvimento',
      'Projetos de Áudio',
      'Automação',
      'Full Stack',
      'Inovação',
      'Engenharia',
      'Tecnologia',
      'Sistemas',
      'Imobiliária',
      'Segurança Eletrônica'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Projetos Pessoais'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/newlogo.png" />
        <link rel="canonical" href="https://miguelzacharias.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <Navbar />
            <main role="main">
              {children}
            </main>
            <Footer />
          </AnalyticsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
