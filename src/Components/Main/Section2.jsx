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
        <div className="item">
          <p className="Text">
            Transform Your Business with Advanced Tech! Our specialists provide
            the latest solutions to drive your success in the digital world.
          </p>
        </div>
        <div className="item">
          <p className="Text">
            Harness the Power of Smart Technology! Discover advanced tools
            designed to streamline operations and sharpen your competitive edge
            in the digital landscape.
          </p>
        </div>
        <div className="item">
          <p className="Text">
            Unlock New Possibilities with Smart Tech Solutions! Our dedicated
            team offers the most advanced tools to streamline operations and
            enhance your competitive edge in the digital realm.
          </p>
        </div>
        {/* <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          distinctio eius necessitatibus provident eveniet quaerat ipsum cumque
          expedita. Magnam voluptatem iusto blanditiis, odio vitae dicta sequi
          similique illo vel harum!
        </h2> */}
      </div>
    </section>
  );
}

export default Section2;
