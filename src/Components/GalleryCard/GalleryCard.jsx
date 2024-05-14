import React from "react";

import "./GalleryCard.css";
const GalleryCard = ({ colNum, Height }) => {
  return (
    <div className={`col px-1 mb-2 col-${colNum ? colNum : "3"}`}>
      <div className={`card GalleryCard  ${Height ? "cardHeightSet1" : "cardHeightSet"}`}>
        <img
          width="680"
          height="500"
          decoding="async"
          data-lazy-src="https://www.cadizdirecto.com/img/horoscopo-portada2.webp"
          className="entered lazyloaded"
          src="https://www.cadizdirecto.com/img/horoscopo-portada2.webp"
          data-ll-status="loaded"
        />

        <h5>
          <a href="https://www.cadizdirecto.com/horoscopo/">Horóscopo de Hoy</a>
        </h5>
      </div>
    </div>
  );
};

export default GalleryCard;
