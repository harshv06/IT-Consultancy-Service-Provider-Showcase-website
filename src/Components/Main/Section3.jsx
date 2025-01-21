import React from "react";
import BG1 from "../../assets/bg2.jpg";
import "./Section3.css";
function Section3() {
  const data = [
    { id: "1", Title: "Main1", Description: "Done" },
    { id: "2", Title: "Main2", Description: "Done" },
    { id: "3", Title: "Main3", Description: "Done" },
    { id: "4", Title: "Main4", Description: "Done" },
    { id: "4", Title: "Main4", Description: "Done" },
    { id: "4", Title: "Main4", Description: "Done" },
  ];

  const CustomCard = ({ data }) => {
    console.log(data);
    return (
      <div className="CardsContainer">
        <div className="Title">
          <p>{data.Description}</p>
        </div>
        {/* {data.Title} */}
      </div>
    );
  };

  return (
    <div className="ContainerSection3">
      <div className="TextBox">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error,
        perferendis eaque maxime ut quos eligendi voluptatum amet iure itaque,
        ad qui? Aperiam beatae hic quam? Culpa iusto obcaecati libero expedita
        assumenda nobis hic, dolores quas eum atque, ipsum itaque impedit. Amet
        sequi deserunt laborum numquam fugit esse at! Repellendus ipsam, saepe
        corporis fuga adipisci voluptatem expedita sit tempora esse iure!
        Necessitatibus assumenda quidem dicta magni! Commodi dolorem pariatur
        deleniti itaque doloremque autem est labore velit in! Corporis,
        architecto laudantium harum quibusdam distinctio at ipsam itaque, neque
        magnam sapiente tempore, quia quisquam dolores. Ducimus delectus
        deserunt, facere repudiandae quia ut.
      </div>

      <div className="CardsBox">
        {data.map((item) => (
          <CustomCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Section3;
