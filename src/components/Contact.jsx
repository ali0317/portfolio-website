import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Copy, Check } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons.jsx'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
}

export default function Contact({ darkMode }) {
  const [copied, setCopied] = useState(false)
  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false)
  const email = 'ali.amirsultan0317@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className={`absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none ${darkMode ? 'bg-primary-600' : 'bg-primary-300'}`} />
      <div className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none ${darkMode ? 'bg-accent-600' : 'bg-accent-300'}`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-4 border ${
            darkMode ? 'bg-primary-500/10 text-primary-400 border-primary-500/20' : 'bg-primary-50 text-primary-600 border-primary-200'
          }`}>
            Get In Touch
          </span>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight ${
            darkMode ? 'text-white' : 'text-surface-900'
          }`}>
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Collaborate</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-surface-300' : 'text-surface-600'
          }`}>
            Have an exciting project or opportunity in mind? I'm always open to discussing new ideas and ventures.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants}>
              {/* Email card with copy */}
              <div className={`group rounded-3xl p-8 backdrop-blur-md border transition-all duration-300 ${
                darkMode
                  ? 'bg-surface-800/40 border-white/5 hover:bg-surface-800/60 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10'
                  : 'bg-white/60 border-black/5 hover:bg-white hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className={`text-xs font-mono font-bold uppercase tracking-widest ${
                      darkMode ? 'text-surface-400' : 'text-surface-500'
                    }`}>Email</p>
                    <p className={`font-bold text-lg mt-0.5 ${
                      darkMode ? 'text-white' : 'text-surface-900'
                    }`}>{email}</p>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                    copied
                      ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                      : darkMode
                        ? 'bg-white/5 text-surface-200 hover:text-white hover:bg-white/10 border border-white/5'
                        : 'bg-surface-100 text-surface-700 hover:text-primary-700 hover:bg-primary-50 border border-surface-200'
                  }`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Phone */}
              <div className={`group rounded-2xl p-6 backdrop-blur-sm border transition-all duration-300 ${
                darkMode
                  ? 'bg-surface-800/30 border-white/5 hover:border-accent-500/30 hover:bg-surface-800/50'
                  : 'bg-white/50 border-black/5 hover:border-accent-300 hover:bg-white'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-md group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-mono font-bold uppercase tracking-widest ${
                      darkMode ? 'text-surface-400' : 'text-surface-500'
                    }`}>Phone</p>
                    <p className={`font-bold text-base mt-0.5 ${
                      darkMode ? 'text-white' : 'text-surface-900'
                    }`}>+92 304 4123 225</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className={`group rounded-2xl p-6 backdrop-blur-sm border transition-all duration-300 ${
                darkMode
                  ? 'bg-surface-800/30 border-white/5 hover:border-violet-500/30 hover:bg-surface-800/50'
                  : 'bg-white/50 border-black/5 hover:border-violet-300 hover:bg-white'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-mono font-bold uppercase tracking-widest ${
                      darkMode ? 'text-surface-400' : 'text-surface-500'
                    }`}>Location</p>
                    <p className={`font-bold text-base mt-0.5 ${
                      darkMode ? 'text-white' : 'text-surface-900'
                    }`}>Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <a href="https://linkedin.com/in/Muhammad-ali-39b2741a7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold transition-all duration-300 backdrop-blur-md border hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-surface-800/40 text-surface-200 hover:text-white hover:bg-surface-700/60 border-white/5 hover:border-[#0A66C2]/50 hover:shadow-lg hover:shadow-[#0A66C2]/20'
                    : 'bg-white/60 text-surface-600 hover:text-[#0A66C2] hover:bg-white border-black/5 hover:border-[#0A66C2]/30 hover:shadow-lg'
                }`}>
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold transition-all duration-300 backdrop-blur-md border hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-surface-800/40 text-surface-200 hover:text-white hover:bg-surface-700/60 border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-white/5'
                    : 'bg-white/60 text-surface-600 hover:text-black hover:bg-white border-black/5 hover:border-black/20 hover:shadow-lg'
                }`}>
                <Github size={20} /> GitHub
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className={`relative rounded-3xl p-1 overflow-hidden h-full ${
              darkMode ? 'bg-surface-800/50 backdrop-blur-xl border border-white/5' : 'bg-white/80 backdrop-blur-xl border border-surface-200'
            }`}>
              {/* Form Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 ${darkMode ? 'opacity-100' : 'opacity-50'}`} />

              <div className={`relative h-full rounded-[20px] p-8 sm:p-10 ${
                darkMode ? 'bg-surface-900/50' : 'bg-white/50'
              }`}>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6 flex flex-col h-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className={`block text-xs font-mono font-bold uppercase tracking-widest mb-2 ${
                        darkMode ? 'text-surface-400' : 'text-surface-500'
                      }`}>Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 outline-none backdrop-blur-sm ${
                          darkMode
                            ? 'bg-surface-800/50 border-2 border-white/5 text-white placeholder-surface-500 focus:border-primary-500/50 focus:bg-surface-800'
                            : 'bg-surface-50/50 border-2 border-surface-200 text-surface-900 placeholder-surface-400 focus:border-primary-400 focus:bg-white'
                        }`}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={`block text-xs font-mono font-bold uppercase tracking-widest mb-2 ${
                        darkMode ? 'text-surface-400' : 'text-surface-500'
                      }`}>Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 outline-none backdrop-blur-sm ${
                          darkMode
                            ? 'bg-surface-800/50 border-2 border-white/5 text-white placeholder-surface-500 focus:border-primary-500/50 focus:bg-surface-800'
                            : 'bg-surface-50/50 border-2 border-surface-200 text-surface-900 placeholder-surface-400 focus:border-primary-400 focus:bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className={`block text-xs font-mono font-bold uppercase tracking-widest mb-2 ${
                      darkMode ? 'text-surface-400' : 'text-surface-500'
                    }`}>Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="How can I help you?"
                      className={`w-full px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 outline-none backdrop-blur-sm ${
                        darkMode
                          ? 'bg-surface-800/50 border-2 border-white/5 text-white placeholder-surface-500 focus:border-primary-500/50 focus:bg-surface-800'
                          : 'bg-surface-50/50 border-2 border-surface-200 text-surface-900 placeholder-surface-400 focus:border-primary-400 focus:bg-white'
                      }`}
                    />
                  </div>

                  <div className="flex-grow flex flex-col">
                    <label htmlFor="contact-message" className={`block text-xs font-mono font-bold uppercase tracking-widest mb-2 ${
                      darkMode ? 'text-surface-400' : 'text-surface-500'
                    }`}>Message</label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell me about your project..."
                      className={`w-full flex-grow min-h-[150px] px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 outline-none resize-none backdrop-blur-sm ${
                        darkMode
                          ? 'bg-surface-800/50 border-2 border-white/5 text-white placeholder-surface-500 focus:border-primary-500/50 focus:bg-surface-800'
                          : 'bg-surface-50/50 border-2 border-surface-200 text-surface-900 placeholder-surface-400 focus:border-primary-400 focus:bg-white'
                      }`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    onHoverStart={() => setIsHoveringSubmit(true)}
                    onHoverEnd={() => setIsHoveringSubmit(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white relative overflow-hidden transition-all duration-300 cursor-pointer shadow-lg ${
                      darkMode 
                        ? 'bg-primary-600 shadow-primary-600/25' 
                        : 'bg-primary-500 shadow-primary-500/30'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      animate={{ x: isHoveringSubmit ? 5 : 0 }}
                      className="relative z-10 flex items-center gap-2"
                    >
                      <span className="text-base tracking-wide">Send Message</span>
                      <Send size={18} />
                    </motion.div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
