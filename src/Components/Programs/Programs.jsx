import React from "react";
import "./Programs.css";
import img from "../../assets/user-icon.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={img} alt="" />
        <div className="caption">
          <img src="" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img} alt="" />
        <div className="caption">
          <img src="" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img} alt="" />
        <div className="caption">
          <img src="" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
