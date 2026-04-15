"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { StoryStep } from "@/lib/markdown";

const phaseColors = [
  "from-blue-500/20 to-blue-600/20 border-blue-500/30",
  "from-purple-500/20 to-purple-600/20 border-purple-500/30",
  "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
  "from-primary/20 to-secondary/20 border-primary/30",
];

export function Timeline({ steps }: { steps: StoryStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-24"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The Journey</p>
        <h2 className="text-4xl md:text-6xl font-bold">
          How it all<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">came together.</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/8 md:-translate-x-1/2" />
        
        {/* Animated progress line */}
        <motion.div
          className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary to-secondary md:-translate-x-1/2 origin-top"
          style={{ scaleY: useTransform(scrollYProgress, [0.1, 0.9], [0, 1]) }}
        />

        <div className="space-y-20">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center ${isLeft ? "md:justify-start" : "md:justify-end"} pl-20 md:pl-0`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-[0_0_20px_rgba(96,165,250,0.6)]" />

                <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${phaseColors[index % phaseColors.length]} border backdrop-blur-sm`}>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">{step.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
