import { useEffect, useState } from 'react'
import { ChevronDown, Mail, Download, ArrowRight, Sparkles } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons.jsx'

export default function Hero({ darkMode }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Trigger stagger entrance after mount
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large morphing blob */}
        <div
          className={`absolute top-[15%] right-[10%] w-48 h-48 opacity-[0.06] animate-morph-blob ${
            darkMode ? 'bg-primary-500' : 'bg-primary-400'
          }`}
          style={{ animation: 'morph-blob 15s ease-in-out infinite, float 8s ease-in-out infinite' }}
        />
        {/* Spinning ring */}
        <div
          className="absolute bottom-[25%] left-[8%] w-32 h-32 rounded-full border border-primary-500/10 animate-spin-slow"
        />
        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`particle w-1.5 h-1.5 ${
              darkMode ? 'bg-primary-400/20' : 'bg-primary-500/15'
            }`}
            style={{
              top: `${15 + i * 14}%`,
              left: `${5 + i * 17}%`,
              animation: `float ${5 + i * 1.5}s ease-in-out infinite ${i * 0.8}s`,
            }}
          />
        ))}
        {/* Accent dots on right */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`r${i}`}
            className={`particle w-1 h-1 ${
              darkMode ? 'bg-accent-400/20' : 'bg-accent-500/15'
            }`}
            style={{
              top: `${25 + i * 18}%`,
              right: `${8 + i * 10}%`,
              animation: `float-delayed ${6 + i * 1.2}s ease-in-out infinite ${i * 1.2}s`,
            }}
          />
        ))}
        {/* Decorative line */}
        <div className="absolute top-[45%] left-0 w-full h-px opacity-[0.04]">
          <div className={`h-full ${darkMode ? 'bg-primary-500' : 'bg-primary-400'}`}
            style={{ animation: 'draw-line 2s ease-out 1s forwards', width: 0 }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status badge — stagger 0 */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium opacity-0 ${
              loaded ? 'animate-scale-in-bounce stagger-0' : ''
            }`}
            style={{
              background: darkMode ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.08)',
              border: `1px solid ${darkMode ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.15)'}`,
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500" />
            </span>
            <span className={darkMode ? 'text-primary-300' : 'text-primary-600'}>Available for new opportunities</span>
          </div>

          {/* Name — stagger 1 */}
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 opacity-0 ${
              loaded ? 'animate-fade-in-up stagger-1' : ''
            }`}
          >
            <span className={darkMode ? 'text-white' : 'text-surface-900'}>Hi, I'm </span>
            <span
              className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Muhammad Ali
            </span>
          </h1>

          {/* Subtitle with typing cursor — stagger 2 */}
          <div
            className={`flex items-center justify-center gap-3 mb-6 opacity-0 ${
              loaded ? 'animate-fade-in-up stagger-2' : ''
            }`}
          >
            <div className={`h-px w-12 animate-draw-line ${darkMode ? 'bg-surface-700' : 'bg-surface-300'}`} />
            <p className={`text-lg sm:text-xl font-semibold tracking-wide uppercase typing-cursor ${
              darkMode ? 'text-primary-400' : 'text-primary-600'
            }`}>
              Full Stack Software Engineer
            </p>
            <div className={`h-px w-12 animate-draw-line ${darkMode ? 'bg-surface-700' : 'bg-surface-300'}`} />
          </div>

          {/* Description — stagger 3 */}
          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed opacity-0 ${
              loaded ? 'animate-fade-in-up stagger-3' : ''
            } ${
              darkMode ? 'text-surface-200/80' : 'text-surface-700'
            }`}
          >
            5+ years of crafting <span className="font-semibold text-primary-400">enterprise-grade web applications</span> with
            .NET Core, Angular, Microservices & Real-Time Systems.
            Turning complex business requirements into scalable, performant solutions.
          </p>

          {/* CTA Buttons — stagger 4 */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 ${
              loaded ? 'animate-fade-in-up stagger-4' : ''
            }`}
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Sparkles size={18} className="relative z-10" />
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] ${
                darkMode
                  ? 'text-surface-200 border border-surface-700 hover:border-primary-500/50 hover:text-white hover:bg-white/5'
                  : 'text-surface-700 border border-surface-300 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] ${
                darkMode
                  ? 'text-accent-400 border border-accent-500/30 hover:border-accent-500/60 hover:bg-accent-500/10'
                  : 'text-accent-600 border border-accent-500/30 hover:border-accent-500/60 hover:bg-accent-50'
              }`}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links — stagger 5 */}
          <div
            className={`flex items-center justify-center gap-4 opacity-0 ${
              loaded ? 'animate-fade-in-up stagger-5' : ''
            }`}
          >
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/Muhammad-ali-39b2741a7', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Mail, href: 'mailto:ali.amirsultan0317@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={`p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 ${
                  darkMode
                    ? 'text-surface-200/60 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-primary-500/10'
                    : 'text-surface-500 hover:text-primary-600 hover:bg-primary-50 hover:shadow-lg hover:shadow-primary-200/50'
                }`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — stagger 6 */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 ${
        loaded ? 'animate-fade-in-up stagger-7' : ''
      }`}>
        <a href="#skills" onClick={(e) => { e.preventDefault(); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }) }}
          className={`flex flex-col items-center gap-2 group ${darkMode ? 'text-surface-200/40' : 'text-surface-400'}`}
          aria-label="Scroll to skills section"
        >
          <span className="text-xs font-medium uppercase tracking-widest group-hover:text-primary-400 transition-colors">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
