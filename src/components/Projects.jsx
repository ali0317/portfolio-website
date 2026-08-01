import { useState, useCallback } from 'react'
import { ExternalLink, Layers, ShoppingCart, Monitor, Cpu, Globe, BarChart3 } from 'lucide-react'

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
  const [animKey, setAnimKey] = useState(0)

  const handleFilter = useCallback((cat) => {
    setActiveFilter(cat)
    setAnimKey((k) => k + 1)
  }, [])

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl section-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${
            darkMode ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'bg-primary-50 text-primary-600 border border-primary-200'
          }`}>
            Portfolio
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-surface-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`max-w-2xl mx-auto ${
            darkMode ? 'text-surface-200/70' : 'text-surface-600'
          }`}>
            A selection of enterprise systems and applications I've designed and built
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeFilter === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105'
                  : darkMode
                    ? 'text-surface-200/70 hover:text-white hover:bg-white/5 border border-surface-700/50'
                    : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100 border border-surface-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div key={animKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className={`group card-tilt card-glow-overlay rounded-2xl overflow-hidden opacity-0 animate-scale-in ${
                  darkMode
                    ? 'bg-surface-800/50 border border-surface-700/50 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10'
                    : 'bg-white border border-surface-200 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-100/50'
                }`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Card Top Gradient Bar — grows on hover */}
                <div className={`h-1 gradient-bar-grow bg-gradient-to-r ${project.gradient}`} />

                <div className="relative z-10 p-6">
                  {/* Icon + Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon size={22} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 group-hover:scale-105 ${
                      darkMode ? 'bg-surface-700/50 text-surface-200/60' : 'bg-surface-100 text-surface-500'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white group-hover:text-primary-300' : 'text-surface-900 group-hover:text-primary-600'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-surface-200/60' : 'text-surface-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Impact Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold mb-4 transition-all duration-300 group-hover:scale-105 ${
                    darkMode ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20 group-hover:bg-accent-500/20' : 'bg-accent-50 text-accent-600 border border-accent-200 group-hover:bg-accent-100'
                  }`}>
                    <BarChart3 size={12} className="group-hover:animate-bounce" />
                    {project.impact}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`skill-pill px-2 py-1 rounded-md text-[11px] font-medium ${
                          darkMode
                            ? 'bg-surface-700/50 text-surface-200/70'
                            : 'bg-surface-100 text-surface-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
