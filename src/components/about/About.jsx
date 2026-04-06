import React from "react";
import ButtonMain from "../ButtonMain";
import AboutText from "./AboutText.mdx";
import AboutContact from "./AboutContact.mdx";

import "./About.css";
import "../Buttons.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-title">Gustavo Mendes</div>
      <AboutText />
      <AboutContact />
      <div className="copyright">
        <span>All rights reserved. </span>
        <span>© 2026</span>
      </div>
    </section>
  );
};

export default About;
