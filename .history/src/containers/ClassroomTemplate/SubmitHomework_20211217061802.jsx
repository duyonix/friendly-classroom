import React from "react";
import { useLocation } from "react-router-dom";
import { pathImgFromIndex } from "../../utils/constants";
import AddIcon from "@mui/icons-material/Add";

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
            height="100"
          />
          <div className="detail">
            <h3 className="name">Nhân biểu thức</h3>
            <div className="sub-detail">
              <p>
                <span>Ngày đăng:</span> 17.11.2021
              </p>
              <p>
                <span> Đến hạn:</span> 25.11.2021
              </p>
              <p>
                <span> Điểm bài tập:</span> 100
              </p>
            </div>
          </div>
        </div>
        <div className="submit">
          <div className="header">
            <span>Bài tập của bạn</span>

            <span className="status incomplete">Thiếu</span>
          </div>
          <button className="btn btn-add">
            {" "}
            <AddIcon style={{ marginRight: 5 }} />
            Thêm bài nộp
          </button>
          <button className="btn btn-mark">Đánh dấu là đã hoàn thành</button>
        </div>
      </div>
      
       
     
    </div>
  );
}

export default SubmitHomework;
