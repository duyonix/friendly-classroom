import React from "react";
import { useParams } from "react-router-dom";

function Stream(props) {
  let { classroomId } = useParams();
  // console.log(classroomId);
  console.log(props);
  localStorage.setItem("classroomId", classroomId);

  return <div>Stream Page</div>;
}

export default Stream;
