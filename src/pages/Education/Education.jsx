"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./Education.css";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  const skillGroups = [
    {
      key: "frontend",
      items: [
        { id: 1, title: "React", icon: "assets/icons/knowledge/react.svg", color: "#369bf4", featured: true },
        { id: 2, title: "Next.js", icon: "assets/icons/knowledge/nextdotjs.svg", color: "#3c3d3e", featured: true },
        { id: 3, title: "TypeScript", icon: "assets/icons/knowledge/typescript.svg", color: "#3178c6", featured: true },
        { id: 4, title: "Tailwind", icon: "assets/icons/knowledge/tailwindcss.svg", color: "#45efff", featured: true },
        { id: 5, title: "JavaScript", icon: "assets/icons/knowledge/javascript.svg", color: "#eef923" },
        { id: 6, title: "HTML", icon: "assets/icons/knowledge/html5.svg", color: "#f8a307" },
        { id: 7, title: "CSS", icon: "assets/icons/knowledge/css.svg", color: "#6b1ca0" },
        { id: 8, title: "SASS", icon: "assets/icons/knowledge/sass.svg", color: "#f533d8" },
        { id: 9, title: "SquareSpace", icon: "assets/icons/knowledge/squarespace.svg", color: "#c6c1c5" },
        { id: 10, title: "Wordpress", icon: "assets/icons/knowledge/wordpress.svg", color: "#21759b" },
      ],
    },
    {
      key: "design",
      items: [
        { id: 8, title: "Figma", icon: "assets/icons/knowledge/figma.svg", color: "#a17fff" },
        { id: 9, title: "UX/UI Design", icon: "assets/icons/knowledge/design.svg", color: "#c1c1c1" },
        { id: 10, title: "Canva", icon: "assets/icons/knowledge/canva.svg", color: "#0044e4" },
      ],
    },
    {
      key: "toolsBackend",
      items: [
        { id: 11, title: "Git", icon: "assets/icons/knowledge/git.svg", color: "#f88007" },
        { id: 12, title: "GitHub", icon: "assets/icons/knowledge/github.svg", color: "#ffffff" },
        { id: 13, title: "FireBase", icon: "assets/icons/knowledge/firebase.svg", color: "#f88007" },
        { id: 14, title: "Node.js", icon: "assets/icons/knowledge/nodedotjs.svg", color: "#04cc12" },
        { id: 15, title: "API Rest", icon: "assets/icons/knowledge/api.svg", color: "#b85858" },
        { id: 16, title: "SQL", icon: "assets/icons/knowledge/SQL.svg", color: "#df7200", gradient: "linear-gradient(90deg, #df7200, #1267eb)", state: "NEW!!" },
      ],
    },
  ];

  return (
    <div className="container" id="education">
      <ScrollReveal animation="fade-down">
        <h2>{t.education.title}</h2>
      </ScrollReveal>
      <p className="knowledge-intro">
        {t.education.intro}
      </p>
      <div className="knowledge-container">
        {skillGroups.map((group, groupIndex) => (
          <div className="knowledge-group" key={group.key}>
            <h3>{t.education.groups[group.key]}</h3>
            <div className="knowledge-items">
              {group.items.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={(groupIndex + 1) * 80 + index * 40}
                  animation="zoom-in"
                >
                  <div
                    className={`knowledge-item ${item.featured ? "featured" : ""}`}
                    style={{
                      "--hover-color": item.color,
                      "--active-color": item.color,
                      "--hover-gradient": item.gradient || item.color,
                    }}
                  >
                    {item.state && <span className="new">{item.state}</span>}
                    <img src={item.icon} alt={`${item.title} icon`} />
                    <h4>{item.title}</h4>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
