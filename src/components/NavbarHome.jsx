import * as React from "react";
import Navbar from "./Navbar";

const pages = [
  {
    name: "Trang chủ",
    route: "/home",
  },
  {
    name: "Lịch",
    route: "/calendar",
  },
  {
    name: "Việc cần làm",
    route: "/todo-list",
  },
  {
    name: "Tài khoản",
    route: "/user-account",
  },
];
const settings = ["Đăng xuất"];

const NavbarHome = () => {
  return <Navbar pages={pages} settings={settings} />;
};

export default NavbarHome;
