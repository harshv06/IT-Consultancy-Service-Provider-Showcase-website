import React from "react";
import "./Section2.css";
import BG1 from "../../assets/bg2.jpg";

function Section2() {
  return (
    <section className="Scroll">
      <div className="LeftContainer">
        <img src={BG1} alt="Tech Expert" />
      </div>
      <div className="RightContainer">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          distinctio eius necessitatibus provident eveniet quaerat ipsum cumque
          expedita. Magnam voluptatem iusto blanditiis, odio vitae dicta sequi
          similique illo vel harum!
        </h2>
      </div>
    </section>
  );
}

export default Section2;
