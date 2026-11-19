"use client";
import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./Contact.css";
import { useLanguage } from "@/contexts/LanguageContext";

const EMAIL = "jierrecart5@gmail.com";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-ignacio-errecart/",
  },
  { label: "GitHub", href: "https://github.com/errecart" },
  { label: "Behance", href: "https://www.behance.net/juan-errecart/projects" },
];

const ArrowOut = () => (
  <svg className="ic ic-sm" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <ScrollReveal animation="fade-up">
        <div className="contact-panel tn-b">
          <div className="ring ring-1" aria-hidden="true" />
          <div className="ring ring-2" aria-hidden="true" />

          <div className="contact-main">
            <h2 className="serif contact-title">{t.contact.title}</h2>
            <p className="contact-lead">{t.contact.lead}</p>
            <p className="contact-mail-wrap">
              <a href={`mailto:${EMAIL}`} className="tl contact-mail">
                {EMAIL}
              </a>
            </p>
            <div className="contact-actions">
              <a href={`mailto:${EMAIL}`} className="btn btn-acc">
                {t.contact.ctaMail}
              </a>
              <button
                type="button"
                className="btn btn-acc-ghost"
                onClick={copyEmail}
              >
                {t.contact.copyEmail}
              </button>
            </div>
            <p className="contact-base">{t.contact.base}</p>
          </div>

          <div className="contact-links">
            <svg
              className="contact-pet"
              viewBox="0 0 300 300"
              width="120"
              height="120"
              aria-hidden="true"
              focusable="false"
            >
              <polygon points="288,150 219,269.5 81,269.5 12,150 81,30.5 219,30.5" className="pet-hex" />
              <path d="M60 252H240" className="pet-branch" strokeWidth="10" strokeLinecap="round" fill="none" />
              <polygon points="150,74 222,114 222,226 196,246 104,246 78,226 78,114" className="pet-body" strokeWidth="6" strokeLinejoin="round" />
              <polygon points="82,140 82,210 100,226 100,152" className="pet-wing" />
              <polygon points="218,140 218,210 200,226 200,152" className="pet-wing" />
              <polygon points="88,108 90,68 124,88" className="pet-body" />
              <polygon points="212,108 210,68 176,88" className="pet-body" />
              <circle cx="122" cy="134" r="22" className="pet-eye-white" />
              <circle cx="178" cy="134" r="22" className="pet-eye-white" />
              <circle cx="125" cy="136" r="8" className="pet-pupil" />
              <circle cx="181" cy="136" r="8" className="pet-pupil" />
              <polygon points="142,158 158,158 150,174" className="pet-pupil" />
            </svg>
            <p className="contact-links-title mono">{t.contact.findMe}</p>
            <ul>
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="link-row"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ArrowOut />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <p className="footer">{t.contact.footer}</p>

      <div className="tooltip" role="status" aria-live="polite">
        {copied ? t.contact.copied : ""}
      </div>
    </section>
  );
};

export default Contact;
