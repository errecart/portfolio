import React from "react";
import "./experience.css";

const Experience = () => {
  const developer = [
    {
      id: 1,
      title: "GETOUT STUDIO",
      text: "creation of the page to video game studio",
      categories: ["React", "CSS", "JavaScript", "Tailwind", "Figma", "API"],
      link: "https://getout-studio.com",
      date: "2024",
      category: "developer",
      mode: "Freelance",
    },
    {
      id: 2,
      title: "PEPOLA",
      text: "Creation of the page to video game studio",
      categories: ["React", "CSS", "JavaScript",],
      link: "https://pepola.in",
      date: "2024",
      category: "developer",
      mode: "Freelance",
    },
    {
      id: 3,
      title: "Visdan Agency",
      text: "Frontend developer position for a digital marketing studio, also developing the studio's website",
      categories: ["Next.js", "CSS", "JavaScript", "Figma", "Node.js"],
      link: "https://www.visdan.agency",
      date: "2024 - Present",
      category: "developer",
      mode: "",
    },
  ];
  const design = [
    {
      id: 1,
      title: "Flora EXP",
      text: "Plant care app with a gaming experience. (Learning project)",
      categories: ["API", "Figma", "Google Slide"],
      date: "2024 - 2025",
      category: "Designer",
      link:"https://www.behance.net/gallery/224568925/Flora-Exp-Case-Study",
      mode: "Learning",
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
                <p className="experience-date">{item.date}</p>
                <p className="experience-mode">{item.mode}</p>
                <ul className="experience-categories">
                  {item.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ul>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.06 1.28289L17.717 6.93989C17.9979 7.22114 18.1557 7.60239 18.1557 7.99989C18.1557 8.39739 17.9979 8.77864 17.717 9.05989L12.061 14.7179C11.7796 14.9993 11.398 15.1574 11 15.1574C10.602 15.1574 10.2204 14.9993 9.939 14.7179C9.65761 14.4365 9.49952 14.0548 9.49952 13.6569C9.49952 13.2589 9.65761 12.8773 9.939 12.5959L13.035 9.49989H1.5C1.10218 9.49989 0.720644 9.34185 0.43934 9.06055C0.158035 8.77925 0 8.39771 0 7.99989C0 7.60206 0.158035 7.22053 0.43934 6.93923C0.720644 6.65792 1.10218 6.49989 1.5 6.49989H13.035L9.94 3.40389C9.65874 3.12249 9.50078 2.74089 9.50087 2.34304C9.50097 1.94518 9.65911 1.56365 9.9405 1.28239C10.2219 1.00113 10.6035 0.843168 11.0014 0.843262C11.3992 0.843356 11.7807 1.00149 12.062 1.28289H12.06Z"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
        <div className="experience-design">
          {design.map((item) => (
            <div className="experience-item" key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="experience-date">{item.date}</p>
                <p className="experience-mode">{item.mode}</p>
                <ul className="experience-categories">
                  {item.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ul>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.06 1.28289L17.717 6.93989C17.9979 7.22114 18.1557 7.60239 18.1557 7.99989C18.1557 8.39739 17.9979 8.77864 17.717 9.05989L12.061 14.7179C11.7796 14.9993 11.398 15.1574 11 15.1574C10.602 15.1574 10.2204 14.9993 9.939 14.7179C9.65761 14.4365 9.49952 14.0548 9.49952 13.6569C9.49952 13.2589 9.65761 12.8773 9.939 12.5959L13.035 9.49989H1.5C1.10218 9.49989 0.720644 9.34185 0.43934 9.06055C0.158035 8.77925 0 8.39771 0 7.99989C0 7.60206 0.158035 7.22053 0.43934 6.93923C0.720644 6.65792 1.10218 6.49989 1.5 6.49989H13.035L9.94 3.40389C9.65874 3.12249 9.50078 2.74089 9.50087 2.34304C9.50097 1.94518 9.65911 1.56365 9.9405 1.28239C10.2219 1.00113 10.6035 0.843168 11.0014 0.843262C11.3992 0.843356 11.7807 1.00149 12.062 1.28289H12.06Z"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
