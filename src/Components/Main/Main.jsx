import React from "react";
import "./Main.css";
import BG1 from "../../assets/bg1.png";
// import '../Cards/Informative_Card.jsx'
import Card from "../Cards/Card.jsx";

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
          <button className="quote-button">Get a quote</button>
        </div>
        <div className="hero-image">
          <img src={BG1} alt="Hero" />
        </div>
      </section>

      <section className="Scroll">
        <div className="LeftContainer">
          <img src={BG1} alt="Tech Expert" />
        </div>
        <div className="RightContainer">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            distinctio eius necessitatibus provident eveniet quaerat ipsum
            cumque expedita. Magnam voluptatem iusto blanditiis, odio vitae
            dicta sequi similique illo vel harum!
          </h2>
        </div>
      </section>

      <div className="Cards">
        <Card />
        <Card />
        <Card />  
        
      </div>
    </main>
  );
};

export default Main;
