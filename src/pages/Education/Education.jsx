"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./Education.css";
import { useLanguage } from "@/contexts/LanguageContext";

const skillGroups = [
  {
    key: "frontend",
    tone: "tn-b",
    items: [
      { id: 1, title: "React", icon: "assets/icons/knowledge/react.svg" },
      { id: 2, title: "Next.js", icon: "assets/icons/knowledge/nextdotjs.svg" },
      { id: 3, title: "TypeScript", icon: "assets/icons/knowledge/typescript.svg" },
      { id: 4, title: "Tailwind", icon: "assets/icons/knowledge/tailwindcss.svg" },
      { id: 5, title: "JavaScript", icon: "assets/icons/knowledge/javascript.svg" },
      { id: 6, title: "HTML", icon: "assets/icons/knowledge/html5.svg" },
      { id: 7, title: "CSS", icon: "assets/icons/knowledge/css.svg" },
      { id: 8, title: "SASS", icon: "assets/icons/knowledge/sass.svg" },
      { id: 9, title: "SquareSpace", icon: "assets/icons/knowledge/squarespace.svg" },
      { id: 10, title: "Wordpress", icon: "assets/icons/knowledge/wordpress.svg" },
    ],
  },
  {
    key: "design",
    tone: "tn-a",
    items: [
      { id: 1, title: "Figma", icon: "assets/icons/knowledge/figma.svg" },
      { id: 2, title: "UX/UI Design", icon: "assets/icons/knowledge/design.svg" },
      { id: 3, title: "Canva", icon: "assets/icons/knowledge/canva.svg" },
    ],
  },
  {
    key: "toolsBackend",
    tone: "tn-b",
    items: [
      { id: 1, title: "Git", icon: "assets/icons/knowledge/git.svg" },
      { id: 2, title: "GitHub", icon: "assets/icons/knowledge/github.svg" },
      { id: 3, title: "FireBase", icon: "assets/icons/knowledge/firebase.svg" },
      { id: 4, title: "Node.js", icon: "assets/icons/knowledge/nodedotjs.svg" },
      { id: 5, title: "API Rest", icon: "assets/icons/knowledge/api.svg" },
      { id: 6, title: "SQL", icon: "assets/icons/knowledge/SQL.svg", isNew: true },
    ],
  },
];

const groupIcons = {
  frontend: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  design: (
    <>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </>
  ),
  toolsBackend: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </>
  ),
};

const howTones = ["tn-a", "tn-b", "tn-a"];

const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="education">
      <ScrollReveal animation="fade-down">
        <span className="eyebrow tn-b">
          <i>01</i>
          {t.nav.knowledge}
        </span>
        <h2 className="serif section-title">{t.education.title}</h2>
        <p className="section-lead">{t.education.intro}</p>
      </ScrollReveal>

      <div className="stack-grid">
        {skillGroups.map((group, groupIndex) => (
          <ScrollReveal
            key={group.key}
            className="stack-item"
            delay={groupIndex * 80}
            animation="fade-up"
          >
            <div className={`card lift ${group.tone}`}>
              <div className="ibox">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  {groupIcons[group.key]}
                </svg>
              </div>
              <h3 className="sub-title stack-title">
                {t.education.groups[group.key]}
              </h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item.id} className="chip chip-on">
                    <span
                      className="ico"
                      aria-hidden="true"
                      style={{
                        WebkitMaskImage: `url("${item.icon}")`,
                        maskImage: `url("${item.icon}")`,
                      }}
                    />
                    {item.title}
                    {item.isNew ? (
                      <span className="chip-new">{t.experience.newLabel}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="how-grid">
        {t.education.how.map((item, index) => (
          <ScrollReveal
            key={item.title}
            className="how"
            delay={index * 100}
            animation="fade-up"
          >
            <span className={`num ${howTones[index % howTones.length]}`}>
              {`0${index + 1}`}
            </span>
            <h3 className="sub-title how-title">{item.title}</h3>
            <p className="how-body">{item.body}</p>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal animation="fade-up">
        <div className="edu">
          <h3 className="sub-title edu-title">{t.education.eduTitle}</h3>
          <div className="edu-list">
            {t.education.edu.map((entry) => (
              <p key={entry.name}>
                {entry.name} <span className="edu-years">{entry.years}</span>
              </p>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Education;
