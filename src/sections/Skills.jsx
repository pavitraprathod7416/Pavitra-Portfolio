import { motion } from 'framer-motion'
import { Code2, Globe, Server, Database, BrainCircuit, BarChart3, Cloud, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { skillGroups } from '../data/portfolio'

const icons = { Code2, Globe, Server, Database, BrainCircuit, BarChart3, Cloud, Wrench }

export default function Skills() {
  return (
    <section id="skills" className="bg-navy-900/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Technical skills" subtitle="Technologies I have used in coursework and projects." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, idx) => {
            const Icon = icons[g.icon]
            // AI/ML is the core focus, so it gets a wider tile.
            const wide = g.title.startsWith('AI/ML')
            return (
              <Reveal key={g.title} delay={idx * 0.04} className={wide ? 'sm:col-span-2' : ''}>
                <motion.div whileHover={{ y: -4 }} className="glass group h-full rounded-2xl p-5 transition-colors hover:border-violet-glow/50">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric/25 to-violet-glow/25 text-cyan-glow">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display font-bold text-white">{g.title}</h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="chip">{s}</li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
