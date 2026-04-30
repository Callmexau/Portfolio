"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ScreenshotCarousel({ screens, title }: { screens: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + screens.length) % screens.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % screens.length);
  };

  const count = screens.length;
  const label = count === 1 ? "1 aperçu" : `${count} aperçus`;

  return (
    <div className="mt-5">
      {/* Toggle button */}
      <button
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
        className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-foreground/40 hover:text-accent transition-colors duration-300"
      >
        <Images className="w-3 h-3" />
        <span>{label}</span>
        <span
          className="inline-block transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>

      {/* Carousel — conditionally rendered, no height animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 rounded-xl overflow-hidden border border-foreground/10 relative group/carousel bg-foreground/[0.02]"
        >
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={screens[index]}
              src={screens[index]}
              alt={`${title} — aperçu ${index + 1}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="w-full h-44 md:h-60 object-contain"
            />
          </AnimatePresence>

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

          {/* Dot indicators */}
          {count > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                  className={`h-1 rounded-full transition-all duration-300 ${i === index ? "bg-accent w-5" : "bg-foreground/30 w-1.5"}`}
                />
              ))}
            </div>
          )}

          {/* Counter badge */}
          {count > 1 && (
            <div className="absolute top-2 right-2 text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-background/70 backdrop-blur-sm border border-foreground/10 text-foreground/40 z-10">
              {index + 1} / {count}
            </div>
          )}

          {/* Navigation arrows */}
          {count > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:border-accent/60 transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-foreground/60" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:border-accent/60 transition-all duration-300 z-10"
              >
                <ChevronRight className="w-3.5 h-3.5 text-foreground/60" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Utopia",
      category: t('proj_utopia_cat'),
      description: t('proj_utopia_desc'),
      stack: ["Laravel", "PHP", "MySQL"],
      year: "2026",
      link: "https://utopiaplan.infinityfreeapp.com",
      linkType: "external" as const,
      screens: [] as string[],
    },
    {
      title: "Focus",
      category: t('proj_focus_cat'),
      description: t('proj_focus_desc'),
      stack: ["PHP", "HTML / CSS", "MySQL"],
      year: "2026",
      link: null,
      linkType: "none" as const,
      screens: ["/Screen/Focus.png", "/Screen/Focus2.png", "/Screen/Focus3.png", "/Screen/Focus4.png"],
    },
    {
      title: "Gestion Stages - CIMBURKINA",
      category: t('proj_cimburkina_cat'),
      description: t('proj_cimburkina_desc'),
      stack: ["Laravel", "PHP", "MySQL"],
      year: "2026",
      link: null,
      linkType: "none" as const,
      screens: ["/Screen/CimStage.png", "/Screen/CimStage2.png", "/Screen/CimStage3.png"],
    },
    {
      title: "CimConvert",
      category: t('proj_cimconvert_cat'),
      description: t('proj_cimconvert_desc'),
      stack: ["Electron", "JavaScript", "Node.js"],
      year: "2026",
      link: null,
      linkType: "none" as const,
      screens: ["/Screen/CimConvert.png"],
    },
    {
      title: "FlowConvert",
      category: t('proj_flow_cat'),
      description: t('proj_flow_desc'),
      stack: ["Electron", "JavaScript", "Node.js"],
      year: "2025",
      link: "https://github.com/Callmexau/FlowConvert/releases/tag/v1.0.0",
      linkType: "github" as const,
      screens: [] as string[],
    },
    {
      title: "Gestion Stages - MCCAT",
      category: t('proj_mccat_cat'),
      description: t('proj_mccat_desc'),
      stack: ["Laravel", "PHP", "MySQL"],
      year: "2025",
      link: null,
      linkType: "none" as const,
      screens: ["/Screen/MCCAT.png", "/Screen/MCCAT2.png"],
    },
    {
      title: "Mémorial Thomas Sankara",
      category: t('proj_sankara_cat'),
      description: t('proj_sankara_desc'),
      stack: ["WordPress", "PHP", "CSS"],
      year: "2025",
      link: "https://memorialsankara.bf",
      linkType: "external" as const,
      screens: [] as string[],
    },
  ];

  return (
    <section id="realisations" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <motion.div
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-foreground/50">
            {t('projects_tagline')}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-[1.15]">
          {t('projects_title')}
        </h2>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-0">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative border-t border-foreground/10 py-10 md:py-14 transition-all duration-700"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-transform duration-500 group-hover:translate-x-2">
              {/* Year + Category */}
              <div className="flex flex-col gap-1 md:w-48 shrink-0 pt-1">
                <span className="text-[10px] font-mono text-accent tracking-wider">{project.year}</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/30 font-medium">{project.category}</span>
              </div>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-2xl md:text-4xl font-[family-name:var(--font-playfair)] font-bold tracking-tight group-hover:text-accent/90 transition-colors duration-500">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full border border-foreground/10 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-500 group/btn mt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.linkType === 'github' ? (
                        <GithubIcon className="w-4 h-4 md:w-5 md:h-5 text-foreground/40 group-hover/btn:text-accent" />
                      ) : (
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-foreground/40 group-hover/btn:text-accent" />
                      )}
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[9px] md:text-[10px] uppercase tracking-widest text-foreground/40 font-light border border-foreground/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-light max-w-xl">
                  {project.description}
                </p>

                {/* Screenshot carousel toggle */}
                {project.screens.length > 0 && (
                  <ScreenshotCarousel screens={project.screens} title={project.title} />
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
