import React from "react";
import "./OtrasCard.css";

const OtrasCard = () => {
  return (
    <div className="OtrasCard">
      <a
        title="Tarot del Amor"
        href="https://www.cadizdirecto.com/tarot/tirada-amor-gratis/"
      >
        <img
          width="150"
          height="50"
          decoding="async"
          alt="Amor"
          data-lazy-loaded="true"
          data-lazy-src="https://www.cadizdirecto.com/img/inicio/tarot-amor.jpg"
          className="entered lazyloaded"
          src="https://www.cadizdirecto.com/img/inicio/tarot-amor.jpg"
          data-ll-status="loaded"
        />
        <h4>Tarot del Amor</h4>
      </a>
    </div>
  );
};

export default OtrasCard;
