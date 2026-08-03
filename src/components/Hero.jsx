import { motion } from 'framer-motion'
import { ChevronDown, Mail, Download, ArrowRight, Sparkles } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons.jsx'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
}

export default function Hero({ darkMode }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(${darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-lg backdrop-blur-md border ${
                darkMode ? 'bg-white/5 border-white/10 text-primary-300' : 'bg-black/5 border-black/10 text-primary-600'
              }`}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500" />
              </span>
              <span>Available for new opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className={`font-display text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight ${
              darkMode ? 'text-white' : 'text-surface-900'
            }`}
          >
            Crafting Digital
            <br />
            <span
              className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Experiences.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6">
            <div className={`h-px w-8 sm:w-16 ${darkMode ? 'bg-surface-700' : 'bg-surface-300'}`} />
            <p className={`font-mono text-sm sm:text-base font-semibold tracking-widest uppercase ${
              darkMode ? 'text-primary-400' : 'text-primary-600'
            }`}>
              Muhammad Ali &bull; Software Engineer
            </p>
            <div className={`h-px w-8 sm:w-16 ${darkMode ? 'bg-surface-700' : 'bg-surface-300'}`} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light ${
              darkMode ? 'text-surface-200' : 'text-surface-700'
            }`}
          >
            5+ years of building <span className="font-semibold text-primary-500">enterprise-grade web applications</span> with
            .NET Core, Angular, and Modern Web Technologies. Turning complex business requirements into beautifully crafted solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-xl shadow-primary-600/30 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Sparkles size={20} className="relative z-10" />
              <span className="relative z-10">Explore Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold backdrop-blur-lg border transition-colors ${
                darkMode
                  ? 'text-white border-white/10 bg-white/5 hover:bg-white/10'
                  : 'text-surface-900 border-black/10 bg-black/5 hover:bg-black/10'
              }`}
            >
              <Mail size={20} />
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-5">
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/Muhammad-ali-39b2741a7', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Mail, href: 'mailto:ali.amirsultan0317@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={`p-3.5 rounded-2xl backdrop-blur-md border transition-colors ${
                  darkMode
                    ? 'text-surface-200 border-white/10 bg-white/5 hover:bg-primary-500 hover:border-primary-500 hover:text-white'
                    : 'text-surface-700 border-black/10 bg-black/5 hover:bg-primary-500 hover:border-primary-500 hover:text-white'
                }`}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#skills" onClick={(e) => { e.preventDefault(); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }) }}
          className={`flex flex-col items-center gap-3 group ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}
          aria-label="Scroll to skills section"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-primary-400 transition-colors">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="opacity-70 group-hover:opacity-100" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
