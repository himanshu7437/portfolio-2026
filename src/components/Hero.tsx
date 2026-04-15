"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { ArrowDown, Code2, Database, LayoutTemplate, Terminal, Rocket } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const cycleWords = ["Socket.io", "Gemini AI", "WebSockets", "Scalable APIs", "Next.js", "System Design"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    let timer: ReturnType<typeof setTimeout>;
    const currentWord = cycleWords[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % cycleWords.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, mounted]);

  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-32 pb-20"
    >
      {/* Mouse glow */}
      <motion.div
        className="pointer-events-none absolute w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] -translate-x-1/2 -translate-y-1/2"
        style={{ left: springX, top: springY }}
      />
      {/* Static ambient */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-tight leading-[1.05]">
            I build{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-300 to-secondary">products</span>
            </span>
            ,<br />not just projects.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Full-stack product engineer crafting high-performance apps with real-time infrastructure, AI integrations, and systems built to scale.
          </motion.p>

          <motion.div variants={itemVariants} className="font-mono text-gray-300 flex items-center gap-3 text-base h-8">
            <Terminal className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-primary/60">{"=>"}</span>
            <span>{text}</span>
            <span className="w-[2px] h-5 bg-primary animate-pulse ml-0.5 rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)]"
            >
              <span className="relative z-10">View Case Studies</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <div className="flex items-center gap-3 px-5 py-4 rounded-full bg-white/5 border border-white/10">
              <a href="https://github.com/himanshu7437" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <div className="w-px h-4 bg-white/10" />
              <a href="https://linkedin.com/in/himanshu7437" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative lg:ml-auto w-full max-w-sm mx-auto"
        >
          {/* Floating orbs */}
          <motion.div
            animate={{ y: [-15, 10, -15], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-28 h-28 bg-primary/25 rounded-full blur-2xl pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-10 -left-10 w-36 h-36 bg-secondary/25 rounded-full blur-2xl pointer-events-none"
          />

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] bg-white/[0.04] border border-white/10 p-8 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Inner glow on hover */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 space-y-7">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Full-Stack Engineer</p>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Himanshu Sharma
                  </h3>
                  <p className="text-primary text-sm mt-1">Product · AI · Real-time</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Skill tags */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Core Expertise</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                    <LayoutTemplate className="w-3 h-3" /> Frontend
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 flex items-center gap-1.5">
                    <Database className="w-3 h-3" /> Backend
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-white/8 text-gray-300 border border-white/10 flex items-center gap-1.5">
                    <Rocket className="w-3 h-3" /> Systems
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-black/40 rounded-2xl p-4 border border-white/5 space-y-3 font-mono text-sm">
                {[
                  { label: "Performance", value: "99 Lighthouse", color: "text-green-400" },
                  { label: "Real-time Apps", value: "Socket.io · WS", color: "text-blue-400" },
                  { label: "AI Integrations", value: "Gemini · LLMs", color: "text-purple-400" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-gray-500">{s.label}</span>
                    <span className={s.color}>{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-xs text-green-400 font-mono">● Open to work</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll to explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent" />
        <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
