import React from "react";
import { useLocation } from "react-router-dom";
function SubmitHomework(props) {
  const homework = useLocation(props);
  console.log(homework);
  return <div className="submit-homework"></div>;
}

export default SubmitHomework;
