import React from "react";
import "./Main.css";
import BG1 from "../../assets/bg1.png";
// import '../Cards/Informative_Card.jsx'
import Card from "../Cards/Card.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";

const Main = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h2>Innovative Technological Solutions</h2>
          <p>
            At Innovative Tech, we transform ideas into impactful digital
            solutions. Specializing in website and app development, project
            management, and blockchain technology, we empower businesses to grow
            through technology. Our team is dedicated to delivering tailored
            solutions that meet your unique needs with creativity, precision,
            and expertise. Let’s build something extraordinary together!
          </p>
          <div style={{display:"inline-block"}}>
            <button className="quote-button2">Get a quote</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={BG1} alt="Hero" />
        </div>
      </section>

      <Section2/>
      <Section3/>
    </main>
  );
};

export default Main;
