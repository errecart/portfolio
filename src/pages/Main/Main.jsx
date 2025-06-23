import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="container" id="main">
      <div className="main-container">
        <div className="main-title">
          <span>Front-end Developer & UX/UI Designer</span>
          <h1>Juan Ignacio Errecart</h1>
        </div>
        <div className="main-img">
          <img src="assets/image/self.png" alt="my person" />
        </div>
        <div className="main-data">
          <p>
            Front-end Developer with experience developing responsive and
            interactive web applications. I'm familiar with HTML, CSS,
            JavaScript and modern frameworks such as React and Next.js. In
            addition, I'm expanding my skills in UX/UI Design, focusing on
            creating user-centered, intuitive, and visually engaging interfaces
            using tools like Figma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
