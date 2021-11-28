import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer container">
      <div className="general div-4 col-sm-12 col-md-12 col-lg-4">
        <Link to="/home" className="logo">
          <img src="../assets/img/Friendly_logo.png" alt="Our Logo" />
        </Link>
        <h3>Lớp học thân thiện - Friendly Classroom </h3>
        <p>&copy;Copyright HiFive Team</p>
      </div>
      <div className="address div-4 col-sm-12 col-md-12 col-lg-4">
        <h3>Địa chỉ</h3>
        <ul>
          <li>Trường Đại học Khoa học tự nhiên</li>
          <li>Khoa Công nghệ thông tin</li>
          <li>19CNTN</li>
        </ul>
      </div>
    </section>
  );
}