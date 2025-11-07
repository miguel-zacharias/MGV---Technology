'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
  src: string
  width: number
  height: number
  index: number
  className: string
}

const SkillDataProvider = ({ src, width, height, index, className }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationDelay = 0.3
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={className}
    >
      {src.startsWith('http') ? (
        // External images: use plain <img> to avoid Next.js external image config issues
        // and allow lazy loading from remote URLs.
        // Keep width/height attributes for layout stability.
        <img src={src} width={width} height={height} alt="skill image" loading="lazy" />
      ) : (
        <Image src={src} width={width} height={height} alt="skill image" />
      )}
    </motion.div>
  )
}

export default SkillDataProvider
