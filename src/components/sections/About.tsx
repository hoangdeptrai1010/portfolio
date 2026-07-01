"use client";

import { PERSONAL_INFO } from "@/data";
import { Section } from "../shared/Section";

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Why Data Analytics?" className="py-32 border-b border-white/5 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto relative">
        <div className="space-y-6 text-gray-300 leading-relaxed max-w-2xl text-lg md:text-xl font-light">
          {PERSONAL_INFO.about.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
