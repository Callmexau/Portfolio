"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen bg-outer-bg overflow-x-hidden">
      {/* ── Navbar Fixe au Sommet ── */}
      <div className="w-full bg-background border-b border-foreground/5 z-[100] px-4 md:px-8 py-3 sticky top-0">
        <Navbar />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-6xl bg-background rounded-[2.5rem] border border-foreground/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
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
                {t('about_tagline')}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-[1.1] mb-4">
                  Exaucé Jackson L.
                </h1>
                
                <h2 className="text-lg md:text-2xl text-accent font-light tracking-wide italic">
                  {t('about_subtitle')}
                </h2>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-accent/20 shadow-2xl relative z-10 bg-foreground/5">
                  <Image 
                    src="/Xau.jpeg" 
                    alt="Exaucé Jackson L." 
                    fill
                    className="object-cover transition-all duration-700" 
                    sizes="(max-width: 768px) 128px, 160px"
                    priority
                  />
                </div>
                {/* Decorative frames */}
                <div className="absolute -inset-2 border border-accent/10 rounded-2xl -z-10 -rotate-6" />
                <div className="absolute -inset-2 border border-foreground/5 rounded-2xl -z-20 rotate-3" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light">
                  {t('about_bio_1')}
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light">
                  {t('about_bio_2')}
                </p>
              </div>
            </div>

            {/* Signature & Actions Section */}
            <div className="mt-24 pt-12 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 md:gap-16 flex-1 w-full px-4 md:px-0">
                {/* Signature */}
                <div className="flex items-center justify-center">
                  <Image src="/logo-white.jpg.jpeg" alt="Signature" width={100} height={40} className="h-6 md:h-10 w-auto dark:hidden scale-[2] md:scale-[2.5] origin-center" />
                  <Image src="/logo-black.jpg.jpeg" alt="Signature" width={100} height={40} className="h-6 md:h-10 w-auto hidden dark:block scale-[2] md:scale-[2.5] origin-center" />
                </div>
                
                {/* The Joker */}
                <div className="flex items-center justify-center">
                  <Image src="/The-White.png" alt="The Joker" width={80} height={40} className="h-8 md:h-10 w-auto dark:hidden scale-[1.3] md:scale-[1.8] origin-center" />
                  <Image src="/The-Black.png" alt="The Joker" width={80} height={40} className="h-8 md:h-10 w-auto hidden dark:block scale-[1.3] md:scale-[1.8] origin-center" />
                </div>

                {/* Arkan */}
                <div className="flex items-center justify-center">
                  <Image src="/Arkan-White.PNG" alt="Arkan" width={100} height={40} className="h-6 md:h-10 w-auto dark:hidden scale-[1.3] md:scale-[1.8] origin-center" />
                  <Image src="/Arkan-Black.PNG" alt="Arkan" width={100} height={40} className="h-6 md:h-10 w-auto hidden dark:block scale-[1.3] md:scale-[1.8] origin-center" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <a 
                  href="/CV Jackson Lountadiladio.pdf" 
                  download
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent border border-accent/20 px-8 py-4 rounded-full hover:bg-accent hover:text-background transition-all duration-500 shadow-lg shadow-accent/5"
                >
                  {t('about_cv')}
                </a>

                <div className="flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/exaucéjacksonl" target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="https://github.com/Callmexau" target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </a>
                  <a href="mailto:exaucejacksonl@gmail.com" className="text-foreground/30 hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </a>
                </div>
              </div>
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
