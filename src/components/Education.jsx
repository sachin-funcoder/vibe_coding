import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, BookOpen } from 'lucide-react';

const timeline = [
  {
    icon: <GraduationCap size={22} />,
    period: 'July 2023 – May 2027',
    title: 'B.E. in Information Science & Engineering',
    institution: 'Sambhram Institute of Technology',
    score: '83.5%',
    color: 'bg-accent-500',
  },
  {
    icon: <BookOpen size={22} />,
    period: 'June 2021 – April 2023',
    title: 'Intermediate (PUC)',
    institution: 'Dr. NSAM PU College',
    score: '85%',
    color: 'bg-cyan-500',
  },
  {
    icon: <BookOpen size={22} />,
    period: 'June 2020 – March 2021',
    title: 'SSC (10th)',
    institution: "St. Anne's School",
    score: '95.52%',
    color: 'bg-emerald-500',
  },
];

const achievements = [
  { icon: <Trophy size={20} />, text: 'Secured Top 3 in Smart India Hackathon (Internal Round)' },
  { icon: <Award size={20} />, text: 'Solved 100+ DSA problems using Java' },
  { icon: <Award size={20} />, text: 'Active participant in hackathons and coding competitions' },
];

const certs = [
  'Power BI — Microsoft',
  'Python — Google Cloud',
  'DBMS — Vitricks',
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">Background</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-accent-500 to-cyan-500" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Timeline — left */}
          <div className="lg:col-span-3">
            <div className="relative pl-8 border-l-2 border-dark-600 space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className={`absolute -left-[calc(1rem+5px)] top-1 w-4 h-4 rounded-full ${item.color} ring-4 ring-dark-950`} />

                  <span className="text-xs font-medium text-slate-500 tracking-wide">{item.period}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.institution}</p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-dark-700 text-accent-400 border border-dark-600">
                    Score: {item.score}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certs — right */}
          <div className="lg:col-span-2 space-y-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Trophy size={20} className="text-accent-400" /> Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-0.5 text-accent-400 flex-shrink-0">{a.icon}</span>
                    {a.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Award size={20} className="text-cyan-400" /> Certifications
              </h3>
              <ul className="space-y-2">
                {certs.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
