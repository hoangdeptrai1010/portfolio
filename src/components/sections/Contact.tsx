"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data";
import { Section } from "../shared/Section";

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Feel free to reach out via email, phone, or any of my social profiles." className="bg-[#0C0C0C] pb-32">
      <div className="max-w-3xl mx-auto mt-12 glass-panel rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden text-center">
        
        {/* Decorative blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2563EB]/10 blur-[120px] -z-10" />

        <div className="relative z-10 max-w-xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-gray-400 mb-12 leading-relaxed">
            I am actively looking for Data Analyst and Business Intelligence positions. If you have an opportunity or just want to connect, feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#2563EB]/50 transition-colors group hover-target"
            >
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</div>
                <div className="text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">{PERSONAL_INFO.email}</div>
              </div>
            </a>

            <a 
              href={`tel:${PERSONAL_INFO.phone}`} 
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#2563EB]/50 transition-colors group hover-target"
            >
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone</div>
                <div className="text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">{PERSONAL_INFO.phone}</div>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 mb-12">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#38BDF8]">
              <MapPin size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Location</div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Find me on social media</div>
            <div className="flex justify-center gap-6">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  className="w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors hover-target shadow-md border border-white/5"
                  title={social.name}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
