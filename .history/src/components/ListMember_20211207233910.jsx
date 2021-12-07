import React from "react";
import { pathImgFromIndex } from "../utils/constants";
function ListMember() {
  return (
    <div className="list-member">
      <img src={pathImgFromIndex + "teacher_icon"} alt="" />
    </div>
  );
}

export default ListMember;
