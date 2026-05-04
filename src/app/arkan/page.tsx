"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ArkanPage() {
  const { t } = useLanguage();
  const team = [
    { name: "Exaucé Jackson L.", role: "Founder" },
    { name: "Wenceslas Ilboudo", role: "CTO" },
    { name: "Haïra Balima", role: "COO" },
    { name: "Jalal Onadja", role: "Lead Developer" },
    
  ];

  const services = [
    { title: t('service_custom'), description: t('service_custom_desc') },
    { title: t('service_saas'), description: t('service_saas_desc') },
    { title: t('service_consulting'), description: t('service_consulting_desc') },
    { title: t('service_transformation'), description: t('service_transformation_desc') }
  ];

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
                {t('arkan_tagline')}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-[1.1] mb-4">
                  Arkan.
                </h1>
                <p className="text-sm md:text-lg text-foreground/50 font-light italic">
                  {t('arkan_slogan')}
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative shrink-0 flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0"
              >
                <img 
                  src="/Arkan-White.PNG" 
                  alt="Arkan Logo" 
                  className="h-12 md:h-20 w-auto dark:hidden scale-[1.5] md:scale-[2] origin-center md:origin-right" 
                />
                <img 
                  src="/Arkan-Black.PNG" 
                  alt="Arkan Logo" 
                  className="h-12 md:h-20 w-auto hidden dark:block scale-[1.5] md:scale-[2] origin-center md:origin-right" 
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold mb-6">
                    {t('arkan_about_title')}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light">
                    {t('arkan_about_text')}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold mb-6">
                  {t('arkan_services_title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div 
                      key={service.title} 
                      className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:border-accent/20 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/80 group-hover:text-accent transition-colors">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-[10px] text-foreground/40 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-foreground/5">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold mb-8">
                {t('arkan_team_title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member) => (
                  <div key={member.name} className="flex flex-col border-l border-accent/20 pl-6 py-2">
                    <span className="text-lg font-[family-name:var(--font-playfair)] font-medium text-accent">
                      {member.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mt-1">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
