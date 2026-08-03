import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      // Determine active section
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-surface-950/70 border-b border-white/5'
            : 'bg-white/70 border-b border-black/5'
          : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-24'
        }`}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }} className="flex items-center gap-3 group">
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-sm"
              >
                MA
              </motion.div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <span className={`font-display font-bold text-xl tracking-tight ${
              darkMode ? 'text-white' : 'text-surface-900'
            }`}>
              Muhammad<span className="text-primary-500">.</span>Ali
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeSection === link.href
                    ? darkMode ? 'text-white' : 'text-primary-600'
                    : darkMode ? 'text-surface-300 hover:text-white' : 'text-surface-600 hover:text-surface-900'
                }`}
              >
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      darkMode ? 'bg-white/10' : 'bg-primary-50'
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="theme-toggle-btn"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2.5 rounded-full transition-colors duration-200 cursor-pointer ${
                darkMode
                  ? 'text-yellow-400 hover:bg-white/10'
                  : 'text-surface-600 hover:bg-surface-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              className={`md:hidden p-2.5 rounded-full transition-colors duration-200 cursor-pointer ${
                darkMode
                  ? 'text-surface-200 hover:bg-white/10'
                  : 'text-surface-700 hover:bg-surface-100'
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className={`px-4 py-4 space-y-1 ${
              darkMode ? 'bg-surface-950/95' : 'bg-white/95'
            }`} style={{ backdropFilter: 'blur(20px)' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeSection === link.href
                      ? darkMode
                        ? 'text-white bg-white/10'
                        : 'text-primary-600 bg-primary-50'
                      : darkMode
                        ? 'text-surface-300 hover:bg-white/5'
                        : 'text-surface-700 hover:bg-surface-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
