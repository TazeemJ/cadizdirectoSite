import React from "react";
import imageWork from "../../Images/Working.png";

const Carnaval = () => {
  return (
    <div>
      THIS IS carnaval
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

export default Carnaval;
