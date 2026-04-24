"use client";

import { useUI } from "@/context/UIContext";
import { motion, AnimatePresence } from "framer-motion";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isFocusMode } = useUI();

  return (
    <div className="relative flex-1 flex flex-col">
      {/* Vignette & Grain Effect for Focus Mode */}
      <AnimatePresence>
        {isFocusMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[200] pointer-events-none"
          >
            {/* Dark Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            
            {/* Subtle Grain/Noise */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`transition-all duration-1000 ${isFocusMode ? 'blur-[1px] grayscale-[0.2]' : ''}`}>
        {children}
      </div>

      {/* Focus Mode Indicator */}
      {isFocusMode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[210] px-4 py-2 rounded-full border border-accent/20 bg-background/50 backdrop-blur-md"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold">Focus Mode Active</span>
        </motion.div>
      )}
    </div>
  );
}
