import { motion } from 'framer-motion'
import { FileText, Scissors, Binary, MessageSquareText } from 'lucide-react'

// Visual of the RAG flow from the featured project.
const steps = [
  { icon: FileText, label: 'Document', note: 'Upload & parse' },
  { icon: Scissors, label: 'Chunking', note: 'Split into passages' },
  { icon: Binary, label: 'Embeddings', note: 'Vectorize & retrieve' },
  { icon: MessageSquareText, label: 'LLM answer', note: 'Contextual response' },
]

export default function RagPipeline() {
  return (
    <div className="glass relative rounded-3xl p-6 shadow-2xl shadow-violet-glow/10">
      <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <i className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <i className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </span>
        <span>How my RAG assistant works</span>
      </div>
      <ol className="relative space-y-3">
        <span className="absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-electric via-violet-glow to-cyan-glow opacity-40" aria-hidden="true" />
        {steps.map(({ icon: Icon, label, note }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.45, duration: 0.5 }}
            className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-ink/60 p-3"
          >
            <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-violet-glow/30 text-cyan-glow">
              <Icon size={20} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">{label}</span>
              <span className="block text-xs text-slate-400">{note}</span>
            </span>
            <motion.span
              className="ml-auto h-2 w-2 rounded-full bg-cyan-glow"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.6 }}
              aria-hidden="true"
            />
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
