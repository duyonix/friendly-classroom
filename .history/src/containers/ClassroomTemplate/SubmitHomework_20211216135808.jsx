import React from "react";
import { useLocation } from "react-router-dom";
import { pathImgFromIndex } from "../../utils/constants";

function SubmitHomework(props) {
  const homework = useLocation();
  console.log(homework);
  return (
    <div className="submit-homework container">
      <div className="logo-class">
        <div className="classname">TOÁN 6</div>
      </div>
      <div className="content">
        <div className="homework-detail">
          <img
            src={pathImgFromIndex + "homework_icon.png"}
            alt="homework-icon"
          />
          <div className="detail">
            <h3 className="name" style=={}>Nhân biểu thức</h3>
            <div className="sub-detail">
              <p>
                Ngày đăng: <span>17.11.2021</span>
              </p>
              <p>
                Đến hạn: <span>25.11.2021</span>
              </p>
              <p>
                Điểm bài tập: <span>100</span>
              </p>
            </div>
          </div>
        </div>
        <div className="submit"></div>
      </div>
    </div>
  );
}

export default SubmitHomework;
