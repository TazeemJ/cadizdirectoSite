import React from "react";
import imageWork from "../../Images/Working.png";

const About = () => {
  return (
    <div>
      <h2>This is noticias-chiclana</h2>
      <div className="d-flex text-center">
        <img
          className="mx-auto"
          src={imageWork}
          alt=""
          width={"1000px"}
          height={"1000px"}
        />
      </div>
    </div>
  );
};

export default About;
