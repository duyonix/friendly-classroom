import React from "react";
import use from "react-router-dom";
function SubmitHomework(props) {
  const { homework } = props;
  console.log(homework);
  return <div className="submit-homework"></div>;
}

export default SubmitHomework;