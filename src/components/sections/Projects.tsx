"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/data";
import { Section } from "../shared/Section";

interface StickyCardProps {
  project: typeof PROJECTS[0];
  index: number;
  total: number;
}

function StickyCard({ project, index, total }: StickyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate sticky offset so cards stack nicely
  const topOffset = `calc(10vh + ${index * 40}px)`;

  return (
    <div 
      ref={cardRef}
      className="sticky w-full"
      style={{ top: topOffset, zIndex: index }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] mb-20 bg-[#0C0C0C]/90"
      >
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* Content */}
          <div className="w-full max-w-4xl mx-auto p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-primary text-sm font-bold tracking-widest uppercase">{project.category}</span>
                <span className="text-gray-600 font-mono font-bold text-4xl">0{index + 1}</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">{project.title}</h3>
              
              <div className="space-y-6 mb-10 text-gray-300 text-lg leading-relaxed font-light">
                {project.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 rounded-full bg-white/5 text-white/70 text-xs font-medium border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.github} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform">
                  <FaGithub size={16} /> Source Code
                </a>
                <a href={project.demo} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-semibold text-sm hover:bg-white/10 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Featured Work" subtitle="Deep dives into architecture, problems, and technical solutions." className="bg-[#0C0C0C] relative pb-32">
      <div className="relative max-w-7xl mx-auto mt-20">
        {PROJECTS.map((project, idx) => (
          <StickyCard 
            key={project.id} 
            project={project} 
            index={idx} 
            total={PROJECTS.length} 
          />
        ))}
      </div>
    </Section>
  );
}
