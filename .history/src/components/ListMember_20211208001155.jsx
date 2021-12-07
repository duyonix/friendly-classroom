import React from "react";
import { pathImgFromIndex } from "../utils/constants";
function ListMember() {
  const members = {
    teacher:{
      avatar: "hoang_vu.jpg",
      username: "vudeptrai99",
      gmail: "vohoangvu.dev99@gmail.com",
      sex: "Nam",
      phone: "0836215664",
    },
    students:[
      {
        avatar: "hien_vi.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "N",
        phone: "0836215664",
      },
      
    ]
  };
  return (
    <div className="list-member">
      <div className="container">
        <div className="teacher-area area">
          <div className="teacher-header header">
            <img
              className="img-header"
              src={pathImgFromIndex + "teacher_icon.png"}
              alt="teacher"
            />
            <span class="header-name">Giáo viên</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMember;
