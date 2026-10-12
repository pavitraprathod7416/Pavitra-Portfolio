import { Github, Linkedin, Code2 } from 'lucide-react'
import { socials } from '../data/portfolio'

const items = [
  { href: socials.github, label: 'GitHub', Icon: Github },
  { href: socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: socials.leetcode, label: 'LeetCode', Icon: Code2 },
]

export default function Socials({ size = 20 }) {
  return (
    <ul className="flex gap-3">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="glass grid h-11 w-11 place-items-center rounded-xl text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-glow/50 hover:text-white"
          >
            <Icon size={size} />
          </a>
        </li>
      ))}
    </ul>
  )
}
