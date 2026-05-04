"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import { ExternalLink } from "lucide-react";

export function ExpertiseBento() {
  const { t } = useLanguage();
  const [showAllCerts, setShowAllCerts] = useState(false);

  const expertise = [
    {
      title: t('exp_web_title'),
      subtitle: t('exp_web_subtitle'),
      description: t('exp_web_desc'),
      technologies: ["WordPress", "PHP", "SEO", "UI/UX"],
      gridArea: "arch",
      accent: true,
    },
    {
      title: t('exp_dev_title'),
      subtitle: t('exp_dev_subtitle'),
      description: t('exp_dev_desc'),
      technologies: ["Laravel", "PostgreSQL", "MySQL", "API REST", "SQL"],
      gridArea: "devops",
      accent: false,
    },
    {
      title: t('exp_mobile_title'),
      subtitle: t('exp_mobile_subtitle'),
      description: t('exp_mobile_desc'),
      technologies: ["React Native", "Flutter", "Firebase"],
      gridArea: "desktop",
      accent: false,
    },
    {
      title: t('exp_desktop_title'),
      subtitle: t('exp_desktop_subtitle'),
      description: t('exp_desktop_desc'),
      technologies: ["Electron", "JavaScript", "Node.js"],
      gridArea: "method",
      accent: false,
    },
    {
      title: t('exp_modeling_title'),
      subtitle: t('exp_modeling_subtitle'),
      description: t('exp_modeling_desc'),
      technologies: ["StarUML", "GanttProject", "UML", "Merise", "Agile", "2TUP", "Cascade", "Cycle en V"],
      gridArea: "modeling",
      accent: false,
    },
  ];

  return (
    <section id="expertise" className="w-full py-12 md:py-16 px-6 md:px-10 lg:px-16">
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
            {t('expertise_tagline')}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-[1.15]">
          {t('expertise_title')}
        </h2>
      </motion.div>

      {/* Expertise List */}
      <div className="flex flex-col border-t border-foreground/10">
        {expertise.map((item, i) => (
          <motion.div
            key={item.gridArea}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-8 md:py-12 border-b border-foreground/10 hover:bg-foreground/[0.02] px-4 md:px-8 -mx-4 md:-mx-8 transition-colors duration-500"
          >
            {/* Title & Subtitle */}
            <div className="md:w-1/3 shrink-0">
              <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-medium mb-3 block opacity-80">{item.subtitle}</span>
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] font-bold tracking-tight group-hover:text-accent transition-colors duration-500">{item.title}</h3>
            </div>
            
            {/* Description & Tech */}
            <div className="md:w-2/3 flex flex-col">
              <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-light mb-6 max-w-2xl">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="text-[8px] md:text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-foreground/10 bg-background text-foreground/40 group-hover:border-accent/20 group-hover:text-accent/70 transition-all duration-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Marquee Section */}
      <motion.div
        className="mt-16 md:mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-[1px] bg-foreground/10" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/20">
            {t('expertise_stack')}
          </span>
        </div>

        {/* Marquee Container */}
        <div className="flex flex-col gap-6 md:gap-10">
          {/* Row 1: Moving Left */}
          <div className="relative flex overflow-hidden group">
            <motion.div
              className="flex whitespace-nowrap gap-4 pr-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[
                { n: "Laravel", i: "laravel" },
                { n: "PHP", i: "php" },
                { n: "JavaScript", i: "js" },
                { n: "TypeScript", i: "ts" },
                { n: "Python", i: "py" },
                { n: "Flutter", i: "flutter" },
                { n: "SQL", i: "mysql" },
                { n: "HTML", i: "html" },
                { n: "CSS", i: "css" },
                { n: "WordPress", i: "wordpress" },
                // Duplicate for loop
                { n: "Laravel", i: "laravel" },
                { n: "PHP", i: "php" },
                { n: "JavaScript", i: "js" },
                { n: "TypeScript", i: "ts" },
                { n: "Python", i: "py" },
                { n: "Flutter", i: "flutter" },
                { n: "SQL", i: "mysql" },
                { n: "HTML", i: "html" },
                { n: "CSS", i: "css" },
                { n: "WordPress", i: "wordpress" }
              ].map((t, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border border-accent/20 bg-accent/[0.03] backdrop-blur-sm min-w-[120px] md:min-w-[140px] hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 group/item"
                >
                  <img 
                    src={`https://skillicons.dev/icons?i=${t.i}`} 
                    alt={t.n} 
                    className="w-8 h-8 md:w-10 md:h-10 transition-all duration-500 group-hover/item:filter-gold" 
                  />
                  <span className="text-[10px] md:text-xs font-medium text-foreground/70 uppercase tracking-wider">{t.n}</span>
                </div>
              ))}
            </motion.div>
            {/* Fade effect edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          </div>

          {/* Row 2: Moving Right */}
          <div className="relative flex overflow-hidden group">
            <motion.div
              className="flex whitespace-nowrap gap-4 pr-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[
                { n: "Docker", i: "docker" },
                { n: "Electron", i: "electron" },
                { n: "Git", i: "git" },
                { n: "GitHub", i: "github" },
                { n: "VS Code", i: "vscode" },
                { n: "PostgreSQL", i: "postgres" },
                { n: "MySQL", i: "mysql" },
                // Duplicate for loop
                { n: "Docker", i: "docker" },
                { n: "Electron", i: "electron" },
                { n: "Git", i: "git" },
                { n: "GitHub", i: "github" },
                { n: "VS Code", i: "vscode" },
                { n: "PostgreSQL", i: "postgres" },
                { n: "MySQL", i: "mysql" }
              ].map((t, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm min-w-[120px] md:min-w-[140px] hover:border-accent/40 hover:text-accent transition-all duration-300 group/item"
                >
                  <img 
                    src={`https://skillicons.dev/icons?i=${t.i}`} 
                    alt={t.n} 
                    className="w-8 h-8 md:w-10 md:h-10 transition-all duration-500 group-hover/item:filter-gold" 
                  />
                  <span className="text-[10px] md:text-xs font-medium text-foreground/50 group-hover/item:text-accent uppercase tracking-wider transition-colors">{t.n}</span>
                </div>
              ))}
            </motion.div>
            {/* Fade effect edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="mt-16 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-accent/50" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            {t('expertise_certs')}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Automate Cybersecurity Tasks with Python", org: "Google — Coursera", file: "/certs/automate-cybersecurity.pdf" },
            { name: "Fondamentaux du marketing numérique", org: "Google — L'Atelier Numérique", file: "/certs/marketing-numerique.pdf" },
            { name: "Google Cybersecurity", org: "Coursera — Certification professionnelle", file: "/certs/google-cybersecurity.pdf" },
            { name: "Google Project Management", org: "Coursera — Certification professionnelle", file: "/certs/google-project-management.pdf" },
            { name: "Data Engineering Essentials", org: "IBM — Coursera", file: "/certs/data-engineering.pdf" },
            { name: "Agile Project Management", org: "Coursera — Formation certifiante", file: "/certs/agile-project-management.pdf" },
          ].slice(0, showAllCerts ? undefined : 4).map((cert) => (
            <a
              key={cert.name}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 py-3 px-4 rounded-xl border border-foreground/5 hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-500 cursor-pointer"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0 group-hover:bg-accent transition-colors duration-500" />
              <div className="flex-1">
                <span className="text-xs md:text-sm font-medium text-foreground/70 block group-hover:text-accent transition-colors duration-500">{cert.name}</span>
                <span className="text-[9px] md:text-[10px] text-foreground/35">{cert.org}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-foreground/20 group-hover:text-accent/60 mt-1 shrink-0 transition-colors duration-500" />
            </a>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAllCerts(!showAllCerts)}
            className="group flex items-center gap-4 px-6 py-3 rounded-full border border-accent/20 hover:bg-accent transition-all duration-500 shadow-lg shadow-accent/5"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-accent group-hover:text-background transition-colors duration-500">
              {showAllCerts ? "Voir moins" : "Voir plus"}
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
