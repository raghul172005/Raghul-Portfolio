import { motion } from 'framer-motion'
import { Layout, Server, Database, GitBranch, Coffee } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React / Next.js', level: 95, iconClass: 'devicon-react-original colored' },
      { name: 'TypeScript', level: 90, iconClass: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', level: 95, iconClass: 'devicon-tailwindcss-original colored' },
      { name: 'HTML5 & CSS3', level: 98, iconClass: 'devicon-html5-plain colored' },
    ],
  },
  {
    title: 'Java Full Stack',
    icon: Coffee,
    skills: [
      { name: 'Java (Core & Advanced)', level: 92, iconClass: 'devicon-java-plain colored' },
      { name: 'Spring Boot', level: 88, iconClass: 'devicon-spring-original colored' },
      { name: 'Hibernate / JPA', level: 85, iconClass: 'devicon-hibernate-plain colored' },
      { name: 'Microservices Architecture', level: 82, iconClass: 'devicon-java-plain' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    skills: [
      { name: 'Node.js / Express', level: 88, iconClass: 'devicon-nodejs-plain colored' },
      { name: 'NestJS', level: 85, iconClass: 'devicon-nestjs-plain colored' },
      { name: 'REST & GraphQL APIs', level: 90, iconClass: 'devicon-graphql-plain colored' },
    ],
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 88, iconClass: 'devicon-postgresql-plain colored' },
      { name: 'MongoDB', level: 90, iconClass: 'devicon-mongodb-plain colored' },
      { name: 'Redis', level: 80, iconClass: 'devicon-redis-plain colored' },
      { name: 'Prisma / TypeORM', level: 85, iconClass: 'devicon-prisma-original' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: GitBranch,
    skills: [
      { name: 'Docker', level: 82, iconClass: 'devicon-docker-plain colored' },
      { name: 'AWS (S3, EC2, Lambda)', level: 80, iconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Git & GitHub Actions', level: 90, iconClass: 'devicon-git-plain colored' },
      { name: 'Linux', level: 78, iconClass: 'devicon-linux-plain' },
    ],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background glow decoration */}
      <div className="glow-bg-teal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto font-light">
            A look at my professional skill inventory and the core technologies I build scalable production systems with.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={catIdx}
                variants={cardVariants}
                className="glass-card p-8 rounded-2xl border border-white/5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          {skill.iconClass && <i className={`${skill.iconClass} text-lg w-5 h-5 flex items-center justify-center`} />}
                          <span className="font-medium text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-gray-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-dark-900 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
