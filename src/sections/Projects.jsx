import { motion } from 'framer-motion'
import { Github, ExternalLink, Target } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { projects } from '../data/portfolio'

function Links({ p }) {
  if (!p.github && !p.demo) {
    return <p className="text-sm text-slate-500">Repository and demo links coming soon.</p>
  }
  return (
    <div className="flex flex-wrap gap-3">
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">
          <Github size={16} /> Code
        </a>
      )}
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2">
          <ExternalLink size={16} /> Live demo
        </a>
      )}
    </div>
  )
}

function ProjectCard({ p, featured }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-colors hover:border-electric/50 sm:p-8 ${featured ? 'lg:flex-row lg:gap-10' : ''}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-glow/20 opacity-0 blur-3xl transition group-hover:opacity-100" aria-hidden="true" />
      <div className="relative flex-1">
        {featured && <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-electric to-violet-glow px-3 py-1 text-xs font-semibold text-white">Featured</span>}
        <h3 className={`font-display font-bold text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{p.title}</h3>
        <p className="mt-3 text-slate-400">{p.summary}</p>
        <p className="mt-4 flex gap-2 text-sm text-slate-300">
          <Target size={16} className="mt-0.5 shrink-0 text-cyan-glow" aria-hidden="true" />
          <span><span className="font-semibold text-white">Problem: </span>{p.problem}</span>
        </p>
      </div>
      <div className="relative mt-6 flex flex-1 flex-col justify-between gap-6 lg:mt-0">
        <ul className="space-y-2 text-sm text-slate-300">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        <Links p={p} />
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Projects" subtitle="What I have built, and the problem each one is meant to solve." />
      <div className="space-y-6">
        <Reveal><ProjectCard p={featured} featured /></Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
