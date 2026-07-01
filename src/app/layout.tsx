import type { Metadata } from "next";
import { Space_Grotesk, Figtree } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const figtree = Figtree({ 
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nguyen Trieu Hoang | Data Analyst",
  description: "Professional portfolio of Nguyen Trieu Hoang, a Data Analyst specializing in business intelligence and data visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${figtree.variable} font-sans antialiased bg-[#0C0C0C] text-[#F8FAFC] selection:bg-[#2563EB]/30 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
