import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import useActiveSection from './useActiveSection'

const ids = navLinks.map((l) => l.toLowerCase())

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold text-white">
          <span className="grad-text">{profile.initials}</span>
          <span className="ml-2 hidden sm:inline">{profile.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const id = l.toLowerCase()
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm transition ${active === id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {l}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-primary hidden !px-4 !py-2 sm:inline-flex">
            <Download size={16} /> Resume
          </a>
          <button
            className="rounded-lg p-2 text-slate-200 hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-navy-900 px-5 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-slate-200">
                  {l}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-primary w-full">
                <Download size={16} /> Download Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
