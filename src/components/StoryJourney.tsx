"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { StoryStep } from "@/lib/markdown";

export function StoryJourney({ steps }: { steps: StoryStep[] }) {
  // Fallback if no steps provided
  const displaySteps = steps?.length > 0 ? steps : [
    {
      year: "Present",
      title: "Loading...",
      description: "Getting story from markdown...",
    }
  ];

  return (
    <section id="story" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            The Journey
          </h2>
          <p className="mt-4 text-gray-400">My evolution as an engineer.</p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-1/2">
          {displaySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn(
                "mb-12 pl-8 relative before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-primary before:rounded-full before:ring-4 before:ring-background",
                "md:w-1/2 md:-left-[1px]",
                index % 2 === 0 ? "md:pr-12 md:pl-0 md:text-right md:before:left-auto md:before:-right-[5px]" : "md:pl-12 md:left-1/2"
              )}
            >
              <span className="text-secondary font-mono text-sm tracking-widest uppercase block mb-2">
                {step.year}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
