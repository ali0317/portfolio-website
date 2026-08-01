import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Copy, Check } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons.jsx'

export default function Contact({ darkMode }) {
  const [copied, setCopied] = useState(false)
  const email = 'ali.amirsultan0317@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
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
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl section-line" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${
            darkMode ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'bg-primary-50 text-primary-600 border border-primary-200'
          }`}>
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-surface-900'
          }`}>
            Let's Work Together
          </h2>
          <p className={`max-w-2xl mx-auto ${
            darkMode ? 'text-surface-200/70' : 'text-surface-600'
          }`}>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email card with copy */}
            <div className={`rounded-2xl p-6 ${
              darkMode
                ? 'bg-surface-800/50 border border-surface-700/50'
                : 'bg-white border border-surface-200'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${
                    darkMode ? 'text-surface-200/60' : 'text-surface-500'
                  }`}>Email</p>
                  <p className={`font-semibold text-sm ${
                    darkMode ? 'text-white' : 'text-surface-900'
                  }`}>{email}</p>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  copied
                    ? 'bg-accent-500/10 text-accent-500 border border-accent-500/20'
                    : darkMode
                      ? 'bg-surface-700/50 text-surface-200/70 hover:text-white hover:bg-surface-700 border border-surface-700/30'
                      : 'bg-surface-100 text-surface-600 hover:text-surface-900 hover:bg-surface-200 border border-surface-200'
                }`}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy Email Address'}
              </button>
            </div>

            {/* Phone */}
            <div className={`rounded-2xl p-6 ${
              darkMode
                ? 'bg-surface-800/50 border border-surface-700/50'
                : 'bg-white border border-surface-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${
                    darkMode ? 'text-surface-200/60' : 'text-surface-500'
                  }`}>Phone</p>
                  <p className={`font-semibold text-sm ${
                    darkMode ? 'text-white' : 'text-surface-900'
                  }`}>+92 304 4123 225</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className={`rounded-2xl p-6 ${
              darkMode
                ? 'bg-surface-800/50 border border-surface-700/50'
                : 'bg-white border border-surface-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${
                    darkMode ? 'text-surface-200/60' : 'text-surface-500'
                  }`}>Location</p>
                  <p className={`font-semibold text-sm ${
                    darkMode ? 'text-white' : 'text-surface-900'
                  }`}>Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/Muhammad-ali-39b2741a7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  darkMode
                    ? 'bg-surface-800/50 text-surface-200/70 hover:text-white hover:bg-surface-700/50 border border-surface-700/50'
                    : 'bg-white text-surface-600 hover:text-primary-600 hover:bg-primary-50 border border-surface-200'
                }`}>
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  darkMode
                    ? 'bg-surface-800/50 text-surface-200/70 hover:text-white hover:bg-surface-700/50 border border-surface-700/50'
                    : 'bg-white text-surface-600 hover:text-primary-600 hover:bg-primary-50 border border-surface-200'
                }`}>
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 rounded-2xl p-8 ${
            darkMode
              ? 'bg-surface-800/50 border border-surface-700/50'
              : 'bg-white border border-surface-200'
          }`}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-surface-200/70' : 'text-surface-700'
                  }`}>Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none ${
                      darkMode
                        ? 'bg-surface-900/50 border border-surface-700/50 text-white placeholder-surface-200/30 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20'
                        : 'bg-surface-50 border border-surface-200 text-surface-900 placeholder-surface-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-200'
                    }`}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-surface-200/70' : 'text-surface-700'
                  }`}>Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none ${
                      darkMode
                        ? 'bg-surface-900/50 border border-surface-700/50 text-white placeholder-surface-200/30 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20'
                        : 'bg-surface-50 border border-surface-200 text-surface-900 placeholder-surface-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-200'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-surface-200/70' : 'text-surface-700'
                }`}>Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Project inquiry"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none ${
                    darkMode
                      ? 'bg-surface-900/50 border border-surface-700/50 text-white placeholder-surface-200/30 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20'
                      : 'bg-surface-50 border border-surface-200 text-surface-900 placeholder-surface-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-200'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-surface-200/70' : 'text-surface-700'
                }`}>Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none resize-none ${
                    darkMode
                      ? 'bg-surface-900/50 border border-surface-700/50 text-white placeholder-surface-200/30 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20'
                      : 'bg-surface-50 border border-surface-200 text-surface-900 placeholder-surface-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-200'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 transition-all duration-300 cursor-pointer"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
