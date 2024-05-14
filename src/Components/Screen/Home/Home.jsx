import React from "react";
import OtrasCard from "../../OtrasCard/OtrasCard";
import GalleryCard from "../../GalleryCard/GalleryCard";
import HomeArticle from "../../HomeArticle/HomeArticle";

const Home = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className="my-2 mt-4">
            <div className="title-head2">
              <h2 className="heading2">News from Cadiz</h2>
            </div>
          </div>
          <div className="row ">
            <HomeArticle />
            <HomeArticle />
            <HomeArticle />
            <HomeArticle />
            <HomeArticle />
          </div>
        </div>
        <div>
          <div className="my-2 mt-4">
            <div className="title-head2">
              <h2 className="heading2">Reportajes</h2>
            </div>
          </div>
          <div className="row ">
            <GalleryCard colNum={6} Height={true} />
            <GalleryCard colNum={6} Height={true} />
            <GalleryCard />
          </div>
        </div>
        <div>
          <div className="my-2 mt-4">
            <div className="title-head2">
              <h2 className="heading2">Desconecta</h2>
            </div>
          </div>
          <div className="row ">
            <GalleryCard colNum={6} />
            <GalleryCard colNum={6} />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
        </div>
        <div className="row my-5">
          <div className="title-head2">
            <h2 className="heading2">Otras Secciones</h2>
          </div>
          <div
            className="OtrasContainer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <OtrasCard />
            <OtrasCard />
            <OtrasCard />
            <OtrasCard />
            <OtrasCard />
            <OtrasCard />
            <OtrasCard />
            <OtrasCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
