"use client";
import React, { useEffect, useState } from "react";
import "./dock.css";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_ITEMS = [
  {
    id: "main",
    key: "home",
    tone: "tn-a",
    icon: (
      <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </>
    ),
  },
  {
    id: "education",
    key: "knowledge",
    tone: "tn-b",
    icon: (
      <>
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </>
    ),
  },
  {
    id: "experience",
    key: "experience",
    tone: "tn-a",
    icon: (
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    ),
  },
  {
    id: "contact",
    key: "contact",
    tone: "tn-b",
    icon: (
      <>
        <path d="M16 2v2" />
        <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <path d="M8 2v2" />
        <circle cx="12" cy="11" r="3" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
      </>
    ),
  },
];

const Dock = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { toggleLanguage, t } = useLanguage();
  const { activeSection, handleClick } = useSectionNavigation();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseLightTheme = savedTheme === "light";
    document.body.classList.toggle("light-theme", shouldUseLightTheme);
    setIsDarkMode(!shouldUseLightTheme);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light-theme", isDarkMode);
    window.localStorage.setItem("theme", isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  const themeLabel = isDarkMode ? t.dock.toLight : t.dock.toDark;

  return (
    <>
      <a className="skip" href="#content">
        {t.dock.skip}
      </a>

      <div className="rail">
        <nav className="seg" aria-label={t.dock.navLabel}>
          {NAV_ITEMS.map((item) => {
            const label = t.nav[item.key];
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rb ${item.tone} ${isActive ? "on" : ""}`}
                aria-label={label}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(item.id);
                }}
              >
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  {item.icon}
                </svg>
                <span className="lbl" aria-hidden="true">
                  {label}
                </span>
                <span className="tip" aria-hidden="true">
                  {label}
                </span>
              </a>
            );
          })}
        </nav>

        <span className="sep" aria-hidden="true" />

        <div className="seg" role="group" aria-label={t.dock.toolsLabel}>
          <button
            type="button"
            className="rb"
            onClick={toggleLanguage}
            aria-label={t.dock.langAria}
          >
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 8 6 6" />
              <path d="m4 14 6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="m22 22-5-10-5 10" />
              <path d="M14 18h6" />
            </svg>
            <span className="tip" aria-hidden="true">
              {t.dock.langTip}
            </span>
          </button>

          <a
            className="rb"
            href={t.cv.cv_link}
            download={t.cv.cv_link}
            aria-label={t.dock.cvTip}
          >
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="tip" aria-hidden="true">
              {t.dock.cvTip}
            </span>
          </a>

          <button
            type="button"
            className="rb"
            onClick={toggleTheme}
            aria-label={themeLabel}
          >
            {isDarkMode ? (
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
            <span className="tip" aria-hidden="true">
              {themeLabel}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Dock;
