import { motion } from 'framer-motion';
import { Layers, BarChart3, Bot, TrafficCone } from 'lucide-react';

const projects = [
  {
    icon: <Layers size={28} />,
    title: 'HackSpot',
    subtitle: 'Hackathon Finder & Team Builder',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    bullets: [
      'Developed a platform to discover hackathons and form teams',
      'Implemented user authentication and team collaboration features',
      'Designed responsive frontend using React and backend with Node.js',
    ],
    color: 'from-accent-500 to-purple-500',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Power BI Dashboard',
    subtitle: 'Data Visualization Project',
    tech: ['Power BI', 'DAX', 'Data Modeling'],
    bullets: [
      'Built interactive dashboards for data visualization',
      'Used charts and KPIs to improve decision-making',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Bot size={28} />,
    title: 'AI Chatbot',
    subtitle: 'Legal Query Assistant',
    tech: ['HTML', 'Vanilla JS', 'REST API'],
    bullets: [
      'Designed and developed the frontend interface using HTML and Vanilla JS',
      'Built user-friendly UI for interacting with AI-based legal queries',
      'Integrated APIs to display chatbot responses dynamically',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <TrafficCone size={28} />,
    title: 'Traffic Prediction System',
    subtitle: 'AI/ML — Ongoing',
    tech: ['Python', 'ML', 'HTML', 'Vanilla JS'],
    bullets: [
      'Building an AI-powered traffic prediction model',
      'Designing frontend interface for real-time data display',
      'Integrating ML APIs for dynamic prediction results',
    ],
    color: 'from-orange-500 to-rose-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-accent-500 to-cyan-500" />
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl overflow-hidden group hover:border-accent-500/30 transition-all duration-300 glow-card"
            >
              {/* Color bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 sm:p-8">
                {/* Title row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10 text-white/80`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500">{project.subtitle}</p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-slate-400 border border-dark-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {project.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
