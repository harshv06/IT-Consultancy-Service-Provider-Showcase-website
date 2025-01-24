import React, { useEffect, useRef } from "react";
import "./Section3.css";

const Section3 = () => {
  const cardsRef = useRef([]);

  const data = [
    {
      id: 1,
      Title: "Website Development",
    },
    {
      id: 2,
      Title: "Android Application Development",
    },
    {
      id: 3,
      Title: "IOS Application Development",
    },
    {
      id: 4,
      Title: "Digital Marketing",
    },
    {
      id: 5,
      Title: "Graphic Design",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="ContainerSection3">
      <div className="TextBox">
        <p className="TextBox_Text">
          <span style={{fontWeight: "bold",fontSize: "1.7rem"}}>We</span> are a dynamic startup based in Pune, driven by a team of young and
          passionate developers dedicated to revolutionizing the IT industry.
          Our mission is to deliver exceptional services by leveraging our
          extensive skills and expertise. We are committed to understanding and
          addressing the unique pain points of our customers, ensuring that we
          meet their specific requirements while respecting budget constraints.
          Our innovative approach and customer-centric mindset empower us to
          create tailored solutions that not only fulfill immediate needs but
          also foster long-term success. By staying at the forefront of
          technology and industry trends, we strive to exceed expectations and
          build lasting partnerships with our clients. Join us on our journey to
          transform ideas into impactful digital solutions that drive growth and
          innovation.
        </p>
      </div>
      <div className="CardsBox">
        {/* <div className="Cards"> */}
        {data.map((card) => (
          <div
            ref={(el) => (cardsRef.current[card.id - 1] = el)}
            key={card.id}
            className="CardContainer"
          >
            <h1 className="CardTitle">{card.Title}</h1>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Section3;
