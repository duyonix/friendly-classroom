import React from "react";
import { useLocation } from "react-router-dom";
function SubmitHomework(props) {

  console.log(useLocation(props));
  return <div className="submit-homework"></div>;
}

export default SubmitHomework;
