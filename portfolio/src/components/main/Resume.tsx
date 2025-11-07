'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

const ResumeSection = () => {
  // This section is now a company 'About' page for MGV Technology.
  // We keep some local state in case we add interactive features later.
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      id="resume"
      className="relative bg-background text-foreground px-6 py-20 flex flex-col items-center min-h-screen overflow-hidden"
    >
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0 -z-10">
        {/* Formas geométricas flutuantes */}
        <div className="absolute top-32 right-16 w-28 h-28 bg-gradient-to-br from-gray-200/60 via-gray-400/40 to-gray-600/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-80 left-20 w-20 h-20 bg-gradient-to-tr from-gray-300/40 via-gray-500/30 to-gray-700/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-60 right-1/3 w-16 h-16 bg-gradient-to-tl from-gray-100/60 via-gray-400/30 to-gray-700/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-bl from-gray-200/40 via-gray-500/20 to-gray-800/10 rounded-lg rotate-12 float-animation"></div>

        {/* Padrão de grade */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(180,180,180,0.06)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Orbes em gradiente */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-gray-200/30 via-gray-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-gray-400/20 via-gray-600/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10 relative z-10"
      >
        <h2 title="Sobre a MGV Technology" className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#dbeaf6] via-[#9fb7c8] to-[#e6e6e6] bg-clip-text text-transparent mb-4">
          Sobre a MGV Technology
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A MGV Technology desenvolve sistemas de áudio personalizados que unem design, engenharia e criatividade. Projetamos e construímos soluções de som artesanais com foco em qualidade sonora, potência e acabamento.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-2xl overflow-hidden relative z-10 px-8 py-10"
      >
        <div className="prose prose-invert max-w-none text-left">
          <h3 className="text-2xl font-semibold mb-2">Nossa História</h3>
          <p>
            A MGV Technology nasceu em 2018 a partir de um sonho simples e ambicioso: construir um sistema de som Do-It-Yourself que qualquer entusiasta pudesse montar, entender e, sobretudo, sentir. O projeto começou na garagem com desenhos em papel, simulações básicas e horas de escuta crítica.
          </p>

          {/* Conteúdo estendido ocultável: subseções renderizadas em linhas alternadas (md+) */}
          {expanded && (
            <>
              {/* helper para alternar lado */}
              {(() => {
                const SectionRow = ({ index, children }: any) => (
                  <div className={`mb-8 md:flex md:items-start md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2">
                      <div className={`${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>{children}</div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                )

                return (
                  <>
                    <SectionRow index={0}>
                      <p>
                        Cada protótipo foi uma lição — nas medidas de sala, nas escolhas de falantes, na densidade do material de acabamento. Nos primeiros anos a abordagem foi experimental. Construímos protótipos com diferentes topologias de gabinete, testamos crossovers passivos e ativos, e passamos noites ajustando as curvas de resposta com DSP. A comunidade DIY foi essencial: feedbacks, testes em ambientes reais e trocas técnicas ajudaram a melhorar os projetos. De uma ideia de hobby, nasceu um processo metódico de desenvolvimento.
                      </p>
                      <p className="mt-4">
                        Em 2020 e 2021, refinamos o conceito e documentamos procedimentos de manufatura. Em 2022 iniciamos o projeto do receiver MSC 1000, com foco em usabilidade — VU meters visuais, monitoramento de potência e entradas flexíveis. Em 2024, demos o passo para produção small-batch, mantendo o caráter artesanal, mas com padrões de qualidade que garantissem resultados consistentes.
                      </p>
                      <p className="mt-4">
                        Hoje, a MGV combina o melhor do maker mindset com práticas de engenharia. Cada produto nasce de protótipos medidos, ajustes finos e uma paixão por som real. Seguimos abrindo caminhos entre a experimentação artesanal e soluções confiáveis para quem busca uma experiência sonora diferenciada.
                      </p>
                    </SectionRow>

                    <SectionRow index={1}>
                      <h3 className="text-2xl font-semibold mt-6 mb-2">Nossa Missão</h3>
                      <p>
                        Criar experiências sonoras memoráveis por meio de engenharia acústica, design e soluções eletrônicas cuidadosas. Buscamos a união entre forma e função para entregar produtos com caráter e desempenho.
                      </p>
                    </SectionRow>

                    <SectionRow index={2}>
                      <h3 className="text-2xl font-semibold mt-6 mb-2">Projetos Principais</h3>
                      <div className="space-y-3">
                        <div>
                          <strong>MGS 2030 S</strong> — Caixa de som artesanal, projetada para oferecer potência e clareza sonora. Inclui estudos de gabinete, seleção de drivers e crossover personalizado.
                        </div>
                        <div>
                          <strong>MSC 1000</strong> — Receiver em desenvolvimento com VU meters, monitoramento digital e integração para sistemas modernos.
                        </div>
                        <div>
                          Protótipos e testes de DSP — Medições, ajustes de equalização e otimizações de resposta em laboratório.
                        </div>
                      </div>
                    </SectionRow>

                    <SectionRow index={3}>
                      <h3 className="text-2xl font-semibold mt-6 mb-2">Destaques</h3>
                      <div className="space-y-2">
                        <div>Design acústico e simulações</div>
                        <div>Prototipagem e produção small-batch</div>
                        <div>Integração eletrônica com foco em usabilidade e performance</div>
                      </div>
                    </SectionRow>

                    <SectionRow index={4}>
                      <h3 className="text-2xl font-semibold mt-6 mb-2">Contato</h3>
                      <p>
                        Para parcerias, encomendas ou dúvidas técnicas, entre em contato pelo e-mail <a href="mailto:contato@mgvtechnology.com" className="underline">contato@mgvtechnology.com</a> ou use a seção de contato no site.
                      </p>
                    </SectionRow>
                  </>
                )
              })()}
            </>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 flex flex-wrap gap-4 justify-center relative z-10"
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-400 hover:from-gray-400 hover:to-gray-100 text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {expanded ? 'Mostrar menos' : 'Saiba mais sobre nós'}
        </button>
      </motion.div>
    </section>
  )
}

export default ResumeSection
