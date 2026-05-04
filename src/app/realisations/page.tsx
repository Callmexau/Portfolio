"use client";

import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RealisationsPage() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen bg-outer-bg overflow-x-hidden">
      {/* ── Navbar Fixe au Sommet ── */}
      <div className="w-full bg-background border-b border-foreground/5 z-[100] px-4 md:px-8 py-3 sticky top-0">
        <Navbar />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-2 md:p-4 lg:p-6">
        <div className="w-full bg-background rounded-[1.5rem] md:rounded-[2.5rem] border border-foreground/10 p-6 md:p-10 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground/40 hover:text-accent transition-colors mb-12 group relative z-20"
          >
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            {t('about_back')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-foreground/50">
                {t('projects_all_tagline')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-[1.1] mb-12">
              {t('projects_title')}
            </h1>

            <div className="border-t border-foreground/5 -mx-6 md:-mx-12 lg:-mx-24">
              <ProjectsSection hideHeader />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </main>

      <footer className="w-full py-12 flex flex-col items-center gap-6">
        <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">
          © {new Date().getFullYear()} — Exaucé Jackson L.
        </div>
      </footer>
    </div>
  );
}
