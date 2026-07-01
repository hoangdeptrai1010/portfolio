"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/data";
import { Section } from "../shared/Section";

export function Skills() {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="The robust technologies I use to architect solutions." className="bg-[#0C0C0C]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {Object.entries(TECH_STACK).map(([category, skills], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl hover-target border-t border-white/5 relative overflow-hidden group"
          >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
            
            <div className="space-y-6 relative z-10">
              {skills.map((skill, i) => (
                <div key={i} className="group/skill">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 text-gray-300 group-hover/skill:text-white transition-colors">
                      <skill.icon size={18} className="text-primary" />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{skill.proficiency}%</span>
                  </div>
                  {/* Animated Skill Bar */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
