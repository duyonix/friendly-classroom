import React from "react";
import { useLocation } from "react-router-dom";
import { pathImgFromIndex } from "../../utils/constants";

function SubmitHomework(props) {
  const homework = useLocation();
  console.log(homework);
  return (
    <div className="submit-homework container">
      <div className="logo-class">
        <div className="classname">TOÁN 6</div>
      </div>
      <div className="content">
        <div className="homework-detail">
          <img src="" alt="homework-icon" />
          <div className="detail">

          </div>
        </div>
        <div className="submit"></div>
      </div>
    </div>
  );
}

export default SubmitHomework;
