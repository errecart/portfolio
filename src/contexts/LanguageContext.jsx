"use client";
import { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en";
import es from "@/locales/es";

const dictionaries = { en, es };
const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("language");
    const initial = saved === "es" || saved === "en" ? saved : "en";
    setLanguage(initial);
    document.documentElement.lang = initial;
  }, []);

  const toggleLanguage = () => {
    const next = language === "en" ? "es" : "en";
    setLanguage(next);
    window.localStorage.setItem("language", next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: dictionaries[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};