import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function SectionWrapper({ id, label, title, children, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <section id={id} className={`max-w-4xl mx-auto px-6 py-16 ${className}`}>
      <motion.div ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-10">
          <span className="section-badge">{label}</span>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <div className="flex-1 h-px border-t border-slate-200" />
        </div>
        {children}
      </motion.div>
    </section>
  )
}
