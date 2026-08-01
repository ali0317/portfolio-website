import { useState, useCallback } from 'react'
import { Code2, Server, Database, Cloud, TestTube, Radio, Workflow, Users } from 'lucide-react'

const categories = [
  {
    id: 'backend',
    label: 'Backend & Architecture',
    icon: Server,
    color: 'from-blue-500 to-indigo-600',
    skills: ['C#', '.NET Core', 'ASP.NET', 'Web API', 'Entity Framework Core', 'ADO.NET', 'Microservices', 'Clean Architecture', 'Quartz.NET', 'Design Patterns', 'OOP', 'Authentication & Authorization'],
  },
  {
    id: 'frontend',
    label: 'Frontend & Web',
    icon: Code2,
    color: 'from-emerald-500 to-teal-600',
    skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Component-Based Development'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    color: 'from-amber-500 to-orange-600',
    skills: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Performance Tuning', 'Data Modeling'],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-600',
    skills: ['Azure', 'Docker', 'IIS', 'Git', 'Version Control'],
  },
  {
    id: 'testing',
    label: 'Testing & Quality',
    icon: TestTube,
    color: 'from-rose-500 to-pink-600',
    skills: ['Unit Testing', 'Software Testing', 'Debugging', 'Troubleshooting', 'Code Reviews', 'Continuous Improvement'],
  },
  {
    id: 'realtime',
    label: 'Real-Time & APIs',
    icon: Radio,
    color: 'from-violet-500 to-purple-600',
    skills: ['SignalR', 'WebSockets', 'REST APIs', 'SOAP APIs', 'System Integration', 'Webhooks'],
  },
  {
    id: 'practices',
    label: 'Methodologies',
    icon: Workflow,
    color: 'from-fuchsia-500 to-pink-600',
    skills: ['Agile', 'Scrum', 'SDLC', 'Technical Documentation', 'Best Practices'],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    icon: Users,
    color: 'from-sky-500 to-blue-600',
    skills: ['Communication', 'Teamwork', 'Problem Solving', 'Analytical Thinking', 'Technical Writing'],
  },
]

export default function Skills({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [animKey, setAnimKey] = useState(0)

  const handleFilter = useCallback((id) => {
    setActiveCategory(id)
    setAnimKey((k) => k + 1) // Force re-render for stagger animation
  }, [])

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter((c) => c.id === activeCategory)

  return (
    <section id="skills" className="py-24 relative">
      {/* Section divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl section-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${
            darkMode ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'bg-primary-50 text-primary-600 border border-primary-200'
          }`}>
            Technical Expertise
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-surface-900'
          }`}>
            Skills & Technologies
          </h2>
          <p className={`max-w-2xl mx-auto ${
            darkMode ? 'text-surface-200/70' : 'text-surface-600'
          }`}>
            A comprehensive toolkit spanning the full software development lifecycle
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => handleFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 ${
              activeCategory === 'all'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105'
                : darkMode
                  ? 'text-surface-200/70 hover:text-white hover:bg-white/5 border border-surface-700/50'
                  : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100 border border-surface-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeCategory === cat.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105'
                  : darkMode
                    ? 'text-surface-200/70 hover:text-white hover:bg-white/5 border border-surface-700/50'
                    : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100 border border-surface-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div key={animKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                className={`group card-tilt card-glow-overlay rounded-2xl p-6 opacity-0 animate-scale-in ${
                  darkMode
                    ? 'bg-surface-800/50 border border-surface-700/50 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10'
                    : 'bg-white border border-surface-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50'
                }`}
                style={{ animationDelay: `${catIdx * 100}ms` }}
              >
                {/* Gradient bar top */}
                <div className={`absolute top-0 left-0 right-0 h-1 gradient-bar-grow rounded-t-2xl bg-gradient-to-r ${cat.color} opacity-60`} />

                {/* Category header */}
                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={20} />
                  </div>
                  <h3 className={`font-semibold text-sm ${
                    darkMode ? 'text-white' : 'text-surface-900'
                  }`}>
                    {cat.label}
                  </h3>
                </div>

                {/* Skills pills with stagger pop animation */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIdx) => (
                    <span
                      key={skill}
                      className={`skill-pill px-3 py-1.5 rounded-lg text-xs font-medium cursor-default opacity-0 animate-skill-pop ${
                        darkMode
                          ? 'bg-surface-700/50 text-surface-200/80 hover:bg-primary-500/15 hover:text-primary-300 border border-surface-700/30'
                          : 'bg-surface-100 text-surface-700 hover:bg-primary-50 hover:text-primary-600 border border-surface-200/50'
                      }`}
                      style={{ animationDelay: `${catIdx * 100 + skillIdx * 50 + 200}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
