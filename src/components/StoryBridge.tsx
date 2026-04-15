"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "After", "years", "of", "building,", "I", "learned", "one", "truth:", "great",
  "software", "is", "not", "written",  "—", "it", "is", "engineered", "with",
  "intention,", "empathy,", "and", "obsessive", "attention", "to", "detail."
];

export function StoryBridge() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      id="story"
      className="relative py-40 px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-primary mb-16 text-center"
        >
          The Philosophy
        </motion.p>

        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center flex flex-wrap justify-center gap-x-3 gap-y-2">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start * 0.4, end * 0.8], [0.15, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start * 0.4, end * 0.8], [10, 0]);
            return (
              <motion.span
                key={i}
                style={{ opacity, y }}
                className={word === "engineered" || word === "empathy," || word === "intention," ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" : "text-white"}
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
