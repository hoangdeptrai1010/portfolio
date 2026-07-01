"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CERTIFICATES } from "@/data";
import { Section } from "../shared/Section";
import { ExternalLink, Award } from "lucide-react";

export function Certificates() {
  return (
    <Section id="certificates" title="Credentials" subtitle="Verified expertise and continuous learning." className="bg-[#0C0C0C]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {CERTIFICATES.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card rounded-[2rem] overflow-hidden group hover-target border border-white/5"
          >
            <div className="p-8 relative z-10 bg-[#0C0C0C]/80 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8]">
                  <Award size={24} />
                </div>
                <span className="text-xs font-medium text-gray-500 border border-white/10 px-3 py-1 rounded-full">{cert.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-[#38BDF8] text-sm font-medium mb-4">{cert.issuer}</p>
              
              <div className="mt-4 pt-4 border-t border-white/10 flex-grow">
                <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-2">Skills Learned</p>
                <p className="text-sm text-gray-300 mb-6">{cert.skillsLearned}</p>
              </div>

              {cert.file && (
                <a href={cert.file} target="_blank" className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors text-sm w-fit">
                  <ExternalLink size={16} /> View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
