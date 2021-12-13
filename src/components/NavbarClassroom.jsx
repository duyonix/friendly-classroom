import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";

const NavbarClassroom = () => {
  const [classroomId, setClassroomId] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("classroomId")) {
      setClassroomId(localStorage.getItem("classroomId"));
    }
    // eslint-disable-next-line
  }, [classroomId]);

  const pages = [
    {
      name: "Bảng tin",
      route: `/classroom/${classroomId}/stream`,
    },
    {
      name: "Bài tập",
      route: `/classroom/${classroomId}/classwork`,
    },
    {
      name: "Mọi người",
      route: `/classroom/${classroomId}/member`,
    },
    {
      name: "Điểm số",
      route: `/classroom/${classroomId}/grade`,
    },
  ];
  const settings = ["Đăng xuất"];

  // console.log("navbar router", props);
  return <Navbar pages={pages} settings={settings} />;
};

export default NavbarClassroom;
