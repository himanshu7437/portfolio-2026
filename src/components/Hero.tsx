"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full sm:w-[500px] sm:h-[500px] pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
        >
          <span className="text-foreground">I build </span>
          <br className="md:hidden" />
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            real-world scalable
          </span>
          <br />
          <span className="text-foreground">products, not just projects.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          Full-Stack Product Engineer focused on crafting modern web experiences through beautiful code and intuitive design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-foreground text-background font-medium tracking-wide transition-transform hover:scale-105"
          >
            Explore Work
          </a>
          <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <a href="https://github.com/himanshusharma" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/himanshusharma" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="mailto:hello@himanshu.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
