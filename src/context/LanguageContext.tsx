"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navbar
    nav_home: "Accueil",
    nav_projects: "Réalisations",
    nav_about: "À propos",
    nav_arkan: "Arkan.",
    nav_contact: "Contact",
    nav_expertise: "Expertise",
    nav_experience: "Expérience",
    nav_cv: "CV",
    
    // Hero
    hero_tagline: "The Architect of Quiet Power",
    hero_title: "Ingénieur logiciel & Architecte de solutions numériques",
    hero_founder: "Fondateur De Arkan.",
    hero_description: "Je conçois des systèmes durables — applications web, logiciels métier, plateformes. Chaque solution est pensée pour résoudre des problèmes réels et créer un impact mesurable.",
    hero_cta_expertise: "Expertise",
    hero_cta_cv: "Télécharger CV",
    
    // Expertise Bento
    expertise_tagline: "Compétences clés",
    expertise_title: "Domaines d'expertise",
    expertise_stack: "Stack Technique",
    expertise_certs: "Certifications",
    
    exp_web_title: "Création de Sites Web",
    exp_web_subtitle: "Design & Performance",
    exp_web_desc: "Conception de sites vitrines et institutionnels modernes, optimisés pour le SEO et l'expérience utilisateur.",
    
    exp_dev_title: "Développement Web",
    exp_dev_subtitle: "Applications Métier",
    exp_dev_desc: "Développement de plateformes web complexes et évolutives utilisant Laravel pour une gestion de données sécurisée.",
    
    exp_mobile_title: "Développement Mobile",
    exp_mobile_subtitle: "Applications iOS & Android",
    exp_mobile_desc: "Création d'applications mobiles intuitives et performantes pour offrir une expérience fluide sur tous les smartphones.",
    
    exp_desktop_title: "Applications Desktop",
    exp_desktop_subtitle: "Solutions Logicielles",
    exp_desktop_desc: "Conception de logiciels natifs (Windows) pour répondre aux besoins spécifiques des entreprises et des particuliers.",

    exp_modeling_title: "Modélisation & Gestion de projet",
    exp_modeling_subtitle: "Analyse & Conception",
    exp_modeling_desc: "Modélisation de systèmes avec UML et Merise, planification de projets avec StarUML et GanttProject, pilotage en méthode Agile.",
    
    // Projects Section
    projects_tagline: "Réalisations sélectionnées",
    projects_title: "Réalisations",
    projects_discover: "Découvrir",

    // Experience Section
    exp_tagline: "Parcours professionnel",
    exp_title: "Expérience",
    exp_cv_desc: "Format PDF — Parcours complet, formation et compétences",
    exp_languages: "Langues",
    exp_lang_fr: "Français — Natif",
    exp_lang_en: "Anglais — Courant",
    exp_soft_skills: "Soft Skills",
    exp_skills_list: "Adaptabilité,Polyvalence,Créativité,Travail d'équipe,Autonomie",
    exp_cta_text: "Intéressé par une collaboration ? Discutons de votre prochain projet.",
    exp_cta_btn: "Me contacter",
    
    proj_flow_cat: "Application Desktop",
    proj_flow_desc: "Application desktop de conversion de formats de fichiers. Disponible sur Windows.",
    
    proj_utopia_cat: "Service Web",
    proj_utopia_desc: "Service web d'invitations numériques personnalisées — création, personnalisation et partage d'invitations élégantes en ligne.",
    
    proj_focus_cat: "Application Web",
    proj_focus_desc: "Application web de gestion des tâches basée sur la matrice d'Eisenhower pour prioriser efficacement et gagner en productivité.",
    
    proj_cimburkina_cat: "Application Web",
    proj_cimburkina_desc: "Conception et développement d'une plateforme de gestion des stages pour CIMBURKINA.",

    proj_cimconvert_cat: "Application Web & Desktop",
    proj_cimconvert_desc: "Outil de conversion de formats de fichiers développé pour CIMBURKINA — disponible en version web et en application desktop Windows.",
    
    proj_mccat_cat: "Application Web",
    proj_mccat_desc: "Conception, développement et intégration d'une plateforme de gestion des stages pour le Ministère de la Communication (MCCAT).",

    proj_sankara_cat: "Site Web Institutionnel",
    proj_sankara_desc: "Participation à la création du site web officiel du Mémorial Thomas Sankara pour le Ministère de la Communication du Burkina Faso.",
    
    // Contact Section
    contact_tagline: "Disponible pour de nouveaux projets",
    contact_title_1: "Prêt à donner vie à vos",
    contact_title_2: "idées",
    contact_description: "Que ce soit pour un conseil, une architecture logicielle ou un projet de bout en bout, je suis à votre écoute.",
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Votre message",
    contact_submit: "Envoyer le message",
    contact_submitting: "Envoi en cours...",
    contact_success_title: "Message envoyé !",
    contact_success_desc: "Merci, je reviendrai vers vous très prochainement.",
    contact_social_label: "Ou retrouvez-moi sur",
    
    // About Page
    about_back: "Retour",
    about_tagline: "L'humain derrière le code",
    about_bio_1: "Avec une expérience concrète sur des projets livrés pour des institutions gouvernementales et des entreprises industrielles, je conçois des architectures robustes, des produits SaaS et des applications web et mobile pensées pour durer.",
    about_bio_2: "Mon parcours est atypique : études de médecine, puis pivot vers l’ingénierie logicielle. Cette rigueur scientifique et cette pensée systémique définissent ma façon de structurer chaque problème avant même d’écrire la première ligne de code.",
    about_cv: "Télécharger mon CV",
    about_subtitle: "Développeur Fullstack & Fondateur De Arkan.",
    
    // Arkan Page
    arkan_tagline: "L’agence technologique de demain",
    arkan_slogan: "L’ingénierie au service de vos ambitions.",
    arkan_about_title: "À propos",
    arkan_about_text: "Arkan. est une agence tech fondée en 2026 à Ouagadougou, spécialisée dans le développement logiciel sur mesure, l’ingénierie SaaS et le conseil technologique. Nous travaillons avec des entreprises, institutions et startups qui ont des besoins complexes et peu de tolérance pour les solutions génériques.",
    arkan_services_title: "Nos Services",
    arkan_team_title: "L’équipe fondatrice",
    
    // Services
    service_custom: "Développement sur mesure",
    service_custom_desc: "Logiciels métiers et plateformes spécifiques.",
    service_saas: "Ingénierie SaaS",
    service_saas_desc: "Conception de produits scalables et robustes.",
    service_consulting: "Conseil Tech",
    service_consulting_desc: "Audit, architecture et stratégie numérique.",
    service_transformation: "Transformation Numérique",
    service_transformation_desc: "Modernisation de vos processus métier.",
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_projects: "Achievements",
    nav_about: "About",
    nav_arkan: "Arkan.",
    nav_contact: "Contact",
    nav_expertise: "Expertise",
    nav_experience: "Experience",
    nav_cv: "Resume",
    
    // Hero
    hero_tagline: "The Architect of Quiet Power",
    hero_title: "Software Engineer & Digital Solutions Architect",
    hero_founder: "Founder of Arkan.",
    hero_description: "I design sustainable systems — web applications, business software, platforms. Each solution is designed to solve real problems and create measurable impact.",
    hero_cta_expertise: "Expertise",
    hero_cta_cv: "Download CV",
    
    // Expertise Bento
    expertise_tagline: "Key Skills",
    expertise_title: "Expertise Areas",
    expertise_stack: "Tech Stack",
    expertise_certs: "Certifications",
    
    exp_web_title: "Website Creation",
    exp_web_subtitle: "Design & Performance",
    exp_web_desc: "Modern showcase and institutional website design, optimized for SEO and user experience.",
    
    exp_dev_title: "Web Development",
    exp_dev_subtitle: "Business Applications",
    exp_dev_desc: "Development of complex and scalable web platforms using Laravel for secure data management.",
    
    exp_mobile_title: "Mobile Development",
    exp_mobile_subtitle: "iOS & Android Apps",
    exp_mobile_desc: "Creation of intuitive and high-performance mobile applications to offer a smooth experience on all smartphones.",
    
    exp_desktop_title: "Desktop Applications",
    exp_desktop_subtitle: "Software Solutions",
    exp_desktop_desc: "Design of native software (Windows) to meet the specific needs of companies and individuals.",

    exp_modeling_title: "Modelling & Project Management",
    exp_modeling_subtitle: "Analysis & Design",
    exp_modeling_desc: "System modelling with UML and Merise, project planning with StarUML and GanttProject, Agile project management.",
    
    // Projects Section
    projects_tagline: "Selected Achievements",
    projects_title: "Projects",
    projects_discover: "Discover",

    // Experience Section
    exp_tagline: "Professional Background",
    exp_title: "Experience",
    exp_cv_desc: "PDF Format — Full background, training & skills",
    exp_languages: "Languages",
    exp_lang_fr: "French — Native",
    exp_lang_en: "English — Fluent",
    exp_soft_skills: "Soft Skills",
    exp_skills_list: "Adaptability,Versatility,Creativity,Teamwork,Autonomy",
    exp_cta_text: "Interested in a collaboration? Let's discuss your next project.",
    exp_cta_btn: "Contact me",
    
    proj_flow_cat: "Desktop Application",
    proj_flow_desc: "Desktop application for file format conversion. Available on Windows.",
    
    proj_utopia_cat: "Web Service",
    proj_utopia_desc: "Web service for personalized digital invitations — creation, customization, and sharing of elegant online invitations.",
    
    proj_focus_cat: "Web Application",
    proj_focus_desc: "Web application for task management based on the Eisenhower matrix to prioritize effectively and gain productivity.",
    
    proj_cimburkina_cat: "Web Application",
    proj_cimburkina_desc: "Design and development of an internship management platform for CIMBURKINA.",

    proj_cimconvert_cat: "Web & Desktop Application",
    proj_cimconvert_desc: "File format conversion tool developed for CIMBURKINA — available as a web version and a Windows desktop application.",
    
    proj_mccat_cat: "Web Application",
    proj_mccat_desc: "Design, development, and integration of an internship management platform for the Ministry of Communication (MCCAT).",

    proj_sankara_cat: "Institutional Website",
    proj_sankara_desc: "Participation in the creation of the official website for the Thomas Sankara Memorial for the Ministry of Communication of Burkina Faso.",
    
    // Contact Section
    contact_tagline: "Available for new projects",
    contact_title_1: "Ready to bring your",
    contact_title_2: "ideas",
    contact_description: "Whether it's for consulting, software architecture, or an end-to-end project, I'm here to listen.",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Your message",
    contact_submit: "Send message",
    contact_submitting: "Sending...",
    contact_success_title: "Message sent!",
    contact_success_desc: "Thank you, I will get back to you very soon.",
    contact_social_label: "Or find me on",
    
    // About Page
    about_back: "Back",
    about_tagline: "The human behind the code",
    about_bio_1: "With concrete experience on projects delivered for governmental institutions and industrial companies, I design robust architectures, SaaS products, and web & mobile applications built to last.",
    about_bio_2: "My path is atypical: medical studies, then a pivot towards software engineering. This scientific rigor and systemic thinking define my way of structuring each problem before writing the first line of code.",
    about_cv: "Download my CV",
    about_subtitle: "Fullstack Developer & Founder of Arkan.",
    
    // Arkan Page
    arkan_tagline: "Tomorrow's technology agency",
    arkan_slogan: "Engineering at the service of your ambitions.",
    arkan_about_title: "About",
    arkan_about_text: "Arkan. is a tech agency founded in 2026 in Ouagadougou, specializing in custom software development, SaaS engineering, and technological consulting. We work with companies, institutions, and startups that have complex needs and little tolerance for generic solutions.",
    arkan_services_title: "Our Services",
    arkan_team_title: "The Founding Team",
    
    // Services
    service_custom: "Custom Development",
    service_custom_desc: "Business software and specific platforms.",
    service_saas: "SaaS Engineering",
    service_saas_desc: "Design of scalable and robust products.",
    service_consulting: "Tech Consulting",
    service_consulting_desc: "Audit, architecture, and digital strategy.",
    service_transformation: "Digital Transformation",
    service_transformation_desc: "Modernization of your business processes.",
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "fr" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
