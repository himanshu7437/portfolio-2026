"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 3, suffix: "+", label: "Production Apps Shipped", desc: "Real users, real data" },
  { value: 99, suffix: "", label: "Lighthouse Score", desc: "Consistent performance" },
  { value: 10, suffix: "k+", label: "Lines Written", desc: "Clean, typed code" },
  { value: 100, suffix: "%", label: "TypeScript Coverage", desc: "Type-safe across the board" },
];

const experiences = [
  { tag: "Next.js App Router", detail: "SSR, ISR, Server Actions" },
  { tag: "Real-time Systems", detail: "Socket.io, WebSockets" },
  { tag: "AI Integrations", detail: "Gemini API, LLM pipelines" },
  { tag: "Full-stack MERN", detail: "MongoDB, Express, React, Node" },
  { tag: "UI Engineering", detail: "Framer Motion, GSAP, Lenis" },
  { tag: "Auth & Security", detail: "JWT, OAuth2, Middleware" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function ProofOfWork() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Numbers Don't Lie</p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Proof of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work.</span>
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/8 hover:border-primary/30 transition-all duration-500 hover:bg-white/[0.05] group"
            >
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-3">
                <CountUp target={m.value} suffix={m.suffix} />
              </div>
              <p className="font-semibold text-white mb-1">{m.label}</p>
              <p className="text-sm text-gray-500">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6">Areas of Experience</p>
          <div className="flex flex-wrap gap-4">
            {experiences.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-default"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{e.tag}</span>
                <span className="text-xs text-gray-600 ml-2 hidden group-hover:inline transition-all">— {e.detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
