"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface UIContextType {
  isFocusMode: boolean;
  setIsFocusMode: (mode: boolean) => void;
  toggleFocusMode: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFocusMode, setIsFocusMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("focusMode") === "true";
    setIsFocusMode(saved);
  }, []);

  const setFocusMode = (mode: boolean) => {
    setIsFocusMode(mode);
    localStorage.setItem("focusMode", String(mode));
  };

  const toggleFocusMode = () => setFocusMode(!isFocusMode);

  return (
    <UIContext.Provider value={{ isFocusMode, setIsFocusMode: setFocusMode, toggleFocusMode }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
