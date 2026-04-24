"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "FlowConvert",
      category: t('proj_flow_cat'),
      description: t('proj_flow_desc'),
      stack: ["Electron", "JavaScript", "Node.js"],
      year: "2025",
      link: "https://github.com/Callmexau/FlowConvert/releases/tag/v1.0.0",
      linkType: "github" as const,
    },
    {
      title: "Utopia",
      category: t('proj_utopia_cat'),
      description: t('proj_utopia_desc'),
      stack: ["Laravel", "PHP", "MySQL"],
      year: "2026",
      link: "https://utopiaplan.infinityfreeapp.com",
      linkType: "external" as const,
    },
    {
      title: "Focus",
      category: t('proj_focus_cat'),
      description: t('proj_focus_desc'),
      stack: ["PHP", "HTML / CSS", "MySQL"],
      year: "2026",
      link: null,
      linkType: "none" as const,
    },
    {
      title: "Mémorial Thomas Sankara",
      category: t('proj_sankara_cat'),
      description: t('proj_sankara_desc'),
      stack: ["WordPress", "PHP", "CSS"],
      year: "2025",
      link: "https://memorialsankara.bf",
      linkType: "external" as const,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

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
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
              x: 10,
              backgroundColor: "rgba(184, 148, 30, 0.02)",
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative border-t border-foreground/10 py-10 md:py-16 cursor-pointer transition-all duration-700"
          >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative z-10 transition-transform duration-700 group-hover:translate-x-4">
                {/* Year + Category */}
                <div className="flex flex-col gap-1 md:w-48 shrink-0">
                  <span className="text-[10px] md:text-xs text-accent font-mono tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.year}
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/30 group-hover:text-foreground/50 transition-colors">
                    {project.category}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight group-hover:text-accent transition-all duration-700">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                       <span className="hidden lg:block text-[9px] uppercase tracking-[0.3em] text-accent font-semibold">{t('projects_discover')}</span>
                       {project.link && (
                        <div className="p-3 rounded-full border border-accent/30 text-accent">
                           {project.linkType === "github" ? <GithubIcon className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                        </div>
                       )}
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-foreground/40 leading-relaxed font-light mt-4 max-w-xl group-hover:text-foreground/70 transition-colors duration-700">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-foreground/5 bg-foreground/[0.02] text-foreground/30 group-hover:border-accent/20 group-hover:text-accent transition-all duration-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated background reveal */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute left-0 top-0 h-full w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
            </motion.article>
        ))}

        {/* Bottom border */}
        <div className="border-t border-foreground/10" />
      </div>
    </section>
  );
}
