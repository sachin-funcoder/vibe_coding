import { motion } from 'framer-motion';
import { Code2, BrainCircuit, BarChart3, Users } from 'lucide-react';

const highlights = [
  { icon: <Code2 size={28} />, title: 'Full Stack', desc: 'MERN stack applications' },
  { icon: <BrainCircuit size={28} />, title: 'AI / ML', desc: 'Intelligent solutions' },
  { icon: <BarChart3 size={28} />, title: 'Data Analytics', desc: 'Power BI dashboards' },
  { icon: <Users size={28} />, title: 'Team Player', desc: 'Hackathon collaborator' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Turning Ideas into <span className="gradient-text">Reality</span>
          </h2>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-accent-500 to-cyan-500" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto text-center text-slate-400 text-lg leading-relaxed mb-16"
        >
          I'm a B.E. Information Science student at Sambhram Institute of Technology, Bangalore.
          With strong problem-solving abilities and hands-on experience building scalable applications,
          I love participating in hackathons and turning complex challenges into elegant solutions.
          My core expertise spans the MERN stack, AI/ML pipelines, and data visualization with Power BI.
        </motion.p>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-accent-500/30 transition-all duration-300 glow-card cursor-default"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-500/10 text-accent-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
