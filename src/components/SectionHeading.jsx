import Reveal from './Reveal'

export default function SectionHeading({ title, subtitle }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-electric to-cyan-glow" />
      {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
