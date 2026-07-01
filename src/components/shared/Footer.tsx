import { SOCIAL_LINKS } from "@/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-10 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-white hover-target">
            <span className="text-[#2563EB]">N</span>TH<span className="text-[#38BDF8]">.</span>
          </a>
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Nguyen Trieu Hoang. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 hover-target"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
