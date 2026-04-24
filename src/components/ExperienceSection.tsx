"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experiences = [
  {
    role: "Ingénieur Logiciel & Technicien Support IT",
    company: "CIMBURKINA",
    location: "Burkina Faso",
    period: "Déc. 2025 — Mai 2026",
    type: "Stage — Niveau 1",
    description:
      "Conception et développement d'une plateforme de gestion des stages. Support de proximité, maintenance et gestion du parc informatique. Sensibilisation du personnel aux bases de la sécurité informatique.",
    highlights: [
      "Plateforme de gestion (Laravel)",
      "App Desktop (Electron)",
      "Support IT & Parc info",
      "Sécurité informatique",
    ],
  },
  {
    role: "Ingénieur Logiciel Stagiaire",
    company: "Ministère de la Communication, de la Culture, des Arts et du Tourisme (MCCAT)",
    location: "Burkina Faso",
    period: "Avr. 2025 — Juin 2025",
    type: "Stage",
    description:
      "Conception, développement et intégration d'une plateforme de gestion des stages. Participation à la création du site web du Mémorial Thomas Sankara. Réalisation de tests fonctionnels sur des logiciels.",
    highlights: [
      "Plateforme de gestion (Laravel)",
      "Site Mémorial Sankara (WordPress)",
      "Modules de suivi",
      "Tests fonctionnels",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24">
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
            Parcours professionnel
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-[1.15]">
          Expérience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-[9rem] top-0 bottom-0 w-[1px] bg-foreground/10 hidden md:block" />

        <div className="flex flex-col gap-16 md:gap-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col md:flex-row gap-4 md:gap-12"
            >
              {/* Period label */}
              <div className="md:w-[9rem] shrink-0 relative">
                <span className="text-[10px] md:text-xs font-mono text-accent tracking-wider whitespace-nowrap">
                  {exp.period}
                </span>
                {/* Timeline dot */}
                <div className="absolute -right-[0.3125rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-foreground/20 bg-background group-hover:border-accent transition-colors duration-500 hidden md:block" />
              </div>

              {/* Content */}
              <div className="flex-1 md:pl-12">
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] font-semibold tracking-tight group-hover:text-accent transition-colors duration-500">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/40">
                    {exp.company}
                  </span>
                  <span className="text-foreground/15">·</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-foreground/30">
                    {exp.type}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-light mt-4 max-w-lg">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-foreground/8 text-foreground/40 group-hover:border-accent/25 group-hover:text-foreground/60 transition-all duration-500"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CV Download Section */}
      <motion.div
        className="mt-24 md:mt-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-[1px] bg-accent/50" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            Curriculum Vitae
          </span>
        </div>

        <a
          href="/cv.pdf"
          download
          className="group relative flex items-center gap-6 md:gap-8 py-8 px-8 md:px-12 rounded-2xl border border-foreground/10 hover:border-accent/40 transition-all duration-500 bg-accent/[0.02] hover:bg-accent/[0.05]"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl border border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 shrink-0">
            <Download className="w-6 h-6 md:w-7 md:h-7 text-accent/70 group-hover:text-accent group-hover:translate-y-0.5 transition-all duration-500" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-[family-name:var(--font-playfair)] font-semibold tracking-tight group-hover:text-accent transition-colors duration-500">
              Télécharger mon CV
            </h4>
            <p className="text-[10px] md:text-xs text-foreground/50 mt-1 uppercase tracking-[0.15em]">
              Format PDF — Parcours complet, formation et compétences
            </p>
          </div>
          <div className="ml-auto hidden md:block">
            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/30 group-hover:text-accent/60 transition-colors duration-500">PDF</span>
          </div>
        </a>
      </motion.div>

      {/* Languages & Soft Skills */}
      <motion.div
        className="mt-16 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/40 block mb-4">Langues</span>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs text-foreground/60">Français — Natif</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent/50" />
              <span className="text-xs text-foreground/60">Anglais — Courant</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/40 block mb-4">Soft Skills</span>
          <div className="flex flex-wrap gap-2">
            {["Adaptabilité", "Polyvalence", "Créativité", "Travail d'équipe", "Autonomie"].map((skill) => (
              <span
                key={skill}
                className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-foreground/8 text-foreground/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        className="mt-24 md:mt-32 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-xs md:text-sm text-foreground/40 font-light mb-6 max-w-md">
          Intéressé par une collaboration ? Discutons de votre prochain projet.
        </p>
        <a
          href="mailto:exaucejacksonl@gmail.com"
          className="group flex items-center gap-4 md:gap-6 px-6 py-3 md:px-8 md:py-4 rounded-full border border-accent/40 hover:border-accent hover:bg-accent/5 transition-all duration-500"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-accent">
            Me contacter
          </span>
        </a>

        {/* Copyright */}
        <div className="mt-16 md:mt-24 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/25">
          © {new Date().getFullYear()} — J. Exaucé Jackson | Arkan.
        </div>
      </motion.div>
    </section>
  );
}
