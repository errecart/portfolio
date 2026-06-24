import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./experience.css";

const Experience = () => {
  const developer = [
    {
      id: 1,
      title: "GETOUT STUDIO",
      text: "Website Development for a Video Game Studio, implementing the design provided by the studio and creating a responsive and visually appealing website to showcase their projects and services.",
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
      date: "2024 (Apr - Jun)",
      mode: "Freelance",
    },
    {
      id: 2,
      title: "PEPOLA",
      text: "Website Development for a Video Game Studio, implementing the design provided by the studio and creating a responsive and visually appealing website to showcase their projects and services.",
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
      date: "2024 (Jul - Ago)",
      mode: "Freelance",
    },
    {
      id: 3,
      title: "Flora EXP",
      text: "Plant care app with a gaming experience. Use in the CoderHouse Bootcamp to learn design and UX/UI principles, creating a case study for the app's design and user experience.",
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
      date: "2024 - 2025",
      link: "https://www.behance.net/gallery/224568925/Flora-Exp-Case-Study",
      mode: "Learning Project",
    },
    {
      id: 4,
      title: "Visdan Agency",
      text: "Frontend developer position for a digital marketing studio. I work closely with the design team to implement visually appealing and responsive websites for the studio's clients, ensuring a seamless user experience across all devices.",
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
      date: "2024 - 2025",
      mode: "Freelance",
    },
    {
      id: 5,
      title: "Hogarth",
      text: "Position as a Web Developer working on an account for one of the world's leading technology companies. I fulfill the role of Localization and Adaptation of the company's website working alongside a highly demanding and agile team.",
      categories: [],
      link: "",
      date: "2025 (Jul - Sept)",
      mode: "Temporary Contract",
    },
    {
      id: 6,
      title: "LunluntaWines",
      text: "Implementation of design for a new responsive website for a renowned vineyard, ensuring a visually appealing and user-friendly experience across all devices.",
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
      date: "2025 (Oct - Dic)",
      mode: "Freelance",
    },
    {
      id: 7,
      title: "PlayBook UI",
      text: "New project where I collect, preview, add, and enable anyone to use and add user interface components to their own projects.",
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
      date: "2025 (Oct - Dic)",
      mode: "Learning Project",
    },
    {
      id: 8,
      title: "DevPulse",
      text: "New project where you can search for GitHub users and analyze information about their repositories, technologies, and capabilities as programmers.",
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
      date: "2026 (Jan - Feb)",
      mode: "Learning Project",
    },
        {
      id: 9,
      title: "InRide Media",
      text: "Creating attractive and functional visual interfaces. Optimizing user experience (UX). Collaborating with the team to turn ideas into real web pages.",
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
      date: "2026 (May - Present)",
      mode: "Freelance",
      new:"New!!"

    },
  ];

  const workProjects = developer.filter((item) => item.mode !== "Learning Project");
  const learningProjects = developer.filter((item) => item.mode === "Learning Project");

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
              <p>{item.text}</p>
              <p className="experience-date">
                <span>{item.mode}</span> | {item.date}
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
        <h2>Experience</h2>
      </ScrollReveal>
      <div className="experience">
        <ScrollReveal delay={100} animation="fade-up">
          <div className="experience-section work-projects">
            <h3 className="section-title">Professional Experiences</h3>
            <div className="experience-developer">{renderItems(workProjects)}</div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200} animation="fade-up">
          <div className="experience-section learning-projects">
            <h3 className="section-title">Learning projects</h3>
            <div className="experience-developer">{renderItems(learningProjects)}</div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Experience;
