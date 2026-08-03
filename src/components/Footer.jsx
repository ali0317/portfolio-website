import { Heart, Mail, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons.jsx'

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`relative overflow-hidden pt-16 pb-8 border-t ${
      darkMode ? 'border-white/5 bg-surface-950' : 'border-black/5 bg-surface-50'
    }`}>
      {/* Background elements */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 rounded-full blur-[120px] opacity-20 pointer-events-none ${darkMode ? 'bg-primary-900' : 'bg-primary-200'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h3 className={`font-display text-2xl font-black tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
              M. Ali
            </h3>
            <p className={`text-sm font-medium ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
              Building digital experiences with purpose and precision.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/Muhammad-ali-39b2741a7', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Mail, href: 'mailto:ali.amirsultan0317@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={`group p-3 rounded-xl transition-colors duration-300 backdrop-blur-sm border ${
                  darkMode
                    ? 'bg-surface-900/50 text-surface-400 hover:text-white hover:bg-surface-800 border-white/5 hover:border-white/20'
                    : 'bg-white/50 text-surface-500 hover:text-primary-600 hover:bg-white border-black/5 hover:border-black/10 hover:shadow-sm'
                }`}
              >
                <Icon size={20} className="transition-transform group-hover:scale-110" />
              </motion.a>
            ))}
          </div>

        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? 'border-white/5' : 'border-black/5'
        }`}>
          <p className={`text-sm font-medium flex items-center gap-1.5 ${
            darkMode ? 'text-surface-500' : 'text-surface-500'
          }`}>
            &copy; {currentYear} Muhammad Ali. Built with
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            and React
          </p>

          <a href="#hero" className={`text-xs font-bold uppercase tracking-widest flex items-center gap-1 transition-colors hover:text-primary-500 ${
            darkMode ? 'text-surface-600' : 'text-surface-400'
          }`}>
            Back to Top <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
