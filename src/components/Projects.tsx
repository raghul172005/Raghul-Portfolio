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
  colorTheme: string
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
    colorTheme: '#6366f1',
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
    colorTheme: '#a855f7',
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
    colorTheme: '#10b981',
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
    colorTheme: '#f59e0b',
  },
]

const categories = ['All', 'Full-Stack', 'Frontend', 'AI / Cloud']

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  const renderBanner = (id: number) => {
    switch (id) {
      case 1:
        return (
          <div className="w-full h-full bg-dark-950 p-4 font-mono text-[10px] text-gray-400 flex flex-col gap-2 select-none relative z-10">
            <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-[9px] text-gray-600 ml-1">community-hub.tsx</span>
            </div>
            <div className="space-y-1.5 overflow-hidden flex-grow transition-transform duration-500 group-hover:translate-y-[-2px]">
              <p className="text-secondary-400">const <span className="text-primary-400">Developer</span> = {'{'}</p>
              <p className="pl-3">skills: [<span className="text-accent-400">"React"</span>, <span className="text-accent-400">"Next.js"</span>],</p>
              <p className="pl-3 text-secondary-500">status: <span className="text-yellow-400">"Collab_Ready"</span></p>
              <p className="text-secondary-400">{'}'}</p>
              <p className="text-primary-500">import <span className="text-white">🚀</span> from <span className="text-accent-400">"devflow-hub"</span></p>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="w-full h-full bg-dark-950 p-4 flex items-center justify-center relative overflow-hidden select-none z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
            <div className="flex gap-4 items-center z-10">
              <div className="w-12 h-12 rounded bg-purple-950/30 border border-purple-500/20 flex flex-wrap gap-0.5 p-1 items-center justify-center opacity-40">
                <span className="w-3.5 h-3.5 bg-purple-500/30 rounded-sm" />
                <span className="w-3.5 h-3.5 bg-purple-500/30 rounded-sm animate-pulse" />
                <span className="w-3.5 h-3.5 bg-purple-500/30 rounded-sm" />
              </div>
              <span className="text-purple-400 animate-pulse text-lg">➜</span>
              <div className="w-16 h-16 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 scale-105 transition-all duration-500 group-hover:scale-110">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="w-full h-full bg-dark-950 p-4 flex flex-col justify-end relative overflow-hidden select-none z-10">
            <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono px-2 py-0.5 rounded">
              +18.42%
            </div>
            <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 100">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0"/>
                </linearGradient>
              </defs>
              <path
                d="M 0 80 Q 50 60 100 70 T 200 30 T 300 10"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                className="drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
              />
              <path
                d="M 0 80 Q 50 60 100 70 T 200 30 T 300 10 L 300 100 L 0 100 Z"
                fill="url(#chartGlow)"
              />
              <circle cx="200" cy="30" r="4" fill="#10b981" className="animate-ping" />
              <circle cx="200" cy="30" r="3" fill="#10b981" />
            </svg>
          </div>
        )
      case 4:
        return (
          <div className="w-full h-full bg-dark-950 p-4 flex items-center justify-center relative overflow-hidden select-none z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)]" />
            <div className="absolute w-28 h-28 rounded-full border border-dashed border-amber-500/10 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute w-20 h-20 rounded-full border border-amber-500/20 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />

            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center relative z-10 text-amber-500 shadow-inner transition-transform duration-300 group-hover:scale-110">
              <Shield className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group rounded-2xl bg-dark-900/40 backdrop-blur-md overflow-hidden flex flex-col h-full border transition-all duration-300 relative cursor-pointer"
      style={{
        borderColor: isHovered ? `${project.colorTheme}40` : 'rgba(255, 255, 255, 0.05)',
        boxShadow: isHovered ? `0 0 25px ${project.colorTheme}15` : 'none',
      }}
    >
      {/* Banner / Visual Preview */}
      <div className="h-44 border-b border-white/5 relative flex items-center justify-center overflow-hidden">
        {renderBanner(project.id)}
        <span
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-semibold border relative z-20 transition-all duration-300 bg-dark-950/70 text-gray-300 animate-fade"
          style={{
            borderColor: isHovered ? `${project.colorTheme}40` : 'rgba(255, 255, 255, 0.1)',
            color: isHovered ? '#fff' : '#d1d5db',
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
        <h3
          className="text-xl font-bold text-white mb-2 font-heading transition-colors duration-300"
          style={{ color: isHovered ? project.colorTheme : '#fff' }}
        >
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
              className="px-3 py-1 rounded-lg text-xs font-medium bg-dark-950/60 border border-white/5 text-gray-400 transition-colors duration-300 group-hover:border-white/10 group-hover:text-gray-200"
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
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: isHovered ? project.colorTheme : '#818cf8' }}
          >
            Live Demo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold tracking-wider uppercase mb-3"
            >
              My Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg font-light leading-relaxed"
            >
              A hand-picked selection of full-stack and frontend applications I've engineered.
            </motion.p>
          </div>

          {/* Categories Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 lg:justify-end shrink-0 min-w-max"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative border cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white border-transparent shadow-lg shadow-primary-500/20'
                    : 'bg-dark-900/40 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
