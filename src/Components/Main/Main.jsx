import React from "react";
import "./Main.css";
import BG1 from "../../assets/bg1.png";

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

      <section className="about">
        <div className="about-image">
          <img src="tech-expert.jpg" alt="Tech Expert" />
        </div>
        <div className="about-text">
          <h3>About Us</h3>
          <h2>Transforming Ideas into Reality</h2>
          <p>
            We specialize in delivering innovative tech solutions tailored to
            your business needs, ensuring seamless integration and exceptional
            results.
          </p>
          <div className="support">
            <button>Technical Support</button>
            <button>Quality Support</button>
          </div>
          <div className="progress">
            <div>
              Project Success Rate <span>95%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "95%" }}></div>
            </div>
            <div>
              Client Satisfaction <span>98%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "98%" }}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;