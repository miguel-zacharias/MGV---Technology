'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa'
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
      <span className="text-lg font-semibold text-foreground">Conecte-se comigo:</span>
      <div className="flex flex-row gap-4 justify-center mt-4">
        <a
          href="https://github.com/miguel-zacharias"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.652 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.38.202 2.399.1 2.652.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2Z"></path></svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/miguel-zacharias/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"></path></svg>
          LinkedIn
        </a>
      </div>

      {/* MGV Technology Section */}
      <div className="flex flex-col items-center mt-6">
        <span className="text-lg font-semibold text-foreground mb-2">Conheça a MGV Technology!</span>
        <a
          href="https://mgv-technology.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Visite o site
        </a>
      </div>
    </motion.div>
  )
}

export default HeroContent
