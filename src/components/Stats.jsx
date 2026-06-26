import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import { stats } from '../data/cv'

function StatItem({ stat, index, inView }) {
  const count = useCounter(stat.value, 1500, inView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card flex flex-col items-center py-8 px-6 hover:shadow-md transition-shadow duration-300">
      <span className="text-5xl font-black tracking-tighter text-gradient">
        {count}{stat.suffix}
      </span>
      <span className="text-sm mt-2 font-medium text-slate-500">{stat.label}</span>
    </motion.div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => <StatItem key={i} stat={s} index={i} inView={inView} />)}
      </div>
    </section>
  )
}
