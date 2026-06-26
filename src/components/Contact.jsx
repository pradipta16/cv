import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profile } from '../data/cv'
import { Mail, MapPin } from 'lucide-react'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'

const links = [
  {
    label: 'Email', value: profile.email, href: `mailto:${profile.email}`,
    icon: <Mail size={16} strokeWidth={1.75} />,
  },
  {
    label: 'LinkedIn', value: `linkedin.com/in/${profile.linkedinHandle}`, href: profile.linkedin, external: true,
    icon: <FaLinkedin size={16} />,
  },
  {
    label: 'WhatsApp', value: profile.phone, href: `https://wa.me/62${profile.phone.replace(/^0/, '').replace(/\s/g, '')}`, external: true,
    icon: <FaWhatsapp size={16} />,
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  return (
    <section id="contact" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border bg-blue-500/15 text-blue-300 border-blue-400/25 mb-6">
            06 · Kontak
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Mari <span className="text-gradient">Berkolaborasi</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
            Terbuka untuk peluang baru, diskusi proyek, atau sekadar ngobrol seputar System Analysis, Database Design, API Design.
          </p>

          <div className="inline-flex items-center gap-2 text-slate-500 text-xs mb-12">
            <MapPin size={14} strokeWidth={1.75} className="text-slate-600" />
            <span>{profile.location}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {links.map((l, i) => (
              <motion.a key={i} href={l.href}
                target={l.external ? '_blank' : undefined} rel="noreferrer"
                initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 hover:scale-105 transition-all duration-300">
                <span className="text-slate-400 group-hover:text-blue-400 transition-colors flex-shrink-0">
                  {l.icon}
                </span>
                <div className="text-left">
                  <p className="text-[10px] text-slate-600 uppercase tracking-widest">{l.label}</p>
                  <p className="text-xs text-slate-300 font-medium">{l.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
