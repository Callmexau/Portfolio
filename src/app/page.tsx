"use client";
import { useState, useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { ExpertiseBento } from "@/components/ExpertiseBento";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { motion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <div className="flex flex-col min-h-screen bg-outer-bg overflow-x-hidden">
      {/* ── Navbar Fixe au Sommet ── */}
      <div className="w-full bg-background border-b border-foreground/5 z-[100] px-4 md:px-8 py-3 sticky top-0">
        <Navbar />
      </div>

      <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        {/* ── Hero Card ── */}
        <div className="w-full min-h-[calc(100vh-140px)] bg-background rounded-[2rem] border border-foreground/10 relative overflow-hidden flex flex-col shadow-2xl shadow-black/5">

        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">

          {/* Left Column: Typography */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-0 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 md:w-12 h-[1px] bg-accent" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/40 whitespace-nowrap">
                  {t('hero_tagline')}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-[1.1] mb-2 whitespace-nowrap">
                Exaucé Jackson L.
              </h1>

              <div className="flex flex-col mb-4 md:mb-5">
                <h2 className="text-sm sm:text-lg md:text-xl text-accent font-light tracking-wide italic mb-3">
                  {t('hero_title')}
                </h2>
                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-foreground/40 font-medium">
                  {t('hero_founder')}
                </h3>
              </div>

              <p className="max-w-md text-[11px] sm:text-xs md:text-sm text-foreground/50 leading-relaxed font-light mb-8">
                {t('hero_description')}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#expertise"
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/20 hover:border-accent transition-colors duration-500 bg-transparent"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">{t('hero_cta_expertise')}</span>
                  <div className="w-6 h-[1px] bg-foreground/30 group-hover:bg-accent transition-all duration-500 relative">
                    <ArrowRight className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 text-transparent group-hover:text-accent transition-colors duration-500" />
                  </div>
                </a>

                <a
                  href="/CV Jackson Lountadiladio.pdf"
                  download
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/20 hover:border-accent hover:text-accent transition-all duration-500 bg-transparent"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">{t('hero_cta_cv')}</span>
                </a>
              </div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <div className="absolute left-12 bottom-8 hidden md:flex items-center gap-4 rotate-[-90deg] origin-left">
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-foreground/40">Arkan.</span>
              <div className="w-12 h-[1px] bg-foreground/20 relative">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full"
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Visual + Animation */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-foreground/[0.01]">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-3xl" />

            <motion.div
              className="relative w-full h-full flex items-center justify-center pointer-events-none select-none opacity-[0.12] dark:opacity-[0.18]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
                <svg 
                  viewBox="0 0 500 500" 
                  className="w-[85%] h-[85%] text-foreground"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* E Serif - Clair et élégant */}
                  <motion.path
                    d="M150 150 H280 M150 150 V320 H280 M150 235 H240 M140 150 H160 M140 320 H160" 
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="butt"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      duration: 4, 
                      ease: "easeInOut", 
                      repeat: Infinity, 
                      repeatType: "loop",
                      repeatDelay: 2
                    }}
                  />
                  {/* J Serif - Clair et élégant */}
                  <motion.path
                    d="M320 150 V300 Q320 360 250 360 H220 M300 150 H340"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="butt"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      duration: 4, 
                      ease: "easeInOut", 
                      delay: 2,
                      repeat: Infinity, 
                      repeatType: "loop",
                      repeatDelay: 2
                    }}
                  />
                </svg>
            </motion.div>

            {/* Floating Gold Elements - Plus discrets */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 border border-accent/10 rounded-full"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 45, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-accent/5 to-transparent rounded-full backdrop-blur-md border border-accent/5 opacity-40"
              animate={{
                y: [0, 30, 0],
                x: [0, -20, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden md:flex items-center gap-6 z-20">
            <a href="https://www.linkedin.com/in/exaucéjacksonl" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-colors" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://github.com/Callmexau" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-colors" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a href="mailto:exaucejacksonl@gmail.com" className="text-foreground/40 hover:text-accent transition-colors" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Expertise Section ── */}
      <div className="w-full bg-background rounded-[1.5rem] md:rounded-[2.5rem] border border-foreground/10 relative overflow-hidden shadow-2xl shadow-black/5">
        <ExpertiseBento />
      </div>

      {/* ── Réalisations Section ── */}
      <div className="w-full bg-background rounded-[1.5rem] md:rounded-[2.5rem] border border-foreground/10 relative overflow-hidden shadow-2xl shadow-black/5">
        <ProjectsSection limit={3} />
      </div>

      {/* ── Contact Section ── */}
      <div className="w-full bg-background rounded-[1.5rem] md:rounded-[2.5rem] border border-foreground/10 relative overflow-hidden shadow-2xl shadow-black/5">
        <ContactSection />
      </div>

      {/* ── Final Footer ── */}
      <footer className="w-full py-12 flex flex-col items-center gap-6">
        <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">
          © {new Date().getFullYear()} — Exaucé Jackson L.
        </div>
      </footer>
      </div>
    </div>
  );
}
