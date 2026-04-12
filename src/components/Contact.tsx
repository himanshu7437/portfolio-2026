"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-20 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/20 blur-[100px] pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">Let's build something.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a
              href="mailto:hello@himanshu.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/himanshusharma"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
              >
              <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/himanshusharma"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
              >
              <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-20 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Himanshu Sharma. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
}
