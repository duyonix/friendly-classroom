import React from "react";

export default function AboutUs() {
  const members = [
    {
      name: "Võ Hoàng Vũ",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
    },
    {
      name: "Võ Hoàng Vũ",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
    },
    {
      name: "Võ Hoàng Vũ",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
    },
    {
      name: "Võ Hoàng Vũ",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
    },
    {
      name: "Võ Hoàng Vũ",
      role: "Technical Architecture",
      id: "19120727",
      des: "Sinh viên năm 3",
      dept: "công nghệ thông tin",
    },
  ];
  const renderInfoMember = ()=>{
      return members.map((item,index)=>{
          return <AboutUs student={}/>
      })
  }
  return (
    <section className="about-us">
      <div className="about-title">
        <h1>
          Nhóm <span className="group-name">HiFive</span>
        </h1>
        <p>Năm thành lập: 2021</p>
        <p>Môn học: Nhập môn công nghệ phần mềm</p>
      </div>
      <div className="about-member">
          {
              
          }
      </div>
    </section>
  );
}
