"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Whisperbox",
    problem: "Users hesitate to give honest feedback.",
    solution: "Anonymous messaging with AI suggestions.",
    tech: ["Next.js", "TypeScript", "Gemini AI"],
    impact: "Improved engagement via AI-assisted replies.",
  },
  {
    title: "Chucklr",
    problem: "Lack of real-time interaction in basic social apps.",
    solution: "Real-time social platform with Socket.io.",
    tech: ["MERN", "Socket.io"],
    impact: "Live messaging + notifications.",
  },
  {
    title: "BlogSphere",
    problem: "Complex blogging UX.",
    solution: "Simple CRUD blog with Redux state.",
    tech: ["React", "Redux", "MongoDB"],
    impact: "Efficient content management.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Case Studies.</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Selected works focusing on real-world problems and scalable solutions.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-8 md:gap-16 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/20">
                  {project.title}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex gap-2 text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full">
                  Case Study 0{index + 1}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold">{project.title}</h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-gray-400 text-sm uppercase tracking-wider block mb-1">Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-gray-400 text-sm uppercase tracking-wider block mb-1">Solution</span>
                    <p>{project.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full border border-white/10 text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a href="#" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                    <span className="font-semibold underline underline-offset-4">View Project</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
