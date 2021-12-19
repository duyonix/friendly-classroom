import React from "react";
import { useLocation } from "react-router-dom";
function SubmitHomework(props) {
  const homework = useLocation();
  console.log(homework);
  return (
    <div className="submit-homework container">
      <div className="logo-class">
        <div className="classname">TOÁN 6</div>
      </div>
      <div className="homework-detail">
        
      </div>
    </div>
  );
}

export default SubmitHomework;
