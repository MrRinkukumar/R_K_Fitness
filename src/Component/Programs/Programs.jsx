import React from "react";
import "./programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="Programs">
      {/* header */}
      <div className="Programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text"> to tEACH you</span>
      </div>
      <div className="programsData-categories">
        {programsData.map((programs) => (
          <div className="categories">
            {programs.image}
            <span>{programs.heading}</span>
            <span>{programs.details}</span>
            <div className="join-now">
              {" "}
              <span>join now</span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
