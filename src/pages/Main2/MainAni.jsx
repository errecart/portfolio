"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./MainAni.css";
import Animation from "./animation/Animation";
import { useLanguage } from "@/contexts/LanguageContext";


const MainAni = () => {
  const { t } = useLanguage();

  return (
    <div className="herowrap">
      {/* tech stack carousel: same animation as the original portfolio */}
      <Animation />
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className="blob blob-c" aria-hidden="true" />

      <section id="main" className="hero">
        <ScrollReveal animation="fade-up" className="hero-text">
          <svg
            className="hero-logo-mark"
            viewBox="0 0 100 100"
            width="36"
            height="36"
            aria-hidden="true"
            focusable="false"
          >
            <polygon points="96,50 73,89.84 27,89.84 4,50 27,10.16 73,10.16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="90,50 70,84.64 30,84.64 10,50 30,15.36 70,15.36" fill="none" className="logo-inner" strokeWidth="1" strokeLinejoin="round" />
            <path className="logo-accent" d="M43.76 60.14L41.888 69.5L39.86 69.5C32.918 69.484 30.812 67.706 31.436 60.14Z" />
            <path fill="currentColor" d="M39.86 69.5L47.66 69.5L55.46 30.5L47.66 30.5Z" />
            <path fill="currentColor" d="M57.8 30.5L68.72 30.5L66.848 39.86L55.928 39.86Z" />
            <path fill="currentColor" d="M54.836 45.32L63.416 45.32L61.544 54.68L52.964 54.68Z" />
            <path fill="currentColor" d="M51.872 60.14L62.792 60.14L60.92 69.5L50 69.5Z" />
          </svg>
          <div className="badge">
            <span className="dot" aria-hidden="true" />
            <span>{t.main.status}</span>
          </div>
          <h1 className="serif hero-h1">
            {t.main.h1a}
            <em className="hl">{t.main.h1b}</em>
          </h1>
          <p className="hero-lead">{t.main.lead}</p>
          <div className="hero-cta">
            <a href="#experience" className="btn btn-fill">
              {t.main.ctaPrimary}
              <svg className="ic ic-sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t.main.ctaSecondary}
            </a>
          </div>
        </ScrollReveal>

        <div className="hero-art" aria-hidden="true">
          <div className="hc hc-a tn-b">
            <div className="hc-title">Button</div>
            <div className="hc-sub">{t.main.cardA}</div>
            <div className="hc-demo">
              <span className="demo-fill">Primary</span>
              <span className="demo-ghost">Ghost</span>
            </div>
          </div>

          <div className="hc hc-b tn-a">
            <svg viewBox="0 0 80 80" width="64" height="64" className="swatches">
              <circle cx="29" cy="30" r="19" className="sw sw-1" />
              <circle cx="51" cy="30" r="19" className="sw sw-2" />
              <circle cx="40" cy="50" r="19" className="sw sw-3" />
            </svg>
            <div className="hc-copy">
              <div className="hc-title">{t.main.cardTokensTitle}</div>
              <div className="hc-sub">{t.main.cardTokensText}</div>
            </div>
          </div>

          <div className="hc hc-c">
            <div className="code-file mono">Button.tsx</div>
            <div className="code-line mono">
              <span className="c-tag">&lt;Button</span>{" "}
              <span className="c-attr">variant</span>=
              <span className="c-str">"ghost"</span>
              <span className="c-tag">&gt;</span>
            </div>
            <div className="code-line code-indent mono">{t.main.snippet}</div>
            <div className="code-line mono">
              <span className="c-tag">&lt;/Button&gt;</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainAni;
