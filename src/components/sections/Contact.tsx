"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/data";
import { Section } from "../shared/Section";

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's build the future of scalable systems." className="bg-[#0C0C0C] pb-32">
      <div className="max-w-4xl mx-auto mt-12 glass-panel rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
        
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-[100px] -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Connect with me</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer hover-target">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-medium group-hover:text-[#38BDF8] transition-colors">{PERSONAL_INFO.email}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer hover-target">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Location</div>
                  <div className="text-white font-medium group-hover:text-[#38BDF8] transition-colors">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-2">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all hover-target"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-2">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all hover-target"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-2">Message</label>
              <textarea 
                rows={4}
                placeholder="Hello..."
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none hover-target"
              ></textarea>
            </div>
            
            <button className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform duration-300 hover-target shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

        </div>
      </div>
    </Section>
  );
}
