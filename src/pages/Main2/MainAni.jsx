"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./MainAni.css";
import Animation from "./animation/Animation";
import { useLanguage } from "@/contexts/LanguageContext";

const Sparkle = ({ tone, style }) => (
  <svg
    className={`spk ${tone}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={style}
  >
    <path
      fill="currentColor"
      d="M12 1 Q12 12 23 12 Q12 12 12 23 Q12 12 1 12 Q12 12 12 1Z"
    />
  </svg>
);

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

          <div className="sticker tn-b sticker-1">Figma</div>
          <div className="sticker tn-a sticker-2">Next.js</div>
          <Sparkle
            tone="tn-a"
            style={{ right: "40%", top: "-2%", width: 22, height: 22 }}
          />
          <Sparkle
            tone="tn-b"
            style={{
              right: "-1%",
              bottom: "8%",
              width: 18,
              height: 18,
              animationDelay: "1.1s",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default MainAni;
