"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function ExpertiseBento() {
  const { t } = useLanguage();

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
      technologies: ["Laravel", "MySQL", "API REST", "SQL"],
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
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section id="expertise" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24">
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

      {/* Bento Grid */}
      <div className="bento-grid">
        {expertise.map((item, i) => (
          <motion.div
            key={item.gridArea}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ 
              y: -8,
              scale: 1.01,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className={`bento-card h-full bento-${item.gridArea} cursor-pointer group`}
          >
            {/* Card inner glow on hover */}
            <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

            {/* Top accent line for featured card */}
            {item.accent && (
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            )}

            <div className="relative z-10 flex flex-col h-full">
              {/* Card Header */}
              <div className="mb-auto">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-accent/80 block mb-3">
                  {item.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] font-semibold tracking-tight mb-4 group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-light max-w-sm">
                  {item.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-foreground/10 text-foreground/50 group-hover:border-accent/30 group-hover:text-foreground/70 transition-all duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Large decorative number */}
            <span className="absolute -bottom-4 -right-2 text-[8rem] md:text-[10rem] font-[family-name:var(--font-playfair)] font-bold leading-none text-foreground/[0.03] select-none pointer-events-none">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Stack Technique (Défilement Infini) ── */}
      <motion.div
        className="mt-24 md:mt-32 overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-4 mb-12 px-0">
          <div className="w-8 h-[1px] bg-accent/50" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/50">
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
                { n: "Antigravity", i: "rocket" },
                { n: "Electron", i: "electron" },
                { n: "Git", i: "git" },
                { n: "GitHub", i: "github" },
                { n: "VS Code", i: "vscode" },
                { n: "Resend", i: "resend" },
                { n: "PostgreSQL", i: "postgres" },
                { n: "MySQL", i: "mysql" },
                // Duplicate for loop
                { n: "Docker", i: "docker" },
                { n: "Antigravity", i: "rocket" },
                { n: "Electron", i: "electron" },
                { n: "Git", i: "git" },
                { n: "GitHub", i: "github" },
                { n: "VS Code", i: "vscode" },
                { n: "Resend", i: "resend" },
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
            { name: "Automate Cybersecurity Tasks with Python", org: "Google — Coursera" },
            { name: "Fondamentaux du marketing numérique", org: "Google — L'Atelier Numérique" },
            { name: "Google Cybersecurity", org: "Coursera — Certification professionnelle" },
            { name: "Google Project Management", org: "Coursera — Certification professionnelle" },
            { name: "Data Engineering Essentials", org: "IBM — Coursera" },
            { name: "Agile Project Management", org: "Coursera — Formation certifiante" },
          ].map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-3 py-3 px-4 rounded-xl border border-foreground/5 hover:border-accent/20 transition-colors duration-500"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
              <div>
                <span className="text-xs md:text-sm font-medium text-foreground/70 block">{cert.name}</span>
                <span className="text-[9px] md:text-[10px] text-foreground/35">{cert.org}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
