import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Programming',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js / Express', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'Power BI', level: 80 },
      { name: 'Git / GitHub', level: 85 },
    ],
  },
  {
    title: 'AI & Soft Skills',
    skills: [
      { name: 'AI / ML', level: 72 },
      { name: 'GenAI', level: 70 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Communication', level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">My Skills</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Technologies & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-accent-500 to-cyan-500" />
        </motion.div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="glass rounded-2xl p-6 hover:border-accent-500/30 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-5">{group.title}</h3>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-dark-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: gi * 0.1 + si * 0.08, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-500 to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
