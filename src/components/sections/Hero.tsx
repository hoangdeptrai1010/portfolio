"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data";
import { Section } from "../shared/Section";
import { Magnetic } from "../shared/Magnetic";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0C0C] pt-20">
      


      <Section id="home" className="relative z-30 max-w-7xl mx-auto flex flex-col items-start px-6 md:px-12 w-full mt-10">
        
        {/* Staggered Content */}
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-white/5"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">Available for Hire</span>
          </motion.div>
          
          {/* Huge Typography Name */}
          <div className="flex flex-col mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold text-white leading-[0.9] tracking-tighter"
            >
              NGUYEN
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 leading-[0.9] tracking-tighter"
            >
              TRIEU
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold text-primary leading-[0.9] tracking-tighter"
            >
              HOANG
            </motion.h1>
          </div>

          {/* Subheading Roles */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 text-sm md:text-lg font-medium text-gray-400 mb-10"
          >
            {PERSONAL_INFO.roles.map((role, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className={idx === 0 ? "text-white" : ""}>{role}</span>
                {idx < PERSONAL_INFO.roles.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />}
              </div>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-400 text-base md:text-xl max-w-2xl mb-12 leading-relaxed font-light"
          >
            {PERSONAL_INFO.hero}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Magnetic strength={0.4}>
              <a
                href="/assets/Hoang-Nguyen-Trieu-TopCV.vn-010726.100236.pdf"
                target="_blank"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 hover-target overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download CV</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="#projects"
                className="group relative flex items-center justify-center px-8 py-4 glass-panel text-white rounded-full font-bold hover:bg-white/5 transition-all duration-300 hover-target"
              >
                View Projects
              </a>
            </Magnetic>

            <div className="flex items-center gap-4 ml-4">
              {SOCIAL_LINKS.slice(0, 2).map((social, idx) => (
                <Magnetic key={idx} strength={0.2}>
                  <a
                    href={social.url}
                    target="_blank"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors hover-target"
                  >
                    <social.icon size={20} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>



      </Section>
    </div>
  );
}
