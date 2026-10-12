import { useState } from 'react'
import { Check, Copy, Mail, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Socials from '../components/Socials'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900/50 py-24">
      <div className="orb absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-glow/15 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <SectionHeading title="Let's work together" />
        <Reveal className="-mt-6">
          <p className="mx-auto max-w-xl text-slate-400">
            I am looking for an entry-level Software Engineer or Backend Developer role. If you are hiring, or want to collaborate on something, I would love to hear from you.
          </p>
          <div className="glass mx-auto mt-8 flex max-w-md flex-col items-center gap-4 rounded-2xl p-6">
            <p className="flex items-center gap-2 break-all text-white"><Mail size={18} className="text-cyan-glow" /> {profile.email}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary"><Mail size={16} /> Send an email</a>
              <button onClick={copy} className="btn-ghost" aria-live="polite">
                {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy email</>}
              </button>
            </div>
            <p className="flex items-center gap-2 text-sm text-slate-500"><MapPin size={14} /> {profile.location}</p>
          </div>
          <div className="mt-8 flex justify-center"><Socials /></div>
        </Reveal>
      </div>
    </section>
  )
}
