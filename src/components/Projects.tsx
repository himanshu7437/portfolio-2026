"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  X,
  Lightbulb,
  Zap,
  TrendingUp,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import type { ProjectData } from "@/lib/markdown";
import { cubicBezier } from "framer-motion";

/* ─── Enriched project metadata for the grid cards ─── */
const projectMeta: Record<
  string,
  {
    description: string;
    liveUrl: string;
    githubUrl: string;
    color: string;
    gradient: string;
  }
> = {
  BlogSphere: {
    description:
      "A full-featured blogging platform with social profiles, rich-text editing, and a beautiful responsive UI designed for content creators.",
    liveUrl: "https://appwriteblog-lac.vercel.app/",
    githubUrl: "https://github.com/himanshu7437/blogwebsite",
    color: "#60a5fa",
    gradient: "from-blue-500/20 via-blue-400/5 to-transparent",
  },
  Chucklr: {
    description:
      "An Instagram-inspired social media app with real-time feeds, stories, reels, messaging, and a polished creator-first experience.",
    liveUrl: "https://chucklr.vercel.app/",
    githubUrl: "https://github.com/himanshu7437/Pixgram",
    color: "#a78bfa",
    gradient: "from-violet-500/20 via-violet-400/5 to-transparent",
  },
  Whisperbox: {
    description:
      "Anonymous messaging platform letting users receive honest feedback — no names, no pressure. Built for Gen-Z with a sleek dark UI.",
    liveUrl: "https://whisperbox-beta.vercel.app/",
    githubUrl: "https://github.com/himanshu7437/whisperbox",
    color: "#f472b6",
    gradient: "from-pink-500/20 via-pink-400/5 to-transparent",
  },
};

/* ─── Staggered reveal wrapper ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

/* ─────────────────────────────────── Project Card ─────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onOpenModal,
}: {
  project: ProjectData;
  index: number;
  onOpenModal: () => void;
}) {
  const meta = projectMeta[project.title] ?? {
    description: project.problem,
    liveUrl: "#",
    githubUrl: "#",
    color: "#60a5fa",
    gradient: "from-blue-500/20 via-blue-400/5 to-transparent",
  };

  const imgSlug = project.title.toLowerCase().replace(/\s+/g, "");

  return (
    <motion.article
      variants={cardVariants}
      className="project-card group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
      style={{ "--accent": meta.color } as React.CSSProperties}
    >
      {/* ── Image area ── */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={`/images/${imgSlug}.png`}
          alt={project.title}
          fill
          className="object-cover object-left transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <a
            href={meta.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            aria-label={`Live demo of ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={meta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            aria-label={`GitHub repo of ${project.title}`}
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Index badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300 z-10">
          0{index + 1}
        </div>
      </div>

      {/* ── Content area ── */}
      <div className={`relative flex flex-col flex-1 p-6 bg-gradient-to-br ${meta.gradient}`}>
        {/* Subtle glow line at top */}
        <div
          className="absolute top-0 left-6 right-6 h-px opacity-40"
          style={{
            background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)`,
          }}
        />

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2 flex-1">
          {meta.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {(Array.isArray(project.tech) ? project.tech : []).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide border transition-colors duration-300"
              style={{
                borderColor: `${meta.color}25`,
                color: meta.color,
                background: `${meta.color}08`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Case study button */}
        <button
          onClick={onOpenModal}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/btn cursor-pointer"
          style={{ color: meta.color }}
        >
          <BookOpen className="w-4 h-4" />
          <span className="relative">
            View Case Study
            <span
              className="absolute bottom-0 left-0 w-0 h-px group-hover/btn:w-full transition-all duration-300"
              style={{ background: meta.color }}
            />
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────── Case Study Modal ─────────────────────────────────── */
function CaseStudyModal({
  project,
  onClose,
}: {
  project: ProjectData;
  onClose: () => void;
}) {
  const meta = projectMeta[project.title] ?? {
    description: project.problem,
    liveUrl: "#",
    githubUrl: "#",
    color: "#60a5fa",
    gradient: "from-blue-500/20 via-blue-400/5 to-transparent",
  };

  const imgSlug = project.title.toLowerCase().replace(/\s+/g, "");

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const body = document.body;

    // Only disable scroll
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "";
    };
  }, []);


  const steps = [
    {
      key: "problem",
      label: "The Problem",
      icon: Lightbulb,
      color: "text-amber-400",
      bg: "from-amber-500/10 to-transparent",
      content: project.problem,
    },
    {
      key: "solution",
      label: "The Solution",
      icon: Zap,
      color: "text-green-400",
      bg: "from-green-500/10 to-transparent",
      content: project.solution,
    },
    {
      key: "tech",
      label: "Tech Stack",
      icon: Layers,
      color: "text-blue-400",
      bg: "from-blue-500/10 to-transparent",
      content: Array.isArray(project.tech) ? project.tech.join(" · ") : project.tech,
    },
    {
      key: "impact",
      label: "The Impact",
      icon: TrendingUp,
      color: "text-purple-400",
      bg: "from-purple-500/10 to-transparent",
      content: project.impact,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal body */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.4, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto overscroll-contain touch-pan-y rounded-3xl border border-white/[0.08] bg-[#111118]/95 backdrop-blur-xl shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
          <Image
            src={`/images/${imgSlug}.png`}
            alt={project.title}
            fill
            className="object-cover object-left"
            sizes="(max-width: 768px) 100vw, 720px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-[#111118]/30 to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-6 left-8 right-8">
            <p
              className="text-xs uppercase tracking-[0.3em] mb-2 font-mono"
              style={{ color: meta.color }}
            >
              Case Study
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-5">
          <p className="text-gray-400 leading-relaxed text-base">
            {meta.description}
          </p>

          {/* Steps */}
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${step.bg} border border-white/[0.06]`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-4 h-4 ${step.color}`} />
                  <span
                    className={`text-xs font-mono uppercase tracking-wider ${step.color}`}
                  >
                    {step.label}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{step.content}</p>
              </motion.div>
            );
          })}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={meta.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${meta.color}, ${meta.color}88)`,
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-[1.03]"
            >
              <GithubIcon className="w-4 h-4" />
              View Source
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────── Projects Section ─────────────────────────────────── */
export function Projects({ projects }: { projects: ProjectData[] }) {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative py-24 md:py-36"
      >
        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/[0.03] blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-5 font-mono">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                Projects
              </span>
            </h2>
            <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Real problems. Thoughtful solutions. Measurable impact.
            </p>
          </motion.div>

          {/* Project grid */}
          <motion.div
            ref={gridRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpenModal={() => setActiveProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <CaseStudyModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
