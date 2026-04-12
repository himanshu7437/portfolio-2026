"use client";

import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Rocket, Settings } from "lucide-react";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "MongoDB",
  "PostgreSQL",
  "Socket.io",
  "Redux",
];

const philosophy = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Clean Code",
    desc: "Writing maintainable, readable, and well-documented code.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
    title: "Mobile First",
    desc: "Ensuring flawless user experience across all devices and screen sizes.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "Performance",
    desc: "Optimizing for Lighthouse scores, fast load times, and smooth animations.",
  },
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: "Scalability",
    desc: "Architecting systems that can grow with expanding user bases.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-4 relative bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
        
        {/* Philosophy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How I Build.</h2>
            <p className="text-gray-400 mb-12 text-lg">
              My core principles for engineering robust and beautiful products.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="lg:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tech Stack.</h2>
            <p className="text-gray-400 mb-12 text-lg">
              The tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {stack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-primary transition-all cursor-default hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
