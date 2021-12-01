import React from "react";
import CardMember from "./CardMember";

export default function AboutUs() {
  const members = [
    {
      name: "Võ Hoàng Vũ",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
      img: "meo_ngu_ngoc.jpg"
    },
    {
      name: "Đặng Thái Duy",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
      img: "meo_ngu_ngoc.jpg"
    },
    {
      name: "Đàm Thị Xuân Ý",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
      img: "meo_ngu_ngoc.jpg"
    },
    {
      name: "Nguyễn Thị Hiền Vi",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
      img: "meo_ngu_ngoc.jpg"
    },
    {
      name: "Đinh Minh Bảo",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
      img: "meo_ngu_ngoc.jpg"
    },
  ];
  const renderInfoMember = (arr) => {
    return arr?.map((item, index) => {
      return <CardMember key={index + 10} student={item} />;
    });
  };
  return (
    <section className="about-us">
      <div className="about-title">
        <h1>
          Nhóm <span className="group-name">HiFive</span>
        </h1>
        <p>Năm thành lập: 2021</p>
        <p>Môn học: Nhập môn công nghệ phần mềm</p>
      </div>
      <div className="about-member">{renderInfoMember(members)}</div>
    </section>
  );
}
