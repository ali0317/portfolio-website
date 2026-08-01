import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Metrics from './components/Metrics.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { ArrowUp } from 'lucide-react'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.style.opacity = '1'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    )

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.reveal-section')
      sections.forEach((section) => {
        section.style.opacity = '0'
        observer.observe(section)
      })
    }, 200)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-surface-950 text-surface-100' : 'bg-surface-50 text-surface-900'
    }`}>
      {/* Ambient background — enhanced with morphing blobs and particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Primary morphing blob */}
        <div
          className={`absolute top-[-15%] left-[-8%] w-[650px] h-[650px] blur-[130px] animate-morph-blob ${
            darkMode ? 'bg-primary-600/10' : 'bg-primary-400/10'
          }`}
          style={{ animation: 'morph-blob 18s ease-in-out infinite, pulse-glow 8s ease-in-out infinite' }}
        />
        {/* Accent morphing blob */}
        <div
          className={`absolute bottom-[-15%] right-[-8%] w-[550px] h-[550px] blur-[120px] animate-morph-blob ${
            darkMode ? 'bg-accent-500/8' : 'bg-accent-400/10'
          }`}
          style={{ animation: 'morph-blob 22s ease-in-out infinite 5s, pulse-glow 10s ease-in-out infinite 2s' }}
        />
        {/* Tertiary blob — center-right */}
        <div
          className={`absolute top-[35%] right-[15%] w-[350px] h-[350px] rounded-full blur-[100px] ${
            darkMode ? 'bg-primary-500/5' : 'bg-primary-300/8'
          }`}
          style={{ animation: 'pulse-glow 12s ease-in-out infinite 4s, float 15s ease-in-out infinite' }}
        />
        {/* Small violet blob */}
        <div
          className={`absolute top-[60%] left-[20%] w-[200px] h-[200px] rounded-full blur-[80px] ${
            darkMode ? 'bg-violet-500/5' : 'bg-violet-300/8'
          }`}
          style={{ animation: 'pulse-glow 14s ease-in-out infinite 6s, float-delayed 12s ease-in-out infinite 3s' }}
        />

        {/* Floating micro-particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? 'bg-primary-400/10' : 'bg-primary-500/8'
            }`}
            style={{
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              top: `${10 + i * 11}%`,
              left: `${5 + (i * 13) % 90}%`,
              animation: `float ${7 + i * 1.5}s ease-in-out infinite ${i * 1.1}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          <div className="reveal-section"><Skills darkMode={darkMode} /></div>
          <div className="reveal-section"><Experience darkMode={darkMode} /></div>
          <div className="reveal-section"><Projects darkMode={darkMode} /></div>
          <div className="reveal-section"><Metrics darkMode={darkMode} /></div>
          <div className="reveal-section"><Contact darkMode={darkMode} /></div>
        </main>
        <Footer darkMode={darkMode} />
      </div>

      {/* Scroll to top — enhanced animation */}
      <button
        id="scroll-to-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-500 cursor-pointer ${
          showScrollTop
            ? 'opacity-100 translate-y-0 scale-100 rotate-0'
            : 'opacity-0 translate-y-4 scale-75 rotate-45 pointer-events-none'
        } ${
          darkMode
            ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:scale-110'
            : 'bg-primary-500 hover:bg-primary-400 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-400/40 hover:scale-110'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}
