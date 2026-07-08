"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/data";
import { Section } from "../shared/Section";

export function Skills() {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="The robust technologies I use to architect solutions." className="bg-[#0C0C0C]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {TECH_STACK.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl hover-target border-t border-white/5 relative overflow-hidden group flex flex-col h-full"
          >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">{group.category}</h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10 flex-grow">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-3 relative z-10">
              {group.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300 text-sm">
                  <skill.icon size={14} className="text-primary" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
