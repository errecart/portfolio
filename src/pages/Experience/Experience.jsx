"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./experience.css";
import { useLanguage } from "@/contexts/LanguageContext";

const developer = [
  {
    id: 1,
    title: "GetOut Studio",
    text: {
      en: "Website Development for a Video Game Studio, implementing the design provided by the studio and creating a responsive and visually appealing website to showcase their projects and services.",
      es: "Desarrollo web para un estudio de videojuegos: implementé el diseño provisto por el estudio y armé un sitio responsivo y visualmente atractivo para mostrar sus proyectos y servicios.",
    },
    tags: ["React", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
    link: "",
    date: { en: "2024 (Apr - Jun)", es: "2024 (Abr - Jun)" },
    mode: "freelance",
  },
  {
    id: 2,
    title: "Pepola Studio",
    text: {
      en: "Website development for a video game studio, implementing the design provided by the studio and creating a responsive and visually appealing website to showcase its projects and services.",
      es: "Desarrollo web para un estudio de videojuegos: implementé el diseño provisto por el estudio y creé un sitio responsivo y visualmente atractivo para mostrar sus proyectos y servicios.",
    },
    tags: ["Tailwind CSS", "React", "CSS", "JavaScript"],
    link: "https://pepola.in",
    date: { en: "2024 (Jul - Aug)", es: "2024 (Jul - Ago)" },
    mode: "freelance",
  },
  {
    id: 3,
    title: "Flora EXP",
    text: {
      en: "Plant care app with a gaming experience. Created during the CoderHouse Bootcamp to learn design and UX/UI principles and develop a case study for the app's design and user experience.",
      es: "Aplicación para el cuidado de plantas con una experiencia de juego. La desarrollé durante el bootcamp de CoderHouse para aprender principios de diseño y UX/UI, creando un caso de estudio sobre el diseño y la experiencia de usuario de la app.",
    },
    tags: ["Figma", "Google Slides", "Design"],
    link: "https://www.behance.net/gallery/224568925/Flora-Exp-Case-Study",
    date: { en: "2024 - 2025", es: "2024 - 2025" },
    mode: "learning",
  },
  {
    id: 4,
    title: "Visdan Agency",
    text: {
      en: "Frontend developer position for a digital marketing studio. I work closely with the design team to implement visually appealing and responsive websites for the studio's clients, ensuring a seamless user experience across all devices.",
      es: "Puesto de desarrollador frontend para un estudio de marketing digital. Trabajo junto al equipo de diseño para implementar sitios visualmente atractivos y responsivos para los clientes del estudio, garantizando una experiencia fluida en todos los dispositivos.",
    },
    tags: ["Next.js", "CSS", "JavaScript", "Tailwind CSS", "Figma", "Node.js", "Design"],
    link: "",
    date: { en: "2024 - 2025", es: "2024 - 2025" },
    mode: "freelance",
  },
  {
    id: 5,
    title: "Hogarth",
    text: {
      en: "Web Developer position working on an account for one of the world's leading technology companies. I handle the localization and adaptation of the company's website alongside a highly demanding and agile team.",
      es: "Puesto de desarrollador web trabajando para una de las principales empresas tecnológicas del mundo. Me encargo de la localización y adaptación de su sitio web junto a un equipo muy exigente y ágil.",
    },
    tags: [],
    link: "",
    date: { en: "2025 (Jul - Sep)", es: "2025 (Jul - Sep)" },
    mode: "temporary",
  },
  {
    id: 6,
    title: "Lunlunta Wines",
    text: {
      en: "Implementation of a new responsive website design for a renowned vineyard, ensuring a visually appealing and user-friendly experience across all devices.",
      es: "Implementación del diseño de un nuevo sitio web responsivo para una reconocida bodega, garantizando una experiencia visualmente atractiva y fácil de usar en todos los dispositivos.",
    },
    tags: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://www.lunluntawines.com/",
    date: { en: "2025 (Oct - Dec)", es: "2025 (Oct - Dic)" },
    mode: "freelance",
  },
  {
    id: 7,
    title: "PlayBook UI",
    text: {
      en: "New project where I collect, preview, add, and enable anyone to use and add user interface components to their own projects.",
      es: "Proyecto propio donde reúno, previsualizo y dejo disponibles componentes de interfaz para que cualquiera los use en sus propios proyectos.",
    },
    tags: ["CSS", "JavaScript", "Tailwind CSS", "Figma", "Next.js", "Design", "API"],
    link: "https://playbookui.netlify.app/",
    date: { en: "2025 (Oct - Dec)", es: "2025 (Oct - Dic)" },
    mode: "learning",
  },
  {
    id: 8,
    title: "DevPulse",
    text: {
      en: "New project where you can search for GitHub users and analyze information about their repositories, technologies, and capabilities as programmers.",
      es: "Proyecto propio donde podés buscar usuarios de GitHub y analizar información sobre sus repositorios, tecnologías y capacidades como programadores.",
    },
    tags: ["Tailwind CSS", "JavaScript", "Next.js", "API", "GitHub"],
    link: "https://devpulseproject.netlify.app/",
    date: { en: "2026 (Jan - Feb)", es: "2026 (Ene - Feb)" },
    mode: "learning",
  },
  {
    id: 9,
    title: "InRide Media",
    text: {
      en: "Creating attractive and functional visual interfaces, optimizing the user experience (UX), and collaborating with the team to turn ideas into real web pages.",
      es: "Creación de interfaces visuales atractivas y funcionales, optimización de la experiencia de usuario (UX) y colaboración con el equipo para convertir ideas en páginas web reales.",
    },
    tags: ["HTML", "CSS", "JavaScript", "Figma", "Design"],
    link: "",
    date: { en: "2026 (May - Jul)", es: "2026 (May - Jul)" },
    mode: "freelance",
  },
  {
    id: 10,
    title: "Instituto José de San Martín",
    text: {
      en: "Implementation of a new responsive website design for a school in Buenos Aires, enhancing its visual presence and rebuilding the site using Squarespace.",
      es: "Implementación del diseño de un nuevo sitio web responsivo para una escuela de Buenos Aires, mejorando su presencia visual y reconstruyendo el sitio con Squarespace.",
    },
    tags: ["HTML", "CSS", "JavaScript", "Figma", "Design", "SquareSpace"],
    link: "https://www.sanmartinedu.com/",
    date: { en: "2026 (Jul - Aug)", es: "2026 (Jul - Ago)" },
    mode: "freelance",
    isNew: true,
  },
  {
    id: 11,
    title: {
      en:"URL Shortener",
      es:"acortador-URLs"
    },
    text: {
      en:"A fast and simple link shortener. Convert long URLs into short, functional links using a RESTful API built with Node.js.",
      es:"A fast and simple link shortener. Convert long URLs into short, functional links using a RESTful API built with Node.js."    
    },
    tags: [ "JavaScript","API", "Node.js"],
    link: "https://github.com/errecart/acortador-URLs",
    date: { en: "2026 (Oct - Nov)", es: "2026 (Oct - Nov)" },
    mode: "learning",
    isNew: true,
  },
];

const workProjects = developer.filter((item) => item.mode !== "learning").reverse();
const learningProjects = developer.filter((item) => item.mode === "learning").reverse();

const initials = (name) => {
  const words = name.split(" ").filter((word) => word.toLowerCase() !== "de");
  return words.length > 1
    ? (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
    : name.slice(0, 2).toUpperCase();
};

const getTitle = (title, language) =>
  typeof title === "string" ? title : title[language];

const linkLabel = (url, t) => {
  if (url.includes("behance.net")) return t.experience.behanceLabel;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const tones = ["tn-a", "tn-b"];

const ArrowOut = () => (
  <svg className="ic ic-sm" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const Experience = () => {
  const { language, t } = useLanguage();

  return (
    <section className="section" id="experience">
      <ScrollReveal animation="fade-down">
        <span className="eyebrow tn-a">
          <i>02</i>
          {t.nav.experience}
        </span>
        <h2 className="serif section-title">{t.experience.title}</h2>
      </ScrollReveal>

      <div className="rows">
        {workProjects.map((item, index) => (
          <ScrollReveal
            key={item.id}
            delay={Math.min(index, 3) * 80}
            animation="fade-up"
          >
            <article className={`row ${tones[index % tones.length]}`}>
              <div className="row-period mono">{item.date[language]}</div>
              <div className="row-body">
                <div className="row-head">
                  <span className="av" aria-hidden="true">
                    {initials(getTitle(item.title, language))}
                  </span>
                  <div className="row-title">
                    <h3 className="sub-title">
                      {getTitle(item.title, language)}
                      {item.isNew ? (
                        <span className="tag row-new">{t.experience.newLabel}</span>
                      ) : null}
                    </h3>
                    <p className="row-role">{t.experience.modes[item.mode]}</p>
                  </div>
                </div>
                <p className="row-desc">{item.text[language]}</p>
                {item.tags.length > 0 ? (
                  <ul className="row-tags">
                    {item.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.link ? (
                  <p className="row-link">
                    <a
                      className="tl"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linkLabel(item.link, t)}
                      <ArrowOut />
                    </a>
                  </p>
                ) : null}
              </div>
            </article>
          </ScrollReveal>
        ))}
        <div className="rows-end" />
      </div>

      <ScrollReveal animation="fade-down">
        <h3 className="serif learn-title">{t.experience.learning}</h3>
      </ScrollReveal>
      <div className="rows">
        {learningProjects.map((item, index) => (
          <ScrollReveal
            key={item.id}
            delay={index * 100}
            animation="fade-up"
          >
            <article className={`row ${tones[index % tones.length]}`}>
              <div className="row-period mono">{item.date[language]}</div>
              <div className="row-body">
                <div className="row-head">
                  <span className="av" aria-hidden="true">
                    {initials(getTitle(item.title, language))}
                  </span>
                  <div className="row-title">
                    <h3 className="sub-title">
                      {getTitle(item.title, language)}
                        {item.isNew ? (
                          <span className="tag row-new">{t.experience.newLabel}</span>
                        ) : null}
                    </h3>
                    <p className="row-role">{t.experience.modes[item.mode]}</p>
                  </div>
                </div>
                <p className="row-desc">{item.text[language]}</p>
                {item.tags.length > 0 ? (
                  <ul className="row-tags">
                    {item.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.link ? (
                  <p className="row-link">
                    <a
                      className="tl"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linkLabel(item.link, t)}
                      <ArrowOut />
                    </a>
                  </p>
                ) : null}
              </div>
            </article>
          </ScrollReveal>
        ))}
        <div className="rows-end" />
      </div>
    </section>
  );
};

export default Experience;
