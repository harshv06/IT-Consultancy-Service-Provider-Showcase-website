import React, { useEffect, useRef, useState } from "react";
import "./Main.css";
import BG1 from "../../assets/bg1.png";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(heroTextRef.current); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (heroTextRef.current) {
      observer.observe(heroTextRef.current);
    }

    return () => {
      if (heroTextRef.current) {
        observer.unobserve(heroTextRef.current);
      }
    };
  }, []);

  return (
    <main>
      <section className="hero">
        <div
          ref={heroTextRef}
          className={`hero-text ${isVisible ? "fade-in" : ""}`}
        >
          <h2><span className="animated-word"></span> Technological Solutions</h2>
          <p>
            At Innovative Tech, we transform ideas into impactful digital
            solutions. Specializing in website and app development, project
            management, and blockchain technology, we empower businesses to grow
            through technology. Our team is dedicated to delivering tailored
            solutions that meet your unique needs with creativity, precision,
            and expertise. Let’s build something extraordinary together!
          </p>
          <div style={{ display: "inline-block" }}>
            <button className="quote-button2">Get a quote</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={BG1} alt="Hero" />
        </div>
      </section>

      <Section2 />
      
      <Section3 />
    </main>
  );
};

export default Main;