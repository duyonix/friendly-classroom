import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Stream() {
  const { classroomId } = useParams();
  const { role } = useLocation();
  localStorage.setItem("classroomId", classroomId);
  if (role) localStorage.setItem("role", role);

  return <div>Stream Page</div>;
}

export default Stream;
