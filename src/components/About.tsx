import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react'

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '3+' },
    { label: 'Projects Completed', value: '25+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'PRs Merged', value: '100+' },
  ]

  const details = [
    { icon: MapPin, text: 'Based in Chennai, India' },
    { icon: Briefcase, text: 'Full-Time Engineer' },
    { icon: GraduationCap, text: 'B.E. Computer Science & Engineering' },
    { icon: Award, text: 'Certified Cloud Associate' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Terminal Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="w-full rounded-2xl glass-card overflow-hidden shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="bg-dark-950 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-xs text-gray-500 font-mono ml-2">raghul.json</span>
              </div>
              {/* Terminal Code Panel */}
              <div className="p-6 font-mono text-sm leading-relaxed text-gray-300 bg-dark-900/40">
                <p className="text-secondary-500">{'{'}</p>
                <div className="pl-4">
                  <p><span className="text-primary-500">"name"</span>: <span className="text-accent-500">"Raghul"</span>,</p>
                  <p><span className="text-primary-500">"role"</span>: <span className="text-accent-500">"Full Stack Engineer"</span>,</p>
                  <p><span className="text-primary-500">"passion"</span>: <span className="text-accent-500">"Building clean, scaleable code"</span>,</p>
                  <p><span className="text-primary-500">"experience"</span>: <span className="text-accent-500">"React, Node.js, Cloud Services"</span>,</p>
                  <p><span className="text-primary-500">"lovesCoding"</span>: <span className="text-accent-500">true</span>,</p>
                  <p><span className="text-primary-500">"hobbies"</span>: <span className="text-gray-400">['UI/UX Design', 'Open Source']</span></p>
                </div>
                <p className="text-secondary-500">{'}'}</p>
              </div>
            </div>
          </motion.div>

          {/* Details / Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Creative developer who bridges the gap between Design and Technology
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                I enjoy translating complex user needs into beautiful, modular interfaces and scalable systems. Working closely with modern frontend ecosystems and cloud-based backend services allows me to deliver polished, production-ready experiences.
              </p>
            </div>

            {/* Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((detail, idx) => {
                const Icon = detail.icon
                return (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{detail.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/5">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-tr from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
