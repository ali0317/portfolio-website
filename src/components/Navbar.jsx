import { useState, useEffect } from 'react'
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
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-surface-950/80 shadow-lg shadow-black/20'
            : 'bg-white/80 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(16px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm transform group-hover:scale-110 transition-transform duration-300">
                MA
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <span className={`font-bold text-lg tracking-tight ${
              darkMode ? 'text-white' : 'text-surface-900'
            }`}>
              Muhammad<span className="text-primary-500">.</span>Ali
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href
                    ? darkMode
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-primary-600 bg-primary-50'
                    : darkMode
                      ? 'text-surface-200 hover:text-white hover:bg-white/5'
                      : 'text-surface-700 hover:text-surface-900 hover:bg-surface-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                darkMode
                  ? 'text-yellow-400 hover:bg-yellow-400/10'
                  : 'text-surface-600 hover:bg-surface-200'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              className={`md:hidden p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                darkMode
                  ? 'text-surface-200 hover:bg-white/10'
                  : 'text-surface-700 hover:bg-surface-200'
              }`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-4 pb-4 space-y-1 ${
          darkMode ? 'bg-surface-950/95' : 'bg-white/95'
        }`} style={{ backdropFilter: 'blur(16px)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeSection === link.href
                  ? darkMode
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-primary-600 bg-primary-50'
                  : darkMode
                    ? 'text-surface-200 hover:bg-white/5'
                    : 'text-surface-700 hover:bg-surface-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
