import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionWrapper from './SectionWrapper'
import { education, certifications } from '../data/cv'

const dotColor = { cyan:'bg-cyan-400', violet:'bg-violet-400', emerald:'bg-emerald-400', amber:'bg-amber-400' }

export default function EducationCerts() {
  const [ref, inView] = useInView()
  return (
    <SectionWrapper id="education" label="05" title="Pendidikan & Sertifikasi">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="card p-6 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">Pendidikan</h3>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl flex-shrink-0">🎓</div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-0.5">{education.school}</h4>
              <p className="text-xs text-slate-500 mb-3">{education.degree}</p>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="tag-blue text-xs font-bold">⭐ IPK {education.gpa}</span>
                <span className="text-xs text-slate-400">{education.period}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }} className="card p-6 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">Sertifikasi</h3>
          <div className="flex flex-col gap-3.5">
            {certifications.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 8 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.38, delay: 0.15 + i * 0.07 }}
                className={`flex items-start gap-3 pb-3.5 ${i < certifications.length-1 ? 'border-b border-slate-100' : ''}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${dotColor[c.color] || 'bg-blue-400'}`} />
                <div>
                  <p className="text-xs font-semibold text-slate-800 leading-tight">{c.name}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{c.issuer} <span className="text-slate-400">· {c.date}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
