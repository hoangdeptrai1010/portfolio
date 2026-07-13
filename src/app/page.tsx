import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";

import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Dashboard } from "@/components/sections/Dashboard";
import { Certificates } from "@/components/sections/Certificates";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-[#2563EB]/30 selection:text-white bg-[#0C0C0C]">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Dashboard />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
