import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Code2, Briefcase, FolderGit2 } from 'lucide-react'

const metrics = [
  { icon: Briefcase, label: 'Years of Experience', value: 5, suffix: '+', color: 'from-primary-500 to-primary-600', ring: 'border-primary-500/20' },
  { icon: FolderGit2, label: 'Projects Delivered', value: 15, suffix: '+', color: 'from-accent-500 to-accent-600', ring: 'border-accent-500/20' },
  { icon: Code2, label: 'Technologies Mastered', value: 30, suffix: '+', color: 'from-violet-500 to-purple-600', ring: 'border-violet-500/20' },
  { icon: TrendingUp, label: 'Enterprise Systems', value: 8, suffix: '+', color: 'from-amber-500 to-orange-600', ring: 'border-amber-500/20' },
]

function useCountUp(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDone(true)
      }
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return { count, done }
}

export default function Metrics({ darkMode }) {
  return (
    <section id="metrics" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl section-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <MetricCard key={metric.label} metric={metric} darkMode={darkMode} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricCard({ metric, darkMode, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const { count, done } = useCountUp(metric.value, 2000, inView)
  const Icon = metric.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
      className={`relative text-center rounded-3xl p-8 group overflow-hidden backdrop-blur-md border transition-all duration-300 hover:-translate-y-2 ${
        darkMode
          ? 'bg-surface-800/40 border-white/5 hover:border-white/10 hover:shadow-2xl hover:shadow-primary-500/10'
          : 'bg-white/60 border-black/5 hover:border-black/10 hover:shadow-2xl hover:shadow-primary-500/10'
      }`}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Spinning ring behind icon */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className={`absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-2 border-dashed ${metric.ring} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className={`relative z-10 inline-flex p-4 rounded-2xl bg-gradient-to-br ${metric.color} text-white shadow-lg mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
        <Icon size={28} />
      </div>
      
      <div className={`relative z-10 font-display text-5xl font-black tracking-tighter mb-2 transition-transform duration-300 ${
        done ? 'scale-105' : ''
      } ${
        darkMode ? 'text-white' : 'text-surface-900'
      }`}>
        {count}{metric.suffix}
      </div>
      
      <div className={`relative z-10 font-mono text-xs font-bold uppercase tracking-widest ${
        darkMode ? 'text-surface-400' : 'text-surface-500'
      }`}>
        {metric.label}
      </div>
    </motion.div>
  )
}
