import { useEffect, useState, useRef } from 'react'
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
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="metrics" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl section-line" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <MetricCard key={metric.label} metric={metric} darkMode={darkMode} inView={inView} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricCard({ metric, darkMode, inView, index }) {
  const { count, done } = useCountUp(metric.value, 2000, inView)
  const Icon = metric.icon

  return (
    <div
      className={`relative text-center rounded-2xl p-8 group card-tilt overflow-hidden opacity-0 ${
        inView ? 'animate-scale-in-bounce' : ''
      } ${
        darkMode
          ? 'bg-surface-800/50 border border-surface-700/50 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10'
          : 'bg-white border border-surface-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Spinning ring behind icon */}
      <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-dashed ${metric.ring} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{ animation: 'spin-slow 8s linear infinite' }} />

      <div className={`relative z-10 inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} text-white shadow-lg mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
        <Icon size={24} />
      </div>
      <div className={`relative z-10 text-4xl font-extrabold mb-2 transition-transform duration-300 ${
        done ? 'animate-count-pulse' : ''
      } ${
        darkMode ? 'text-white' : 'text-surface-900'
      }`}>
        {count}{metric.suffix}
      </div>
      <div className={`relative z-10 text-sm font-medium ${
        darkMode ? 'text-surface-200/60' : 'text-surface-500'
      }`}>
        {metric.label}
      </div>
    </div>
  )
}
