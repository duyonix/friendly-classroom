import React from "react";
import { pathImgFromIndex } from "../utils/constants";
function ListMember() {
  return (
    <div className="list-member">
      <div className="teacher-area">
        <div className="teacher-header">
          <img src={pathImgFromIndex + "teacher_icon.png"} alt="teacher" />
          Giáo viên
        </div>
      </div>
    </div>
  );
}

export default ListMember;
