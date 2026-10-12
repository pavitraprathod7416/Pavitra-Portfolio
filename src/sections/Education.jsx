import { GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="bg-navy-900/50 py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading title="Education" />
        {/* This is a real timeline: most recent first. */}
        <ol className="relative ml-4 border-l border-white/15">
          {education.map((e, i) => (
            <Reveal as="li" key={e.degree} delay={i * 0.08} className="mb-8 ml-8 last:mb-0">
              <span className="absolute -left-[17px] grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-navy-800 text-cyan-glow">
                <GraduationCap size={16} />
              </span>
              <div className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-white">{e.degree}</h3>
                  <span className="text-sm text-cyan-glow">{e.period}</span>
                </div>
                <p className="mt-1 text-slate-400">{e.school}</p>
                <p className="mt-3 inline-block rounded-lg bg-white/5 px-3 py-1 text-sm font-medium text-white">{e.score}</p>
                {e.status && <span className="ml-2 text-sm text-slate-500">{e.status}</span>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
