import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { about, aboutHighlights } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="About me" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 leading-relaxed text-slate-300">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="glass h-fit divide-y divide-white/10 rounded-2xl">
          {aboutHighlights.map((h) => (
            <div key={h.label} className="p-5">
              <p className="text-sm text-slate-500">{h.label}</p>
              <p className="mt-1 font-medium text-white">{h.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
