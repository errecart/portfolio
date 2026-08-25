"use client";

import { useEffect, useState } from "react";

const sections = ["main", "education", "experience", "contact"];

export const useSectionNavigation = () => {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const currentSection = sections.reduce((active, id) => {
        const element = document.getElementById(id);
        return element && scrollPosition >= element.offsetTop ? id : active;
      }, "main");

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return { activeSection, handleClick };
};