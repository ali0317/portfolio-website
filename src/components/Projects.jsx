import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, ShoppingCart, Monitor, Cpu, Globe, BarChart3, ArrowUpRight } from 'lucide-react'

const projectCategories = ['All', 'Enterprise Systems', 'Real-Time Apps', 'E-Commerce & Portals', 'Specialized']

const projects = [
  {
    id: 1,
    title: 'HRMS Platform',
    category: 'Enterprise Systems',
    description: 'Complete HR Management System with attendance tracking, payroll processing, and allowance modules. Features a rule-based payroll engine that automated salary calculations.',
    impact: 'Reduced manual work by 70%',
    tech: ['.NET Core', 'Angular', 'SQL Server', 'Entity Framework'],
    icon: Layers,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'Flight Booking Engine',
    category: 'Specialized',
    description: 'Microservices-based flight ticketing system with international airline API integrations (REST + SOAP), advanced search with multi-city routing, seat classes, and fare rules.',
    impact: 'Integrated 3+ airline APIs',
    tech: ['Microservices', 'REST/SOAP', 'Hangfire', 'Payment Gateway'],
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    title: 'Real-Time Quiz System',
    category: 'Real-Time Apps',
    description: 'Interactive quiz platform with real-time scoring, live leaderboards, and instant feedback using SignalR for bi-directional communication.',
    impact: 'Sub-second latency',
    tech: ['SignalR', '.NET Core', 'Angular', 'WebSockets'],
    icon: Monitor,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 4,
    title: 'Hotel Management System',
    category: 'Enterprise Systems',
    description: 'Full-featured booking engine with check-ins, expense tracking, and room-service workflows. Streamlined operations across multiple departments.',
    impact: 'Reduced booking errors by 30%',
    tech: ['.NET', 'SQL Server', 'Bootstrap', 'jQuery'],
    icon: Layers,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 5,
    title: 'POS with FBR Integration',
    category: 'E-Commerce & Portals',
    description: 'Point of Sale system with GRN, quotations, sales workflows, and FBR invoice reporting. Built-in retry and failure-handling mechanisms.',
    impact: '99% reporting accuracy',
    tech: ['.NET Core', 'SignalR', 'SQL Server', 'FBR API'],
    icon: ShoppingCart,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 6,
    title: 'Inventory & BOM System',
    category: 'Enterprise Systems',
    description: 'Material tracking with Bill of Materials management and real-time cost calculator. Improved inventory visibility across the supply chain.',
    impact: 'Cut reconciliation time by 50%',
    tech: ['.NET', 'ADO.NET', 'SQL Server', 'SSRS'],
    icon: BarChart3,
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    id: 7,
    title: 'Hues by SK (E-Commerce)',
    category: 'E-Commerce & Portals',
    description: 'Full-featured e-commerce portal with product catalog, cart management, order processing, and payment integration for a fashion brand.',
    impact: 'End-to-end e-commerce flow',
    tech: ['Angular', '.NET Core', 'SQL Server', 'Stripe'],
    icon: ShoppingCart,
    gradient: 'from-fuchsia-500 to-pink-600',
  },
  {
    id: 8,
    title: 'Weight Management (IoT)',
    category: 'Specialized',
    description: 'IoT-integrated weight management system connecting physical scales with digital tracking, automated data capture, and analytics dashboards.',
    impact: 'IoT + Cloud integration',
    tech: ['.NET Core', 'IoT', 'SignalR', 'Azure'],
    icon: Cpu,
    gradient: 'from-sky-500 to-blue-600',
  },
]

export default function Projects({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const handleFilter = useCallback((cat) => {
    setActiveFilter(cat)
  }, [])

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            Portfolio
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight ${
            darkMode ? 'text-white' : 'text-surface-900'
          }`}>
            Featured Work
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-surface-300' : 'text-surface-600'
          }`}>
            A selection of enterprise systems, real-time applications, and specialized portals I've architected and delivered.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeFilter === cat
                  ? darkMode ? 'text-surface-900' : 'text-white'
                  : darkMode
                    ? 'text-surface-300 hover:text-white bg-surface-800/50 hover:bg-surface-800 border border-surface-700/50'
                    : 'text-surface-600 hover:text-surface-900 bg-white hover:bg-surface-50 border border-surface-200'
              }`}
            >
              {activeFilter === cat && (
                <motion.div
                  layoutId="activeFilterBubble"
                  className={`absolute inset-0 rounded-full -z-10 shadow-lg ${
                    darkMode ? 'bg-white' : 'bg-surface-900'
                  }`}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  className={`group relative rounded-3xl overflow-hidden backdrop-blur-sm border transition-all duration-300 hover:-translate-y-2 ${
                    darkMode
                      ? 'bg-surface-900/40 border-white/5 hover:border-white/10 hover:bg-surface-900/60 hover:shadow-2xl hover:shadow-primary-500/10'
                      : 'bg-white/60 border-black/5 hover:border-black/10 hover:bg-white hover:shadow-2xl hover:shadow-black/5'
                  }`}
                >
                  {/* Subtle Gradient Glow Background */}
                  <div className={`absolute -inset-px opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${project.gradient} blur-xl`} />

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <Icon size={24} />
                      </div>
                      <a href="#" className={`p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                        darkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 text-surface-900 hover:bg-black/10'
                      }`}>
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                    
                    {/* Category */}
                    <span className={`inline-block mb-3 text-xs font-mono font-semibold uppercase tracking-wider ${
                      darkMode ? 'text-primary-400' : 'text-primary-600'
                    }`}>
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className={`font-display text-2xl font-bold mb-3 tracking-tight ${
                      darkMode ? 'text-white' : 'text-surface-900'
                    }`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-6 flex-grow ${
                      darkMode ? 'text-surface-300' : 'text-surface-600'
                    }`}>
                      {project.description}
                    </p>

                    <div className="mt-auto space-y-5">
                      {/* Impact Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                        darkMode ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20' : 'bg-accent-50 text-accent-700 border border-accent-200'
                      }`}>
                        <BarChart3 size={14} className="group-hover:animate-bounce" />
                        {project.impact}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide ${
                              darkMode
                                ? 'bg-surface-800 text-surface-300 border border-surface-700'
                                : 'bg-surface-100 text-surface-600 border border-surface-200'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
