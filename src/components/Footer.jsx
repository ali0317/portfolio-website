import { Heart, Mail } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons.jsx'

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`py-8 border-t ${
      darkMode ? 'border-surface-800 bg-surface-950' : 'border-surface-200 bg-surface-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm flex items-center gap-1.5 ${
            darkMode ? 'text-surface-200/50' : 'text-surface-500'
          }`}>
            &copy; {currentYear} Muhammad Ali. Built with
            <Heart size={14} className="text-red-500 fill-red-500" />
            and React
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/Muhammad-ali-39b2741a7', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Mail, href: 'mailto:ali.amirsultan0317@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? 'text-surface-200/40 hover:text-white hover:bg-white/5'
                    : 'text-surface-400 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
