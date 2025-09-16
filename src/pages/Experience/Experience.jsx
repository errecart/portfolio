import React from "react";
import "./experience.css";

const Experience = () => {
  const developer = [
    {
      id: 1,
      title: "GETOUT STUDIO",
      text: "creation of the page to video game studio",
      categories: [
        "assets/icons/knowledge/react.svg",
        "assets/icons/knowledge/CSS.svg",
        "assets/icons/knowledge/javascript.svg",
        "assets/icons/knowledge/tailwindcss.svg",
        "assets/icons/knowledge/figma.svg",
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
        "assets/icons/knowledge/react.svg",
        "assets/icons/knowledge/CSS.svg",
        "assets/icons/knowledge/javascript.svg",
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
        "assets/icons/knowledge/figma.svg",
        "assets/icons/knowledge/googleslides.svg",
        "assets/icons/knowledge/design.svg",
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
        "assets/icons/knowledge/nextdotjs.svg",
        "assets/icons/knowledge/CSS.svg",
        "assets/icons/knowledge/javascript.svg",
        "assets/icons/knowledge/tailwindcss.svg",
        "assets/icons/knowledge/figma.svg",
        "assets/icons/knowledge/nodedotjs.svg",
        "assets/icons/knowledge/design.svg",
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
                      src={`/${category}`}
                      alt=""
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
