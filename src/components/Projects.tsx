import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Terminal, Brain, BarChart2, Shield } from 'lucide-react'

// Custom SVG Github Icon
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  github: string
  live: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DevFlow Hub',
    description: 'A developer collaboration and community dashboard allowing code sharing, Q&A, and project feedback loops.',
    tags: ['Next.js', 'React', 'MongoDB', 'TailwindCSS'],
    category: 'Full-Stack',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: Terminal,
    gradient: 'from-blue-600/20 to-indigo-600/20 border-blue-500/20',
  },
  {
    id: 2,
    title: 'NeuroScale AI',
    description: 'An AI-powered image scaling and generation service integrated with Stable Diffusion models.',
    tags: ['React', 'FastAPI', 'Python', 'AWS S3'],
    category: 'AI / Cloud',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: Brain,
    gradient: 'from-purple-600/20 to-pink-600/20 border-purple-500/20',
  },
  {
    id: 3,
    title: 'CryptoSync Dashboard',
    description: 'Real-time cryptocurrency valuation dashboard displaying live charts and transaction simulations using WebSockets.',
    tags: ['Vite', 'TypeScript', 'TailwindCSS', 'Chart.js'],
    category: 'Frontend',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: BarChart2,
    gradient: 'from-emerald-600/20 to-teal-600/20 border-emerald-500/20',
  },
  {
    id: 4,
    title: 'CloudSafe Vault',
    description: 'Zero-knowledge encrypted cloud storage vault employing client-side AES-GCM decryption schemes.',
    tags: ['React', 'Node.js', 'Redis', 'Docker'],
    category: 'Full-Stack',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: Shield,
    gradient: 'from-amber-600/20 to-orange-600/20 border-amber-500/20',
  },
]

const categories = ['All', 'Full-Stack', 'Frontend', 'AI / Cloud']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto font-light">
            A hand-picked selection of full-stack and frontend applications I've engineered.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/20 scale-105'
                  : 'glass-card text-gray-400 hover:text-white border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 group"
                >
                  {/* Banner / Graphic Representation */}
                  <div className={`h-48 bg-gradient-to-tr ${project.gradient} border-b relative flex items-center justify-center`}>
                    {/* Floating ambient circle */}
                    <div className="absolute w-24 h-24 rounded-full bg-white/5 blur-xl group-hover:scale-125 transition-transform duration-500" />
                    
                    <ProjectIcon className="w-16 h-16 text-white/40 group-hover:text-white/75 group-hover:scale-110 transition-all duration-500 relative z-10" />
                    
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-dark-950/70 border border-white/10 text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-dark-900 border border-white/5 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
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
