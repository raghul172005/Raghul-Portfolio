import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  id: number
  role: string
  company: string
  location: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'InnovateTech Labs',
    location: 'Chennai, India (Hybrid)',
    period: '2024 - Present',
    description: [
      'Architected and implemented high-performance web applications using React, Next.js, and TypeScript, improving core web vitals by 30%.',
      'Developed microservices and RESTful APIs using NestJS and Node.js with PostgreSQL storage backends.',
      'Managed cloud infrastructure components on AWS (S3, EC2, CloudFront) and established GitHub Actions CI/CD deployment pipelines.',
    ],
  },
  {
    id: 2,
    role: 'Associate Full Stack Developer',
    company: 'Alpha Softworks',
    location: 'Chennai, India',
    period: '2022 - 2024',
    description: [
      'Designed dynamic responsive pages utilizing Tailwind CSS and React Redux Toolkit, decreasing client-side state latency.',
      'Configured database queries and optimized indexes in MongoDB, resulting in a 25% query acceleration.',
      'Collaborated closely with cross-functional design, product, and QA teams to iteratively launch five core feature updates.',
    ],
  },
  {
    id: 3,
    role: 'Frontend Engineering Intern',
    company: 'PixelPoint Media',
    location: 'Remote',
    period: '2021 - 2022',
    description: [
      'Created reusable component libraries using React, HTML5, CSS3, and styled-components.',
      'Wrote integration and unit tests using Jest and React Testing Library, boosting total test coverage to 85%.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Work History
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto font-light">
            My professional career path and key engineering contributions over the years.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent transform -translate-x-1/2 opacity-25" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-primary-500 shadow-lg shadow-primary-500/20 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <Briefcase className="w-4 h-4 text-primary-400" />
                  </div>

                  {/* Card Block */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                      className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 relative"
                    >
                      {/* Sub-Header Metadata */}
                      <div className={`flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="h-3 w-px bg-white/10 hidden sm:inline" />
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-white mb-1 font-heading">{exp.role}</h3>
                      <h4 className="text-sm font-semibold text-primary-400 mb-4">{exp.company}</h4>

                      {/* Bullet Description */}
                      <ul className={`space-y-3 text-sm text-gray-400 font-light list-none pl-0 ${isEven ? 'md:text-right' : 'text-left'}`}>
                        {exp.description.map((desc, descIdx) => (
                          <li key={descIdx} className="relative pl-5 md:pl-0">
                            {/* Mobile list bullet */}
                            <span className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-secondary-500 md:hidden`} />
                            {/* Desktop relative bullet positioning */}
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
