"use client";

import Image from "next/image";

const MARQUEE_IMAGES = [
  "/assets/placeholder-amazon.jpg",
  "/assets/placeholder-hospital.jpg",
  "/assets/placeholder-amazon.jpg",
  "/assets/placeholder-hospital.jpg",
  "/assets/placeholder-amazon.jpg",
];

export function Marquee() {
  return (
    <div className="w-full bg-[#0C0C0C] py-20 overflow-hidden relative border-y border-white/5">
      
      {/* Edge Gradients for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-fit animate-marquee">
        {/* First set of images */}
        <div className="flex shrink-0 items-center gap-8 px-4">
          {MARQUEE_IMAGES.map((src, idx) => (
            <div key={`set1-${idx}`} className="relative w-[400px] h-[250px] rounded-2xl overflow-hidden glass-card group">
              <Image 
                src={src} 
                alt="Project Preview" 
                fill 
                sizes="400px"
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 saturate-50 group-hover:saturate-100"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for infinite scroll effect */}
        <div className="flex shrink-0 items-center gap-8 px-4">
          {MARQUEE_IMAGES.map((src, idx) => (
            <div key={`set2-${idx}`} className="relative w-[400px] h-[250px] rounded-2xl overflow-hidden glass-card group">
              <Image 
                src={src} 
                alt="Project Preview" 
                fill 
                sizes="400px"
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 saturate-50 group-hover:saturate-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
