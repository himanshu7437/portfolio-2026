"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "center 60%"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section id="contact" ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#080810]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-secondary/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Beam from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-48 bg-gradient-to-b from-transparent to-primary/30" />

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-primary mb-8"
        >
          Let's Build Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-none tracking-tight mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            Let's create
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-300 to-secondary">
            something.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I'm currently open to new opportunities. Whether it's a full-time role, a freelance project, or just a great conversation — I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@himanshu.dev"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-[0_0_50px_rgba(96,165,250,0.4)] hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/himanshusharma"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/himanshusharma"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs text-gray-700 font-mono tracking-widest">
          © {new Date().getFullYear()} · Himanshu Sharma · Designed &amp; Built from scratch
        </p>
      </motion.footer>
    </section>
  );
}
