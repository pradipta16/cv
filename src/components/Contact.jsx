import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profile } from '../data/cv'

const links = [
  {
    label: 'Email', value: profile.email, href: `mailto:${profile.email}`,
    icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>,
  },
  {
    label: 'LinkedIn', value: `linkedin.com/in/${profile.linkedinHandle}`, href: profile.linkedin, external: true,
    icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
  },
  {
    label: 'WhatsApp', value: profile.phone, href: `https://wa.me/62${profile.phone.replace(/^0/, '').replace(/\s/g, '')}`, external: true,
    icon: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02L6.6 10.8z"/>,
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  return (
    <section id="contact" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'64px 64px' }}/>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[80px] pointer-events-none"/>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6 }} className="text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border bg-blue-500/15 text-blue-300 border-blue-400/25 mb-6">
            06 · Kontak
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Mari <span className="text-gradient">Berkolaborasi</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
            Terbuka untuk peluang baru, diskusi proyek, atau sekadar ngobrol seputar System Analysis & Database Design.
          </p>

          <div className="inline-flex items-center gap-2 text-slate-500 text-xs mb-12">
            <svg className="w-3.5 h-3.5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{profile.location}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {links.map((l, i) => (
              <motion.a key={i} href={l.href}
                target={l.external ? '_blank' : undefined} rel="noreferrer"
                initial={{ opacity:0, y:10 }} animate={inView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.4, delay: i * 0.1 }}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 hover:scale-105 transition-all duration-300">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  {l.icon}
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-slate-600 uppercase tracking-widest">{l.label}</p>
                  <p className="text-xs text-slate-300 font-medium">{l.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/[0.06] pt-8 text-xs text-slate-700">
            © 2025 Gantangsanra Pradipta Putra Krismurtono
          </div>
        </motion.div>
      </div>
    </section>
  )
}
