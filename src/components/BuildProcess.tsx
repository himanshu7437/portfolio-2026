"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand",
    desc: "Deep-dive into the problem space. Who are the users? What are they actually trying to do?",
    color: "text-amber-400",
    bg: "from-amber-500/10 to-transparent border-amber-500/20",
    num: "01",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Map out architecture and user flows before writing a single line of code.",
    color: "text-blue-400",
    bg: "from-blue-500/10 to-transparent border-blue-500/20",
    num: "02",
  },
  {
    icon: Code2,
    title: "Build",
    desc: "Ship clean, typed, and testable code. Performance and scalability baked in from day one.",
    color: "text-green-400",
    bg: "from-green-500/10 to-transparent border-green-500/20",
    num: "03",
  },
  {
    icon: Rocket,
    title: "Ship",
    desc: "Deploy with CI/CD. Monitor performance. Ensure Lighthouse scores stay above 90.",
    color: "text-purple-400",
    bg: "from-purple-500/10 to-transparent border-purple-500/20",
    num: "04",
  },
  {
    icon: RefreshCw,
    title: "Iterate",
    desc: "Gather feedback, analyze metrics, and continuously improve based on real usage data.",
    color: "text-cyan-400",
    bg: "from-cyan-500/10 to-transparent border-cyan-500/20",
    num: "05",
  },
];

export function BuildProcess() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Workflow</p>
          <h2 className="text-5xl md:text-7xl font-bold">
            How I<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Build.</span>
          </h2>
        </motion.div>

        {/* Pipeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block -translate-y-1/2 pointer-events-none" />

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group"
                >
                  {/* Step number connector dot */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 -translate-y-16 z-10 shadow-[0_0_15px_rgba(96,165,250,0.5)]" />

                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${step.bg} border backdrop-blur-sm h-full transition-all duration-500 hover:scale-[1.02] hover:border-primary/40`}>
                    <span className="text-xs font-mono text-gray-600 mb-4 block">{step.num}</span>
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${step.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`font-bold text-lg mb-2 ${step.color}`}>{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
