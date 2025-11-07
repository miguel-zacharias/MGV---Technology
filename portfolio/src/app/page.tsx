// import { BlogsSection } from '@/components/main/Blogs'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import ResumeSection from '@/components/main/Resume'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
import CertificationsSection from '@/components/main/Certifications'
import { AnalyticsDebug } from '@/components/analytics/AnalyticsDebug'
import InteractiveWrapper from '@/components/main/InteractiveWrapper'

export const metadata: Metadata = {
  title: 'MGV Technology | Soluções em Áudio e Inovação',
  description: 'Site institucional da MGV Technology. Conheça nossos produtos, como a mCaixa de Som artesanal, nossa equipe, missão e projetos de tecnologia.',
  alternates: {
    canonical: 'https://mgvtechnology.com',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen" >
      {/* Hidden SEO content for better indexing */}
      <div className="sr-only">
        <h1>MGV Technology — Soluções em Áudio, Inovação e Engenharia</h1>
        <p>
          Bem-vindo ao site institucional da MGV Technology. Somos especialistas em projetos de áudio artesanal, inovação tecnológica e soluções criativas para empresas e consumidores. Conheça nossa mCaixa de Som, nossa equipe e nossos projetos.
        </p>
      </div>

      <InteractiveWrapper>
        <Hero />
        <Skills />
        <ResumeSection />
        <Timeline />
        {/* <CertificationsSection /> */}
        <Projects />
  {/* <BlogsSection /> */}
        <Toaster position="bottom-right" />
      </InteractiveWrapper>
      
      {/* Temporary test components for analytics - remove in production */}
      {/* <AnalyticsDebug /> */}
    </div>
  )
}
