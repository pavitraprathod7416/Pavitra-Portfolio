import { Trophy, Award, Users, Code2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { achievements, certifications, hackathons, leadership } from '../data/portfolio'

function Panel({ icon: Icon, title, children, delay }) {
  return (
    <Reveal delay={delay} className="glass rounded-2xl p-6">
      <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-white">
        <Icon size={18} className="text-cyan-glow" /> {title}
      </h3>
      {children}
    </Reveal>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Achievements & certifications" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel icon={Award} title="Certifications">
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.title}>
                <p className="font-medium text-white">{c.title}</p>
                <p className="text-sm text-slate-500">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel icon={Code2} title="Hackathons" delay={0.06}>
          <ul className="space-y-2">
            {hackathons.map((h) => (
              <li key={h} className="text-slate-300">Participated in {h}</li>
            ))}
          </ul>
        </Panel>

        <Panel icon={Trophy} title="Awards & sports" delay={0.1}>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a.title} className="flex items-start justify-between gap-4">
                <span>
                  <span className="block font-medium text-white">{a.title}</span>
                  <span className="block text-sm text-slate-500">{a.detail}</span>
                </span>
                {a.year && <span className="shrink-0 text-sm text-cyan-glow">{a.year}</span>}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel icon={Users} title="Leadership" delay={0.14}>
          <ul className="space-y-3">
            {leadership.map((l) => (
              <li key={l} className="flex gap-2 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-glow" aria-hidden="true" />
                {l}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </section>
  )
}
