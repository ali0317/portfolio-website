import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
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

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${
      darkMode ? 'bg-surface-950 text-surface-100' : 'bg-surface-50 text-surface-900'
    }`}>
      {/* Aurora Gradient Background with Framer Motion */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <AnimatePresence>
          <motion.div
            key={darkMode ? 'dark' : 'light'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Primary Aura */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-30 ${
                darkMode ? 'bg-primary-600' : 'bg-primary-300'
              }`}
            />
            {/* Accent Aura */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -60, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
              className={`absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20 ${
                darkMode ? 'bg-accent-500' : 'bg-accent-400'
              }`}
            />
            {/* Tertiary Aura */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 30, -30, 0],
                y: [0, 30, -30, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
                delay: 5
              }}
              className={`absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full blur-[150px] opacity-10 ${
                darkMode ? 'bg-fuchsia-600' : 'bg-fuchsia-300'
              }`}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          {/* Experience component now includes Skills */}
          <Experience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Metrics darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg backdrop-blur-md cursor-pointer ${
              darkMode
                ? 'bg-primary-600/80 text-white shadow-primary-600/25 border border-primary-500/30'
                : 'bg-primary-500/80 text-white shadow-primary-500/25 border border-primary-400/30'
            }`}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
