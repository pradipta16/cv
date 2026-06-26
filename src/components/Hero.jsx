import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/cv'

function TypingText({ words }) {
  const [idx, setIdx]         = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText]       = useState('')

  useEffect(() => {
    const current = words[idx]
    let t
    if (!deleting && charIdx <= current.length) {
      setText(current.slice(0, charIdx))
      t = setTimeout(() => setCharIdx(c => c + 1), 75)
    } else if (!deleting && charIdx > current.length) {
      t = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIdx >= 0) {
      setText(current.slice(0, charIdx))
      t = setTimeout(() => setCharIdx(c => c - 1), 40)
    } else {
      setDeleting(false)
      setIdx(i => (i + 1) % words.length)
    }
    return () => clearTimeout(t)
  }, [charIdx, deleting, idx, words])

  return <span>{text}<span className="animate-pulse opacity-70">|</span></span>
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      {/* glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] rounded-full bg-indigo-500/15 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-8 bg-blue-500/15 text-blue-300 border border-blue-400/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to Opportunities
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-[76px] font-black tracking-tighter leading-none mb-4">
          <span className="text-white">Gantangsanra</span><br />
          <span className="text-gradient">Pradipta P.K.</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-xl sm:text-2xl font-light text-slate-300 mt-4 mb-5 min-h-8">
          <TypingText words={profile.roles} />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="max-w-lg text-sm text-slate-300 leading-relaxed mb-10">
          Menerjemahkan kebutuhan bisnis menjadi solusi teknis yang efisien.
          3+ tahun dalam System Analysis, Database Design & API Architecture.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3 mb-16">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/20 text-slate-300 hover:bg-white/10 hover:text-white transition-all">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email Saya
          </a>
          <a href="#portfolio"
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/20 text-slate-300 hover:bg-white/10 hover:text-white transition-all">
            Lihat Portfolio ↓
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-600">Scroll untuk menjelajah</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
