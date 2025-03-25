import React from "react";
import "./Campus.css";
import img from "../../assets/user-icon.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src="" alt="" />
      </button>
    </div>
  );
};

export default Campus;
