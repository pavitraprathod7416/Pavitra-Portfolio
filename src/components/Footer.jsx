import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-white">{profile.name}</p>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {profile.shortName}. All rights reserved.</p>
        </div>
        <Socials size={18} />
        <a href="#home" className="btn-ghost !py-2.5" aria-label="Back to top">
          <ArrowUp size={16} /> Back to top
        </a>
      </div>
    </footer>
  )
}
