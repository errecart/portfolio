import React from "react";
import "./MainAni.css"
import Animation from "./animation/Animation";

const MainAni = () => {
  return (
    <div className="MainAni container" >
      <div className="main_info" id="main">
        <span>Front-end Developer & UX/UI Designer</span>
        <h1>Juan Ignacio Errecart</h1>
        <p>
          Front-end Developer with experience developing responsive and
          interactive web applications. I'm familiar with HTML, CSS, JavaScript
          and modern frameworks such as React and Next.js. In addition, I'm
          expanding my skills in UX/UI Design, focusing on creating
          user-centered, intuitive, and visually engaging interfaces using tools
          like Figma.
        </p>
      </div>
      <Animation />
    </div>
  );
};

export default MainAni;
