import React from "react";
import { useLocation, useParams } from "react-router-dom";
import OperationStream from "../../components/OperationStream";
// import ListPost from "../../components/ListPost";

function Stream() {
  const { classroomId } = useParams();
  const { role, classInfo } = useLocation();
  localStorage.setItem("classroomId", classroomId);
  if (role) localStorage.setItem("role", role);
  if (classInfo) localStorage.setItem("classInfo", JSON.stringify(classInfo));

  const initialPost = [
    {
      id: 1,
      name: "Võ Hoàng Vũ",
      avatar: "hoang_vu.jpg",
      time: "22 th 11",
      title: " Ahihi",
      body: "Cô thông báo bài 1 không làm bị trừ điểm",
    },
    {
      id: 2,
      name: "Võ Vũ",
      avatar: "h2.jpg",
      time: "22 th 11",
      body: "Hôm nay nghỉ nhé các em",
    },
  ];

  return (
    <div className="container">
      <OperationStream />
      {/* <ListPost/>  */}
    </div>
  );
}

export default Stream;
