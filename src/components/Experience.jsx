import { useState, useEffect, useRef } from 'react'
import { Briefcase, ChevronDown, MapPin, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Introtech Solutions',
    location: 'Lahore',
    type: 'Full-time',
    period: 'April 2023 – Present',
    current: true,
    highlights: [
      'Developed multiple enterprise modules for workflow automation, document handling, and secure file storage, contributing to improved system stability and smoother user workflows.',
      'Collaborated with a small engineering team to deliver features within tight timelines, supporting more consistent and predictable release cycles.',
      'Introduced Clean Architecture principles and shared coding standards, leading to better code organisation and easier long-term maintenance.',
      'Enhanced backend performance by refining SQL queries and improving API logic, resulting in noticeably faster response times and reduced system load.',
    ],
    tech: ['.NET Core', 'Angular', 'SQL Server', 'Clean Architecture', 'Web API'],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Mehman.PK',
    location: 'Remote',
    type: 'Part-time',
    period: 'Nov 2023 – Sep 2024',
    current: false,
    highlights: [
      'Designed and implemented microservices for flight ticketing, user management, admin panels & booking flows.',
      'Integrated international airline APIs (REST + SOAP) and optimized price/availability modules.',
      'Developed advanced flight search with filters, multi-city routing, seat classes & fare rules.',
      'Implemented payment gateway integrations, webhooks, and transaction logs.',
      'Built Hangfire-based background job system for ticket confirmations, fare updates & monitoring.',
    ],
    tech: ['Microservices', 'REST/SOAP APIs', 'Hangfire', 'Payment Gateways', '.NET Core'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'NKU Technologies',
    location: 'Lahore',
    type: 'Full-time',
    period: 'April 2022 – April 2023',
    current: false,
    highlights: [
      'Designed KPI structures (Year → Month → Week) and integrated ADO.NET for high-speed DB operations.',
      'Built complex scheduling using Quartz.NET (e.g., "2nd Monday every month").',
      'Developed Angular dashboards for real-time KPI tracking.',
    ],
    tech: ['Angular', 'ADO.NET', 'Quartz.NET', 'SQL Server', 'KPI Dashboards'],
  },
  {
    id: 4,
    title: '.NET Developer',
    company: 'Visionplus Solutions',
    location: 'Lahore',
    type: 'Full-time',
    period: 'June 2020 – April 2022',
    current: false,
    highlights: [
      'HRMS – Built attendance tracking, payroll, and allowance modules with rule-based payroll engine that automated salary calculations and reduced manual work by 70%.',
      'Hotel Management – Developed booking engine with check-ins, expenses, and room-service workflows, improving operational efficiency and reducing booking errors by 30%.',
      'Marquee Management – Implemented event scheduling, vendor management, and conflict-detection algorithms, boosting event planning efficiency by 40%.',
      'Inventory & BOM – Designed material tracking, BOM management, and real-time cost calculator, cutting reconciliation time by 50%.',
      'POS with FBR Integration – Delivered GRN, quotations, sales workflows, and FBR invoice reporting with retry and failure-handling, ensuring 99% reporting accuracy.',
      'Accounting System – Built COA upload, vouchers, and ledger reporting modules.',
    ],
    tech: ['.NET', 'C#', 'SQL Server', 'Entity Framework', 'Bootstrap'],
  },
]

export default function Experience({ darkMode }) {
  const [expandedId, setExpandedId] = useState(1)
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl section-line" />

      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${
            darkMode ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'bg-primary-50 text-primary-600 border border-primary-200'
          }`}>
            Career Journey
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-surface-900'
          }`}>
            Work Experience
          </h2>
          <p className={`max-w-2xl mx-auto ${
            darkMode ? 'text-surface-200/70' : 'text-surface-600'
          }`}>
            5+ years of building enterprise solutions across multiple domains
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line — animated gradient */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px overflow-hidden ${
            darkMode ? 'bg-surface-700/30' : 'bg-surface-200/50'
          }`}>
            <div
              className="w-full bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent"
              style={{
                height: inView ? '100%' : '0%',
                transition: 'height 2s ease-out',
              }}
            />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const isExpanded = expandedId === exp.id
              return (
                <div
                  key={exp.id}
                  className={`relative pl-16 sm:pl-20 opacity-0 ${
                    inView ? 'animate-slide-in-left' : ''
                  }`}
                  style={{ animationDelay: `${idx * 150 + 200}ms` }}
                >
                  {/* Timeline dot — animated */}
                  <div className={`absolute left-4 sm:left-6 top-6 w-4 h-4 rounded-full border-[3px] z-10 transition-all duration-500 opacity-0 ${
                    inView ? 'animate-scale-in-bounce' : ''
                  } ${
                    exp.current
                      ? 'bg-primary-500 border-primary-300 shadow-lg shadow-primary-500/30 animate-border-glow'
                      : darkMode
                        ? 'bg-surface-800 border-surface-600'
                        : 'bg-white border-surface-300'
                  }`}
                  style={{ animationDelay: `${idx * 150 + 100}ms` }}
                  />

                  {/* Card */}
                  <div
                    className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                      darkMode
                        ? 'bg-surface-800/50 border border-surface-700/50 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5'
                        : 'bg-white border border-surface-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50'
                    } ${
                      isExpanded && darkMode ? 'border-primary-500/20 shadow-lg shadow-primary-500/5' : ''
                    } ${
                      isExpanded && !darkMode ? 'border-primary-300 shadow-xl shadow-primary-100/50' : ''
                    }`}
                  >
                    {/* Card Header - Clickable */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className={`font-bold text-lg ${
                            darkMode ? 'text-white' : 'text-surface-900'
                          }`}>
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-500/10 text-accent-500 border border-accent-500/20">
                              Current
                            </span>
                          )}
                          {exp.type === 'Part-time' && (
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              darkMode ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-amber-50 text-amber-600 border border-amber-200'
                            }`}>
                              Part-time
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className={`font-semibold ${
                            darkMode ? 'text-primary-400' : 'text-primary-600'
                          }`}>
                            {exp.company}
                          </span>
                          <span className={`flex items-center gap-1 ${
                            darkMode ? 'text-surface-200/50' : 'text-surface-500'
                          }`}>
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                          <span className={`flex items-center gap-1 ${
                            darkMode ? 'text-surface-200/50' : 'text-surface-500'
                          }`}>
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`mt-1 flex-shrink-0 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        } ${
                          darkMode ? 'text-surface-200/50' : 'text-surface-400'
                        }`}
                      />
                    </button>

                    {/* Expandable Content — enhanced transition */}
                    <div className={`overflow-hidden transition-all ease-in-out ${
                      isExpanded ? 'max-h-[1000px] opacity-100 duration-500' : 'max-h-0 opacity-0 duration-300'
                    }`}>
                      <div className={`px-6 pb-6 border-t ${
                        darkMode ? 'border-surface-700/50' : 'border-surface-100'
                      }`}>
                        <ul className="mt-4 space-y-3">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                              <span className={`text-sm leading-relaxed ${
                                darkMode ? 'text-surface-200/70' : 'text-surface-600'
                              }`}>
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mt-5">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                                darkMode
                                  ? 'bg-primary-500/10 text-primary-300 border border-primary-500/20'
                                  : 'bg-primary-50 text-primary-600 border border-primary-200'
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Education */}
          <div className="relative pl-16 sm:pl-20 mt-6">
            <div className={`absolute left-4 sm:left-6 top-6 w-4 h-4 rounded-full border-[3px] z-10 ${
              darkMode ? 'bg-accent-500 border-accent-300' : 'bg-accent-500 border-accent-300'
            }`} />
            <div className={`rounded-2xl p-6 ${
              darkMode
                ? 'bg-surface-800/30 border border-surface-700/30'
                : 'bg-accent-50/50 border border-accent-200/50'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-semibold uppercase tracking-widest ${
                  darkMode ? 'text-accent-400' : 'text-accent-600'
                }`}>Education</span>
              </div>
              <h3 className={`font-bold text-lg ${
                darkMode ? 'text-white' : 'text-surface-900'
              }`}>Bachelor's in Computer Science</h3>
              <p className={`text-sm ${
                darkMode ? 'text-surface-200/60' : 'text-surface-500'
              }`}>Superior University, Lahore · Graduated 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
