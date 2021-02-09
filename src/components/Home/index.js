import React from "react";
import "./index.css";

function index() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={process.env.PUBLIC_URL + "/images/amazon-clone__home-image.jpg"}
          alt="HomeImage"
        />
      </div>
    </div>
  );
}

export default index;
