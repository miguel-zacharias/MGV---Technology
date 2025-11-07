'use client'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaRocket } from 'react-icons/fa'
import { FC, useState, useEffect } from 'react'
import { NavbarButton } from '../ui/resizable-navbar'

const HeroContent: FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#dbeaf6] via-[#9fb7c8] to-[#e6e6e6] bg-clip-text text-transparent mb-6">
        Sua experiência sonora começa aqui.
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-6">
        Dedicada à engenharia de áudio, a MGV Technology projeta sistemas completos de som, caixas acústicas e receivers pensados para quem busca desempenho real. Unimos tecnologia, robustez e qualidade em cada detalhe.     
      </p>
      <span className="text-lg font-semibold text-foreground">Conecte-se conosco</span>
      <div className="flex flex-row gap-4 justify-center mt-4">
        <a
          href="https://instagram.com/records.mgv/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaInstagram className="w-5 h-5" />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/miguel-zacharias/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaLinkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>

      {/* Partner links: label above, buttons centered below; stacked on small, side-by-side on md+ */}
      <div className="mt-6 w-full max-w-2xl mx-auto text-center">
        <div className="text-lg font-semibold text-foreground mb-4">Conheça Empresas Parceiras</div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://technology-mgv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            MGV Tech
          </a>

          <a
            href="https://records.mgv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            MGV Records
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroContent
