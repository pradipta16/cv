import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionWrapper from './SectionWrapper'
import { technicalSkills, softSkills } from '../data/cv'

export default function Skills() {
  const [ref, inView] = useInView()
  return (
    <SectionWrapper id="skills" label="03" title="Keahlian">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Technical */}
        <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }} className="card p-6 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.map((s, i) => (
              <motion.span key={s}
                initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.28, delay: i * 0.04 }}
                className="tag-blue cursor-default hover:scale-105 transition-transform duration-150">
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }} className="card p-6 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">Soft Skills</h3>
          <div className="flex flex-col gap-4">
            {softSkills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs font-medium text-slate-700">{s.name}</span>
                  <span className="text-xs text-slate-400">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.level}%` } : { width: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: 'easeOut' }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
