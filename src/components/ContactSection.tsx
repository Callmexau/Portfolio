"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        // Reset après 10 secondes
        setTimeout(() => setIsSubmitted(false), 10000);
      } else {
        throw new Error(result.error || "Une erreur est survenue.");
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14 relative overflow-hidden"
        >
          {/* Background Accent Gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(184,148,30,0.05),transparent_50%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-accent/50 shrink-0" />
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground/40 font-medium leading-relaxed">
                  {t('contact_tagline')}
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight mb-4 leading-[1.1]">
                {t('contact_title_1')} <span className="text-accent italic">{t('contact_title_2')}</span> ?
              </h2>

              <p className="text-xs md:text-sm text-foreground/50 max-w-md font-light leading-relaxed mb-0">
                {t('contact_description')}
              </p>
            </div>

            <div className="relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-playfair)] font-bold mb-2">{t('contact_success_title')}</h3>
                  <p className="text-sm text-foreground/50">{t('contact_success_desc')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact_name')} 
                      className="bg-background/50 border border-foreground/10 rounded-xl px-5 py-3 text-[10px] uppercase tracking-widest focus:border-accent focus:outline-none transition-colors w-full"
                      required
                      disabled={isSubmitting}
                    />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact_email')} 
                      className="bg-background/50 border border-foreground/10 rounded-xl px-5 py-3 text-[10px] uppercase tracking-widest focus:border-accent focus:outline-none transition-colors w-full"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact_message')} 
                    rows={3}
                    className="bg-background/50 border border-foreground/10 rounded-xl px-5 py-3 text-[10px] uppercase tracking-widest focus:border-accent focus:outline-none transition-colors w-full resize-none"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                  
                  {error && (
                    <div className="flex items-center gap-2 text-red-500 text-[10px] uppercase tracking-wider bg-red-500/5 p-3 rounded-lg border border-red-500/20">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-between bg-transparent border border-foreground/20 px-8 py-3 rounded-full hover:border-accent hover:text-accent transition-all duration-500 mt-2 disabled:opacity-50"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                      {isSubmitting ? t('contact_submitting') : t('contact_submit')}
                    </span>
                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Social shortcut or alternative */}
          <div className="mt-16 pt-8 border-t border-foreground/5 w-full flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30">{t('contact_social_label')}</span>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/exaucéjacksonl" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-colors text-[10px] uppercase tracking-widest font-medium">LinkedIn</a>
              <a href="https://github.com/Callmexau" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-colors text-[10px] uppercase tracking-widest font-medium">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
