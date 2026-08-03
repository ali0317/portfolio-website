import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, ChevronDown, MapPin, Calendar, Code2, Server, Database, Cloud, TestTube, Radio, Workflow, Users, Sparkles } from 'lucide-react'

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

const categories = [
  { id: 'backend', label: 'Backend & Architecture', icon: Server, color: 'from-blue-500 to-indigo-600', skills: ['C#', '.NET Core', 'ASP.NET', 'Web API', 'Entity Framework Core', 'ADO.NET', 'Microservices', 'Clean Architecture', 'Quartz.NET', 'Design Patterns', 'OOP', 'Auth'] },
  { id: 'frontend', label: 'Frontend & Web', icon: Code2, color: 'from-emerald-500 to-teal-600', skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Components'] },
  { id: 'databases', label: 'Databases', icon: Database, color: 'from-amber-500 to-orange-600', skills: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Performance Tuning', 'Data Modeling'] },
  { id: 'devops', label: 'DevOps & Cloud', icon: Cloud, color: 'from-cyan-500 to-blue-600', skills: ['Azure', 'Docker', 'IIS', 'Git', 'Version Control'] },
  { id: 'testing', label: 'Testing & Quality', icon: TestTube, color: 'from-rose-500 to-pink-600', skills: ['Unit Testing', 'Software Testing', 'Debugging', 'Troubleshooting', 'Code Reviews'] },
  { id: 'realtime', label: 'Real-Time & APIs', icon: Radio, color: 'from-violet-500 to-purple-600', skills: ['SignalR', 'WebSockets', 'REST APIs', 'SOAP APIs', 'Integration', 'Webhooks'] },
]

export default function Experience({ darkMode }) {
  const [expandedId, setExpandedId] = useState(1)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-4 border ${
            darkMode ? 'bg-primary-500/10 text-primary-400 border-primary-500/20' : 'bg-primary-50 text-primary-600 border-primary-200'
          }`}>
            Journey & Skills
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight ${
            darkMode ? 'text-white' : 'text-surface-900'
          }`}>
            Professional Experience
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-surface-300' : 'text-surface-600'
          }`}>
            5+ years of building enterprise solutions across multiple domains, powered by a robust technical toolkit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8">
          
          {/* Timeline (Left Column) */}
          <div className="xl:col-span-7">
            <h3 className={`font-display text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
              <Briefcase className={darkMode ? 'text-primary-400' : 'text-primary-600'} /> 
              Work History
            </h3>
            
            <div className="relative pl-6 sm:pl-10">
              {/* Timeline Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`absolute left-[11px] sm:left-[19px] top-4 bottom-0 w-1 rounded-full ${
                  darkMode ? 'bg-gradient-to-b from-primary-500/50 via-accent-500/20 to-transparent' : 'bg-gradient-to-b from-primary-400/50 via-accent-400/20 to-transparent'
                }`}
              />

              <div className="space-y-6">
                {experiences.map((exp, idx) => {
                  const isExpanded = expandedId === exp.id
                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative"
                    >
                      {/* Dot */}
                      <div className={`absolute -left-6 sm:-left-10 top-6 w-5 h-5 rounded-full border-4 z-10 flex items-center justify-center ${
                        exp.current
                          ? 'bg-primary-500 border-primary-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                          : darkMode ? 'bg-surface-800 border-surface-600' : 'bg-white border-surface-300'
                      }`}>
                        {exp.current && <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />}
                      </div>

                      {/* Card */}
                      <div
                        className={`rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 border ${
                          darkMode
                            ? 'bg-surface-800/40 border-white/5 hover:border-white/10 hover:bg-surface-800/60'
                            : 'bg-white/60 border-black/5 hover:border-black/10 hover:bg-white'
                        } ${
                          isExpanded && darkMode ? 'border-primary-500/30 shadow-lg shadow-primary-500/10 bg-surface-800/60' : ''
                        } ${
                          isExpanded && !darkMode ? 'border-primary-300 shadow-xl shadow-primary-500/10 bg-white' : ''
                        }`}
                      >
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h4 className={`font-display text-xl font-bold ${
                                darkMode ? 'text-white' : 'text-surface-900'
                              }`}>
                                {exp.title}
                              </h4>
                              {exp.current && (
                                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-sm shadow-primary-500/20">
                                  Current
                                </span>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                              <span className={darkMode ? 'text-primary-400' : 'text-primary-600'}>
                                {exp.company}
                              </span>
                              <span className={`flex items-center gap-1.5 ${
                                darkMode ? 'text-surface-400' : 'text-surface-500'
                              }`}>
                                <Calendar size={14} />
                                {exp.period}
                              </span>
                              <span className={`flex items-center gap-1.5 ${
                                darkMode ? 'text-surface-400' : 'text-surface-500'
                              }`}>
                                <MapPin size={14} />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`mt-1 flex-shrink-0 p-1.5 rounded-full ${
                              darkMode ? 'bg-white/5 text-surface-300' : 'bg-black/5 text-surface-500'
                            }`}
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className={`px-6 pb-6 border-t ${
                                darkMode ? 'border-white/5' : 'border-black/5'
                              }`}>
                                <ul className="mt-5 space-y-3">
                                  {exp.highlights.map((h, i) => (
                                    <motion.li 
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 + 0.2 }}
                                      key={i} 
                                      className="flex items-start gap-3"
                                    >
                                      <Sparkles size={14} className={`mt-1 flex-shrink-0 ${darkMode ? 'text-primary-400' : 'text-primary-500'}`} />
                                      <span className={`text-sm leading-relaxed ${
                                        darkMode ? 'text-surface-300' : 'text-surface-600'
                                      }`}>
                                        {h}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-6">
                                  {exp.tech.map((t) => (
                                    <span
                                      key={t}
                                      className={`px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wide ${
                                        darkMode
                                          ? 'bg-surface-900/50 text-surface-300 border border-white/5'
                                          : 'bg-surface-100 text-surface-700 border border-black/5'
                                      }`}
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Education Box */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative mt-8"
              >
                <div className={`absolute -left-6 sm:-left-10 top-6 w-5 h-5 rounded-full border-4 z-10 flex items-center justify-center ${
                  darkMode ? 'bg-accent-500 border-accent-300' : 'bg-accent-500 border-accent-300'
                }`} />
                <div className={`rounded-2xl p-6 backdrop-blur-md border ${
                  darkMode ? 'bg-accent-900/20 border-accent-500/20' : 'bg-accent-50/50 border-accent-200/50'
                }`}>
                  <span className={`text-xs font-mono font-bold uppercase tracking-widest block mb-2 ${
                    darkMode ? 'text-accent-400' : 'text-accent-600'
                  }`}>Education</span>
                  <h4 className={`font-display font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                    Bachelor's in Computer Science
                  </h4>
                  <p className={`text-sm font-medium ${darkMode ? 'text-surface-400' : 'text-surface-600'}`}>
                    Superior University, Lahore · Graduated 2022
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Skills Bento Grid (Right Column) */}
          <div className="xl:col-span-5">
            <h3 className={`font-display text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
              <Code2 className={darkMode ? 'text-accent-400' : 'text-accent-600'} />
              Technical Arsenal
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              {categories.map((cat, idx) => {
                const Icon = cat.icon
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`group relative rounded-2xl p-6 overflow-hidden backdrop-blur-sm border transition-all hover:-translate-y-1 ${
                      darkMode
                        ? 'bg-surface-900/40 border-white/5 hover:border-white/10 hover:shadow-lg hover:shadow-primary-500/5'
                        : 'bg-white/60 border-black/5 hover:border-black/10 hover:shadow-lg hover:shadow-primary-500/5'
                    }`}
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cat.color} opacity-70`} />
                    
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-md`}>
                        <Icon size={18} />
                      </div>
                      <h4 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                        {cat.label}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 relative z-10">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                            darkMode
                              ? 'bg-surface-800 text-surface-300 group-hover:bg-surface-700'
                              : 'bg-surface-100 text-surface-600 group-hover:bg-surface-200'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
