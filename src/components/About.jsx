import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionWrapper from './SectionWrapper'
import { profile } from '../data/cv'

const highlights = [
  { icon: '🗄️', label: 'Database Design',    desc: 'PostgreSQL, MongoDB, ERD & normalisasi schema' },
  { icon: '🔌', label: 'API Architecture',   desc: 'REST endpoint design, request/response optimization' },
  { icon: '📊', label: 'Process Mapping',    desc: 'Flowchart, DFD, business process analysis' },
  { icon: '📋', label: 'Documentation',      desc: 'Technical spec, requirement & impact analysis' },
]

export default function About() {
  const [ref, inView] = useInView()
  return (
    <SectionWrapper id="about" label="01" title="Tentang Saya">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="card p-6 md:col-span-2 hover:shadow-md transition-shadow duration-300">
          <p className="text-slate-600 text-sm leading-[1.9]">{profile.bio}</p>
        </motion.div>
        {highlights.map((h, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
            className="card p-5 hover:shadow-md hover:border-blue-200 transition-all duration-300 cursor-default">
            <div className="text-2xl mb-3">{h.icon}</div>
            <h3 className="text-sm font-bold text-slate-800 mb-1">{h.label}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
