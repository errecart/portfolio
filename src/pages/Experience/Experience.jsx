"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./experience.css";
import { useLanguage } from "@/contexts/LanguageContext";


const Experience = () => {
  const { language, t } = useLanguage();

  const developer = [
    {
      id: 1,
      title: "GETOUT STUDIO",
      text: {
        en: "Website Development for a Video Game Studio, implementing the design provided by the studio and creating a responsive and visually appealing website to showcase their projects and services.",
        es: "Desarrollo web para un estudio de videojuegos: implementé el diseño provisto por el estudio y armé un sitio responsivo y visualmente atractivo para mostrar sus proyectos y servicios.",
      },
      categories: [
        {
          src: "assets/icons/knowledge/react.svg",
          alt: "React icon",
          name: "React",
        },
        {
          src: "assets/icons/knowledge/css.svg",
          alt: "CSS icon",
          name: "CSS",
        },
        {
          src: "assets/icons/knowledge/javascript.svg",
          alt: "JavaScript icon",
          name: "JavaScript",
        },
        {
          src: "assets/icons/knowledge/tailwindcss.svg",
          alt: "Tailwind CSS icon",
          name: "Tailwind CSS",
        },
        {
          src: "assets/icons/knowledge/figma.svg",
          alt: "Figma icon",
          name: "Figma",
        },
      ],
      link: "",
      date: { en: "2024 (Apr - Jun)", es: "2024 (Abr - Jun)" },
      mode: "freelance",
    },
    {
      id: 2,
      title: "PEPOLA",
      text: {
        en: "Website development for a video game studio, implementing the design provided by the studio and creating a responsive and visually appealing website to showcase its projects and services.",
        es: "Desarrollo web para un estudio de videojuegos: implementé el diseño provisto por el estudio y creé un sitio responsivo y visualmente atractivo para mostrar sus proyectos y servicios.",
      },
      categories: [
        {
          src: "assets/icons/knowledge/tailwindcss.svg",
          alt: "Tailwind CSS icon",
          name: "Tailwind CSS",
        },
        {
          src: "assets/icons/knowledge/react.svg",
          alt: "React icon",
          name: "React",
        },
        {
          src: "assets/icons/knowledge/css.svg",
          alt: "CSS icon",
          name: "CSS",
        },
        {
          src: "assets/icons/knowledge/javascript.svg",
          alt: "JavaScript icon",
          name: "JavaScript",
        },
      ],
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
      categories: [
        {
          src: "assets/icons/knowledge/figma.svg",
          alt: "Figma icon",
          name: "Figma",
        },
        {
          src: "assets/icons/knowledge/googleslides.svg",
          alt: "Google Slides icon",
          name: "Google Slides",
        },
        {
          src: "assets/icons/knowledge/design.svg",
          alt: "Design icon",
          name: "Design",
        },
      ],
      date: { en: "2024 - 2025", es: "2024 - 2025" },
      link: "https://www.behance.net/gallery/224568925/Flora-Exp-Case-Study",
      mode: "learning",
    },
    {
      id: 4,
      title: "Visdan Agency",
      text: {
        en: "Frontend developer position for a digital marketing studio. I work closely with the design team to implement visually appealing and responsive websites for the studio's clients, ensuring a seamless user experience across all devices.",
        es: "Puesto de desarrollador frontend para un estudio de marketing digital. Trabajo junto al equipo de diseño para implementar sitios visualmente atractivos y responsivos para los clientes del estudio, garantizando una experiencia fluida en todos los dispositivos.",
      },
      categories: [
        {
          src: "assets/icons/knowledge/nextdotjs.svg",
          alt: "Next.js icon",
          name: "Next.js",
        },
        {
          src: "assets/icons/knowledge/css.svg",
          alt: "CSS icon",
          name: "CSS",
        },
        {
          src: "assets/icons/knowledge/javascript.svg",
          alt: "JavaScript icon",
          name: "JavaScript",
        },
        {
          src: "assets/icons/knowledge/tailwindcss.svg",
          alt: "Tailwind CSS icon",
          name: "Tailwind CSS",
        },
        {
          src: "assets/icons/knowledge/figma.svg",
          alt: "Figma icon",
          name: "Figma",
        },
        {
          src: "assets/icons/knowledge/nodedotjs.svg",
          alt: "Node.js icon",
          name: "Node.js",
        },
        {
          src: "assets/icons/knowledge/design.svg",
          alt: "Design icon",
          name: "Design",
        },
      ],
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
      categories: [],
      link: "",
      date: { en: "2025 (Jul - Sep)", es: "2025 (Jul - Sep)" },
      mode: "temporary",
    },
    {
      id: 6,
      title: "LunluntaWines",
      text: {
        en: "Implementation of a new responsive website design for a renowned vineyard, ensuring a visually appealing and user-friendly experience across all devices.",
        es: "Implementación del diseño de un nuevo sitio web responsivo para una reconocida bodega, garantizando una experiencia visualmente atractiva y fácil de usar en todos los dispositivos.",
      },
      categories: [
        {
          src: "assets/icons/knowledge/html5.svg",
          alt: "HTML icon",
          name: "HTML",
        },
        {
          src: "assets/icons/knowledge/css.svg",
          alt: "CSS icon",
          name: "CSS",
        },
        {
          src: "assets/icons/knowledge/javascript.svg",
          alt: "JavaScript icon",
          name: "JavaScript",
        },
        {
          src: "assets/icons/knowledge/api.svg",
          alt: "API icon",
          name: "API",
        },
      ],
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
      categories: [
        {
          src: "assets/icons/knowledge/css.svg",
          alt: "CSS icon",
          name: "CSS",
        },
        {
          src: "assets/icons/knowledge/javascript.svg",
          alt: "JavaScript icon",
          name: "JavaScript",
        },
        {
          src: "assets/icons/knowledge/tailwindcss.svg",
          alt: "Tailwind CSS icon",
          name: "Tailwind CSS",
        },
        {
          src: "assets/icons/knowledge/figma.svg",
          alt: "Figma icon",
          name: "Figma",
        },
        {
          src: "assets/icons/knowledge/nextdotjs.svg",
          alt: "Next.js icon",
          name: "Next.js",
        },
        {
          src: "assets/icons/knowledge/design.svg",
          alt: "Design icon",
          name: "Design",
        },
        {
          src: "assets/icons/knowledge/api.svg",
          alt: "API icon",
          name: "API",
        },
      ],
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
      categories: [
        {
          src: "assets/icons/knowledge/tailwindcss.svg",
          alt: "Tailwind CSS icon",
          name: "Tailwind CSS",
        },
        {
          src: "assets/icons/knowledge/javascript.svg",
          alt: "JavaScript icon",
          name: "JavaScript",
        },
        {
          src: "assets/icons/knowledge/nextdotjs.svg",
          alt: "Next.js icon",
          name: "Next.js",
        },
        {
          src: "assets/icons/knowledge/api.svg",
          alt: "API icon",
          name: "API",
        },
        {
          src: "assets/icons/knowledge/github.svg",
          alt: "GitHub icon",
          name: "GitHub",
        },
      ],
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
      categories: [
        {
          src: "assets/icons/knowledge/html5.svg",
          alt: "HTML icon",
          name: "HTML",
        },
        {
          src: "assets/icons/knowledge/css.svg",
          alt: "CSS icon",
          name: "CSS",
        },
        {
          src: "assets/icons/knowledge/javascript.svg",
          alt: "JavaScript icon",
          name: "JavaScript",
        },
        {
          src: "assets/icons/knowledge/figma.svg",
          alt: "Figma icon",
          name: "Figma",
        },
        {
          src: "assets/icons/knowledge/design.svg",
          alt: "Design icon",
          name: "Design",
        },
      ],
      link: "",
      date: { en: "2026 (May - Jul)", es: "2026 (May - Jul)" },
      mode: "freelance",

    },
        {
      id: 10,
      title: "Instituto Jose de San Martin",
      text: {
        en: "Implementation of a new responsive website design for a school in Buenos Aires, enhancing its visual presence and rebuilding the site using Squarespace.",
        es: "Implementación del diseño de un nuevo sitio web responsivo para una escuela de Buenos Aires, mejorando su presencia visual y reconstruyendo el sitio con Squarespace.",
      },
      categories: [
        {
          src: "assets/icons/knowledge/html5.svg",
          alt: "HTML icon",
          name: "HTML",
        },
        {
          src: "assets/icons/knowledge/css.svg",
          alt: "CSS icon",
          name: "CSS",
        },
        {
          src: "assets/icons/knowledge/javascript.svg",
          alt: "JavaScript icon",
          name: "JavaScript",
        },
        {
          src: "assets/icons/knowledge/figma.svg",
          alt: "Figma icon",
          name: "Figma",
        },
        {
          src: "assets/icons/knowledge/design.svg",
          alt: "Design icon",
          name: "Design",
        },
        {
          src: "assets/icons/knowledge/squarespace.svg",
          alt: "SquareSpace icon",
          name: "SquareSpace"
        },
      ],
      link: "https://www.sanmartinedu.com/",
      date: { en: "2026 (Jul - Aug)", es: "2026 (Jul - Ago)" },
      mode: "freelance",
      new:"New!!"

    },
  ];

  const workProjects = developer.filter((item) => item.mode !== "learning");
  const learningProjects = developer.filter((item) => item.mode === "learning");

  const renderItems = (items) =>
    items
      .slice()
      .reverse()
      .map((item, index) => (
        <ScrollReveal key={item.id} delay={index * 100} animation="fade-up">
          <div className="experience-item">
            <div>
              <div className="experience-item-header">
                <div className="experience-item-title-group">
                  {item.new ? <span className="experience-badge">{item.new}</span> : null}
                  <h3>{item.title}</h3>
                </div>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="200"
                      viewBox="0 0 15 15"
                      className="window_icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3.5a.5.5 0 0 0 1 0V3h9v9H8.5a.5.5 0 0 0 0 1H12ZM9 6.5v3a.5.5 0 0 1-1 0V7.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 7H5.5a.5.5 0 0 1 0-1h3a.498.498 0 0 1 .5.497"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>
              <p>{item.text[language]}</p>
              <p className="experience-date">
                <span>{t.experience.modes[item.mode]}</span> | {item.date[language]}
              </p>
            </div>
            <ul>
              {item.categories.map((category, index) => (
                <li key={index}>
                  <img
                    className="experience-icon"
                    src={category.src}
                    alt={category.alt || category.name}
                    title={category.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ));

  return (
    <div className="container" id="experience">
      <ScrollReveal animation="fade-down">
        <h2>{t.experience.title}</h2>
      </ScrollReveal>
      <div className="experience">
        <ScrollReveal delay={100} animation="fade-up">
          <div className="experience-section work-projects">
            <h3 className="section-title">{t.experience.professional}</h3>
            <div className="experience-developer">{renderItems(workProjects)}</div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200} animation="fade-up">
          <div className="experience-section learning-projects">
            <h3 className="section-title">{t.experience.learning}</h3>
            <div className="experience-developer">{renderItems(learningProjects)}</div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Experience;
