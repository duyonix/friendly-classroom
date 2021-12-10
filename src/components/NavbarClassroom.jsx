import * as React from "react";
import Navbar from "./Navbar";

const pages = [
  {
    name: "Bảng tin",
    route: "/stream",
  },
  {
    name: "Bài tập",
    route: "/classwork",
  },
  {
    name: "Mọi người",
    route: "/member",
  },
  {
    name: "Điểm số",
    route: "/grade",
  },
];
const settings = ["Đăng xuất"];

const NavbarClassroom = () => {
  return <Navbar pages={pages} settings={settings} />;
};

export default NavbarClassroom;
