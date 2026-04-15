import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 7892660842', href: 'tel:+917892660842' },
  { icon: <Mail size={20} />, label: 'Email', value: 'sachi.m1289@gmail.com', href: 'mailto:sachi.m1289@gmail.com' },
  { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', value: 'sachin-m-33265824b', href: 'https://www.linkedin.com/in/sachin-m-33265824b' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Bangalore, India', href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-accent-500 to-cyan-500" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-accent-500/30 transition-all duration-300 glow-card block"
                >
                  <div className="p-3 rounded-xl bg-accent-500/10 text-accent-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-accent-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass rounded-2xl p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent-500/10 text-accent-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-medium text-slate-200">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:sachi.m1289@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-all duration-200 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
          >
            <Send size={18} /> Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
