import React from "react";

export default function IntroFeature() {
  return (
    <section className="intro-feature">
      <div className="content container">
        <h1 className="title">Tính năng chính</h1>
        <div className="row">
          <div className="col-6 col-sm-12 col-md-6">
            <img
              class="img-illus"
              src="/assets/img/intro_func_1.png"
              alt="illustration"
            />
            <h3>Dễ dàng quản lý nhiều lớp học, nhiều học sinh</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
