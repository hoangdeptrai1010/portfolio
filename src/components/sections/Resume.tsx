"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data";
import { Section } from "../shared/Section";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

export function Resume() {
  const workExperience = EXPERIENCE.filter((exp) => exp.type === "work");
  const education = EXPERIENCE.filter((exp) => exp.type === "education");

  return (
    <Section id="resume" title="Experience & Education" subtitle="My professional history and academic background." className="bg-[#0C0C0C] pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-7xl mx-auto">
        
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-[#2563EB]/10 text-primary">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Work Experience</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-6 before:w-px before:bg-white/10">
            {workExperience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[18px] top-1.5 w-3 h-3 rounded-full bg-primary border-4 border-[#0C0C0C] z-10" />

                <div className="glass-panel p-8 rounded-3xl border border-white/5">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">{exp.title}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{exp.organization}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8]">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-6 before:w-px before:bg-white/10">
            {education.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[18px] top-1.5 w-3 h-3 rounded-full bg-[#38BDF8] border-4 border-[#0C0C0C] z-10" />

                <div className="glass-panel p-8 rounded-3xl border border-white/5">
                  <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider block mb-2">{exp.title}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{exp.organization}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
