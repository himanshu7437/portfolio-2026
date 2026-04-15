"use client";

import { motion } from "framer-motion";

const statements = [
  {
    bold: "I don't build features.",
    sub: "I engineer experiences that solve real human problems.",
  },
  {
    bold: "Speed is a feature.",
    sub: "Every millisecond matters. Performance is not an afterthought — it's the foundation.",
  },
  {
    bold: "Code is communication.",
    sub: "I write code that future engineers can read, understand, and thank me for.",
  },
  {
    bold: "Scalability by default.",
    sub: "Building for 10 users with the architecture to handle 10 million.",
  },
];

export function HowIThink() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Principles</p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            How I<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Think.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {statements.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/8 hover:border-primary/30 transition-all duration-500 hover:bg-white/[0.06] overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-gray-600 mb-4 block">0{i + 1}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  {s.bold}
                </h3>
                <p className="text-gray-400 leading-relaxed">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
