"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X, Focus, Eye } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { useUI } from "@/context/UIContext"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const { isFocusMode, toggleFocusMode } = useUI()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/#expertise", label: t('nav_expertise') },
    { href: "/#realisations", label: t('nav_projects') },
    { href: "/#contact", label: t('nav_contact') },
    { href: "/about", label: t('nav_about') },
    { href: "/arkan", label: t('nav_arkan') },
  ]

  return (
    <nav className="w-full flex items-center justify-between px-8 py-8 relative z-[100]">
      {/* Logo Area */}
      <Link href="/" className="flex items-center gap-3 group relative z-[110]">
        <div className="relative">
          <img 
            src="/logo-white.jpg.jpeg" 
            alt="J. Exaucé Jackson" 
            className="h-6 w-auto dark:hidden scale-[3.5] md:scale-[4] origin-left" 
          />
          <img 
            src="/logo-black.jpg.jpeg" 
            alt="J. Exaucé Jackson" 
            className="h-6 w-auto hidden dark:block scale-[3.5] md:scale-[4] origin-left" 
          />
        </div>
      </Link>

      {/* Desktop Links - Hidden in Focus Mode */}
      <div className={`hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 transition-opacity duration-700 ${isFocusMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[10px] uppercase tracking-[0.3em] font-medium text-foreground/40 hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Nav Actions */}
      <div className="hidden md:flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/70">
        
        {/* Theme & Language & Focus Switchers */}
        {mounted && (
          <div className="flex items-center gap-4 ml-4">
             <button
              onClick={toggleFocusMode}
              className={`text-foreground/70 hover:text-accent transition-colors ${isFocusMode ? 'text-accent' : ''}`}
              aria-label="Toggle focus mode"
              title="Focus Mode"
            >
              {isFocusMode ? <Eye className="h-4 w-4" /> : <Focus className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="text-[10px] font-bold tracking-widest text-foreground/40 hover:text-accent transition-colors px-2 border-x border-foreground/10"
            >
              {language === "fr" ? "FR" : "EN"}
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Actions */}
      <div className="flex md:hidden items-center gap-4 relative z-[110]">
        {mounted && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="text-[10px] font-bold tracking-widest text-foreground/40 hover:text-accent transition-colors px-2 border-r border-foreground/10"
            >
              {language === "fr" ? "FR" : "EN"}
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground/70 hover:text-accent transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[105] flex flex-col items-center justify-center gap-12 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-[family-name:var(--font-playfair)] font-medium tracking-tight hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="/CV Jackson Lountadiladio.pdf" 
              download
              onClick={() => setIsOpen(false)}
              className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-accent tracking-tight"
            >
              Télécharger CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

