import React from "react";

export default function IntroMain() {
  return (
    <section className="intro-main container" id="IntroMain">
      <div className="left">
        <h1 className="title">
          Nền tảng lớp học trực tuyến hiệu quả và phổ biến
        </h1>
        <p className="des">
          Năm 2021, đối mặt với dịch Covid, việc học trực tuyến ngày càng đóng
          vai trò quan trọng trong nền giáo dục. Friendly CLass ra đời với sự
          mệnh giải quyết những vấn đề trong việc học và dạy.
        </p>
        <button class="btn btn-join">
          <i className="fa fa-hand-pointer"></i>
          <span>Tham gia ngay</span>
        </button>
      </div>
      <div className="right"></div>
    </section>
  );
}
