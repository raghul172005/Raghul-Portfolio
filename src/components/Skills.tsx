import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, CreditCard, Code } from 'lucide-react'

interface Skill {
  name: string
  iconClass?: string
  lucideIcon?: any
  colorTheme: string
  categories: string[]
}

const skills: Skill[] = [
  {
    name: 'React',
    iconClass: 'devicon-react-original',
    colorTheme: '#61DAFB',
    categories: ['Frontend'],
  },
  {
    name: 'Next.js',
    iconClass: 'devicon-nextjs-plain',
    colorTheme: '#ffffff',
    categories: ['Frontend'],
  },
  {
    name: 'TypeScript',
    iconClass: 'devicon-typescript-plain',
    colorTheme: '#3178C6',
    categories: ['Languages', 'Frontend'],
  },
  {
    name: 'JavaScript',
    iconClass: 'devicon-javascript-plain',
    colorTheme: '#F7DF1E',
    categories: ['Languages', 'Frontend'],
  },
  {
    name: 'Node.js',
    iconClass: 'devicon-nodejs-plain',
    colorTheme: '#339933',
    categories: ['Backend'],
  },
  {
    name: 'Express.js',
    iconClass: 'devicon-express-original',
    colorTheme: '#ffffff',
    categories: ['Backend'],
  },
  {
    name: 'GraphQL / REST',
    iconClass: 'devicon-graphql-plain',
    colorTheme: '#E10098',
    categories: ['Backend'],
  },
  {
    name: 'MongoDB',
    iconClass: 'devicon-mongodb-plain',
    colorTheme: '#47A248',
    categories: ['Backend', 'Tools & Databases'],
  },
  {
    name: 'Tailwind CSS',
    iconClass: 'devicon-tailwindcss-original',
    colorTheme: '#06B6D4',
    categories: ['Frontend'],
  },
  {
    name: 'Redux & Context',
    iconClass: 'devicon-redux-original',
    colorTheme: '#764ABC',
    categories: ['Frontend'],
  },
  {
    name: 'HTML5',
    iconClass: 'devicon-html5-plain',
    colorTheme: '#E34F26',
    categories: ['Languages', 'Frontend'],
  },
  {
    name: 'CSS3 / Sass',
    iconClass: 'devicon-css3-plain',
    colorTheme: '#1572B6',
    categories: ['Languages', 'Frontend'],
  },
  {
    name: 'Git & GitHub',
    iconClass: 'devicon-git-plain',
    colorTheme: '#F05032',
    categories: ['DevOps', 'Tools & Databases'],
  },
  {
    name: 'Firebase',
    iconClass: 'devicon-firebase-plain',
    colorTheme: '#FFCA28',
    categories: ['Backend', 'Tools & Databases'],
  },
  {
    name: 'JWT Auth',
    lucideIcon: Lock,
    colorTheme: '#FF4081',
    categories: ['Backend'],
  },
  {
    name: 'Stripe / APIs',
    lucideIcon: CreditCard,
    colorTheme: '#635BFF',
    categories: ['Backend', 'Tools & Databases'],
  },
  {
    name: 'Docker',
    iconClass: 'devicon-docker-plain',
    colorTheme: '#2496ED',
    categories: ['DevOps', 'Tools & Databases'],
  },
  {
    name: 'Kubernetes',
    iconClass: 'devicon-kubernetes-plain',
    colorTheme: '#326CE5',
    categories: ['DevOps', 'Tools & Databases'],
  },
  {
    name: 'Jenkins',
    iconClass: 'devicon-jenkins-line',
    colorTheme: '#D24939',
    categories: ['DevOps', 'Tools & Databases'],
  },
  {
    name: 'LeetCode',
    lucideIcon: Code,
    colorTheme: '#FFA116',
    categories: ['Tools & Databases'],
  },
]

const categories = ['All Skills', 'Languages', 'Frontend', 'Backend', 'DevOps', 'Tools & Databases']

function SkillCard({ skill }: { skill: Skill }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = skill.lucideIcon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl bg-dark-900/40 backdrop-blur-md p-5 border transition-all duration-300 cursor-pointer flex flex-col items-start"
      style={{
        borderColor: isHovered ? `${skill.colorTheme}50` : 'rgba(255, 255, 255, 0.05)',
        boxShadow: isHovered ? `0 0 25px ${skill.colorTheme}15` : 'none',
      }}
    >
      {/* Subtle background gradient glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(120px circle at 50% 50%, ${skill.colorTheme}10, transparent 100%)`,
        }}
      />

      {/* Icon Box */}
      <div
        className="w-12 h-12 rounded-xl bg-dark-950 flex items-center justify-center border transition-all duration-300 relative z-10"
        style={{
          borderColor: isHovered ? `${skill.colorTheme}80` : 'rgba(255, 255, 255, 0.08)',
          boxShadow: isHovered ? `0 0 15px ${skill.colorTheme}20` : 'none',
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.3)',
        }}
      >
        {skill.iconClass ? (
          <i
            className={`${skill.iconClass} text-2xl transition-transform duration-300 group-hover:scale-110`}
            style={{ color: skill.colorTheme }}
          />
        ) : Icon ? (
          <Icon
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.colorTheme }}
          />
        ) : null}
      </div>

      {/* Skill Name */}
      <span className="text-gray-300 mt-4 text-sm font-semibold tracking-wide transition-colors duration-300 group-hover:text-white relative z-10">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All Skills')

  const filteredSkills = activeCategory === 'All Skills'
    ? skills
    : skills.filter((skill) => skill.categories.includes(activeCategory))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background glow decoration */}
      <div className="glow-bg-teal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />

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
              My Stack
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Skills & Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg font-light leading-relaxed"
            >
              An interactive map of core programming languages, frontend libraries, backend architectures, and developer tools I build with.
            </motion.p>
          </div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 lg:justify-end shrink-0 min-w-max"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative border cursor-pointer whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white border-transparent shadow-lg shadow-primary-500/20'
                    : 'bg-dark-900/40 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
