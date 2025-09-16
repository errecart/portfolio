import React from "react";
import Contact from "../ContactMe/Contact";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import MainAni from "../Main2/MainAni";

const Container = () => {
  return (
    <>
      <MainAni />
      <Education />
      <Experience/>
      <Contact/>
    </>
  );
};

export default Container;
