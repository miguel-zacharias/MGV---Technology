'use client'

import { motion } from 'framer-motion'
import { FC, JSX } from 'react'
import { Timeline as TimelineComponent } from '@/components/ui/timeline'
import { FaMusic, FaMicrophone, FaCogs } from 'react-icons/fa'

export interface TimelineItem {
  id: number
  type: 'work' | 'project'
  title: string
  company: string
  location: string
  date: string
  description: string
  achievements: string[]
  icon: JSX.Element
}

export const timelineData: TimelineItem[] = [
  {
    id: 4,
    type: 'project',
    title: 'Idealização e Produção de S.O',
    company: 'MGV Technology',
    location: 'Salto/SP',
    date: '2024 - Atual',
    description:
      'Sistema operacional embarcado para dispositivos de áudio, focado em estabilidade, performance e integração com hardware personalizado.',
    achievements: [
      'Implementação de processos de montagem e testes finais',
      'Padronização de acabamentos e materiais',
      'Entrega de lotes piloto para avaliação de mercado',
    ],
    icon: <FaCogs className="w-6 h-6 text-secondary" />,
  },
  {
    id: 3,
    type: 'project',
    title: 'MSC 1000 — Receiver: Design & Prototyping',
    company: 'MGV Technology',
    location: 'Salto/SP',
    date: '2023 - Atual',
    description:
      'Desenvolvimento do receiver MSC 1000 com VU meters, monitoramento digital de potência e integração para sistemas de áudio modernos.',
    achievements: [
      'Projeto eletrônico e layout de placa',
      'Desenvolvimento do circuito de VU meters em LED',
      'Testes de integração com caixas e sistemas de entrada/saída',
    ],
    icon: <FaMicrophone className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    type: 'project',
    title: 'MGS 2030 S — Redesign & Finalização',
    company: 'MGV Technology',
    location: 'Salto/SP',
    date: '2019 - 2021',
    description:
      'Projeto completo da caixa acústica MGS 2030 S — do estudo de gabinete à seleção de drivers e crossover, com otimizações para resposta e potência.',
    achievements: [
      'Design do gabinete com simulações acústicas',
      'Escolha e teste de drivers e crossovers',
      'Prototipação e refinamento de acabamento e performance',
    ],
    icon: <FaMusic className="w-6 h-6 text-primary" />,
  },
  {
    id: 1,
    type: 'project',
    title: 'Prototipação e idealização MGS 2030-S',
    company: 'MGV Technology — Lab',
    location: 'Salto/SP',
    date: '2018 - 2020',
    description:
      'Idealização do projeto, cobrindo medidas e quais equipamentos seriam utilizados.',
    achievements: [
      'Medições de resposta em frequência e fase',
      'Ajustes de DSP para otimização de timbre',
      'Documentação de testes e iterações de projeto',
    ],
    icon: <FaCogs className="w-6 h-6 text-secondary" />,
  },
]

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="space-y-6" key={index}>
    <div>
      <h3 title={item.title} className="text-lg font-semibold text-foreground">{item.title}</h3>
      <p className="text-sm text-muted-foreground">
        {item.company} • {item.location}
      </p>
      <p className="text-sm text-muted-foreground">{item.date}</p>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach) => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>
  </div>
)

const Timeline: FC = () => {
  // Render timeline chronologically: oldest -> newest
  const timelineContent = timelineData.slice().reverse().map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} index={item.id} />,
  }))

  return (
    <section id="experience" className="relative py-20 text-foreground transition-colors overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 left-20 w-20 h-20 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-400/10 rounded-lg rotate-12 float-animation"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 title="Experiência Profissional & Projetos" className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-700 via-gray-500 to-gray-100 bg-clip-text text-transparent mb-4">
            Trajetória Profissional da MGV
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Destaques da linha do tempo de projetos, idealizações e desenvolvimentos realizados pela MGV Technology.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          <TimelineComponent data={timelineContent} />
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
