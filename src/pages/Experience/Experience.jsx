import React from "react";
import "./experience.css";

const Experience = () => {
  const developer = [
    {
      id: 1,
      title: "GETOUT STUDIO",
      text: "creation of the page to video game studio",
      categories: [
        {
          src: "assets/icons/knowledge/react.svg",
          alt: "React icon",
          name: "React",
        },
        {
          src: "assets/icons/knowledge/CSS.svg",
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
      link: "https://getout-studio.com",
      date: "2024 (Apr - Jun)",
      mode: "Freelance",
    },
    {
      id: 2,
      title: "PEPOLA",
      text: "Creation of the page to video game studio",
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
          src: "assets/icons/knowledge/CSS.svg",
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
      text: "Plant care app with a gaming experience.",
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
      text: "Frontend developer position for a digital marketing studio, also developing the studio's website",
      categories: [
        {
          src: "assets/icons/knowledge/nextdotjs.svg",
          alt: "Next.js icon",
          name: "Next.js",
        },
        {
          src: "assets/icons/knowledge/CSS.svg",
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
      link: "https://www.visdan.agency",
      date: "2024 - Present",
      mode: "Freelance",
    },
    {
      id: 5,
      title: "Hogarth",
      text: "Position as a Web Developer working on an account for one of the world's leading technology companies. I fulfill the role of Localization and Adaptation of the company's website working alongside a highly demanding and agile team.",
      categories: [],
      link: "https://www.visdan.agency",
      date: "2025 (Jul - Sept)",
      mode: "Temporary Contract",
    },
  ];

  return (
    <div className="container" id="experience">
      <h2>Experience</h2>
      <div className="experience">
        <div className="experience-developer">
          {developer.map((item) => (
            <div className="experience-item" key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="experience-date">
                  {item.mode} | {item.date}
                </p>
              </div>
              <ul>
                {item.categories.map((category, index) => (
                  <li key={index}>
                    <img
                      className="experience-icon"
                      src={`/${category.src}`}
                      alt={category.alt || category.name}
                      title={category.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
