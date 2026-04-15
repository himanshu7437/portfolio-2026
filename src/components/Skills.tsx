"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    name: "Next.js",
    category: "Frontend",
    level: 95,
    usage: "Used in all 3 case study projects. Leverages SSR, ISR, and App Router for performance.",
    color: "from-white/20 to-white/10",
    accent: "text-white",
  },
  {
    name: "React",
    category: "Frontend",
    level: 98,
    usage: "Component architecture, custom hooks, context, and concurrent features across all projects.",
    color: "from-blue-500/20 to-blue-600/10",
    accent: "text-blue-400",
  },
  {
    name: "TypeScript",
    category: "Language",
    level: 90,
    usage: "Strict typing across all codebases. Type-safe APIs, Zod validation, and end-to-end types.",
    color: "from-blue-400/20 to-blue-500/10",
    accent: "text-blue-300",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 88,
    usage: "REST APIs, middleware pipelines, authentication systems, and real-time servers.",
    color: "from-green-500/20 to-green-600/10",
    accent: "text-green-400",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: 85,
    usage: "Schema design, aggregation pipelines, and Mongoose ODM for all backend projects.",
    color: "from-emerald-500/20 to-emerald-600/10",
    accent: "text-emerald-400",
  },
  {
    name: "Socket.io",
    category: "Real-time",
    level: 82,
    usage: "Live messaging, notifications, and real-time event broadcasting in Chucklr.",
    color: "from-yellow-500/20 to-yellow-600/10",
    accent: "text-yellow-400",
  },
  {
    name: "Gemini AI",
    category: "AI/ML",
    level: 80,
    usage: "AI-assisted reply suggestions and content generation in Whisperbox.",
    color: "from-purple-500/20 to-purple-600/10",
    accent: "text-purple-400",
  },
  {
    name: "Redux",
    category: "State",
    level: 85,
    usage: "Global state management, middleware, and Redux Toolkit in BlogSphere.",
    color: "from-violet-500/20 to-violet-600/10",
    accent: "text-violet-400",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    level: 95,
    usage: "Utility-first styling with custom design systems across all projects.",
    color: "from-cyan-500/20 to-cyan-600/10",
    accent: "text-cyan-400",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    level: 88,
    usage: "Scroll-driven animations, micro-interactions, and cinematic reveals.",
    color: "from-pink-500/20 to-pink-600/10",
    accent: "text-pink-400",
  },
];

export function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const activeSkill = skills.find((s) => s.name === active);

  return (
    <section id="process" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Toolbox</p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Skills in<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">real usage.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl">
            Hover a skill to see exactly where and how I've used it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Skills Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {skills.map((skill, i) => (
              <motion.button
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setActive(active === skill.name ? null : skill.name)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  active === skill.name
                    ? "border-primary/50 bg-primary/10"
                    : "border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-xs text-gray-500 font-mono">{skill.category}</span>
                </div>
                {/* Level bar */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 + 0.3, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color.replace("/20", "").replace("/10", "")}`}
                    style={{ background: `linear-gradient(90deg, rgba(96,165,250,0.7), rgba(192,132,252,0.7))` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-600">Proficiency</span>
                  <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Info Panel */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {activeSkill ? (
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`p-8 rounded-3xl bg-gradient-to-br ${activeSkill.color} border border-white/10 backdrop-blur-sm`}
                >
                  <span className={`text-xs uppercase tracking-widest font-mono ${activeSkill.accent} mb-2 block`}>
                    {activeSkill.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">{activeSkill.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{activeSkill.usage}</p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Proficiency Level</span>
                      <span className={`font-mono font-bold ${activeSkill.accent}`}>{activeSkill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 bg-black/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${activeSkill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 rounded-3xl border border-dashed border-white/10 flex items-center justify-center min-h-[200px]"
                >
                  <p className="text-gray-600 text-center text-sm">Click any skill to see real usage context</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
