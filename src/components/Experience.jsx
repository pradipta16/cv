import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionWrapper from './SectionWrapper'
import { experience } from '../data/cv'

function JobCard({ job, index, inView }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.13 }}
      className="flex gap-5">
      {/* timeline */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-3.5 h-3.5 rounded-full mt-2 z-10 flex-shrink-0 ${
          job.current
            ? 'bg-blue-600 shadow-[0_0_0_4px_#dbeafe]'
            : 'bg-white border-2 border-slate-300'}`} />
        {index < experience.length - 1 && <div className="w-px flex-1 mt-2 min-h-[60px] bg-slate-200" />}
      </div>

      {/* card */}
      <div className="flex-1 card overflow-hidden mb-6 hover:shadow-md transition-shadow duration-300">
        <button className="w-full text-left p-5" onClick={() => setExpanded(e => !e)}>
          <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-sm font-bold text-slate-800">{job.title}</h3>
                {job.current && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ● Sekarang
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">{job.company} <span className="text-slate-400">· {job.location}</span></p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 flex-shrink-0">{job.period}</span>
              <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {job.tags.map(t => <span key={t} className="tag-slate text-[10px]">{t}</span>)}
          </div>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="px-5 pb-5 border-t border-slate-100">
                {job.project && (
                  <div className="mt-4 mb-3 pl-3 border-l-2 border-blue-400 py-2 pr-3 bg-blue-50/60 rounded-r-lg">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <span className="font-semibold text-blue-700">Project: </span>{job.project}
                    </p>
                  </div>
                )}
                <ul className="mt-3 space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 items-start">
                      <span className="text-blue-500 text-xs mt-0.5 flex-shrink-0 font-bold">▸</span>
                      <span className="text-xs text-slate-600 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()
  return (
    <SectionWrapper id="experience" label="02" title="Pengalaman Kerja">
      <div ref={ref}>
        {experience.map((job, i) => <JobCard key={i} job={job} index={i} inView={inView} />)}
      </div>
    </SectionWrapper>
  )
}
