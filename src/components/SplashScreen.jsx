import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 2200

    const tick = (now) => {
      const pct = Math.min(((now - start) / duration) * 100, 100)
      setProgress(pct)
      if (pct < 100) requestAnimationFrame(tick)
      else setTimeout(() => setVisible(false), 300)
    }
    requestAnimationFrame(tick)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
        >
          {/* grid pattern */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

          {/* glow orbs */}
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-indigo-500/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Avatar / logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
              className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/40"
            >
              <span className="text-3xl font-black text-white tracking-tight">GP</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-2xl font-black text-white tracking-tight leading-tight">
                Gantangsanra<br />
                <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Pradipta P.K.
                </span>
              </h1>
              <p className="text-slate-400 text-sm mt-1 font-medium tracking-widest uppercase">System Analyst</p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[11px] text-slate-600 font-medium tracking-widest">
                {progress < 100 ? 'Memuat...' : 'Selesai'}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
