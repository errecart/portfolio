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
