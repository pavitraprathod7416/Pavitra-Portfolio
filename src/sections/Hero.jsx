import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../data/portfolio'
import Socials from '../components/Socials'
import RagPipeline from '../components/RagPipeline'

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="orb absolute -left-24 top-24 h-80 w-80 rounded-full bg-electric/25 blur-[110px]" aria-hidden="true" />
      <div className="orb absolute -right-20 top-48 h-80 w-80 rounded-full bg-violet-glow/25 blur-[110px]" style={{ animationDelay: '-6s' }} aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Open to entry-level software roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Pavitra
            <br />
            <span className="grad-text">Pundaleek Rathod</span>
          </motion.h1>

          <p className="mt-5 max-w-xl font-display text-xl font-medium text-slate-200 sm:text-2xl">{profile.headline}</p>

          <div className="mt-4 h-8 text-lg text-cyan-glow" aria-live="off">
            <AnimatePresence mode="wait">
              <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="inline-block">
                {profile.roles[i]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowDown size={16} />
            </a>
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="mt-8">
            <Socials />
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <RagPipeline />
        </motion.div>
      </div>
    </section>
  )
}
