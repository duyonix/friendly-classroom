import React from "react";
import { pathImgFromIndex } from "../utils/constants";
function ListMember() {
  return (
    <div className="list-member">
      <img src={pathImgFromIndex + "teacher_icon.png"} alt="teacher" />
      
    </div>
  );
}

export default ListMember;
