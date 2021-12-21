import React from "react";
import { useLocation } from "react-router-dom";
import { pathImgFromIndex } from "../../utils/constants";
import Files from "react-files";
import AddIcon from "@mui/icons-material/Add";

function SubmitHomework(props) {
  const homework = useLocation();
  const onFilesChange = (files) => {
    console.log(files);
  };
  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              earum maxime, error provident vel numquam voluptatibus incidunt
              illum iste fugit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure, possimus.
            </p>
          </div>
        </div>
        <div className="submit">
          <div className="header" style={{ marginBottom: 10 }}>
            <span>Bài tập của bạn</span>

            <span className="status incomplete">Thiếu</span>
          </div>

          <div className="files">
            <Files
              className="files-dropzone"
              onChange={onFilesChange}
              onError={onFilesError}
              accepts={["image/png", ".pdf", "audio/*"]}
              multiple
              maxFiles={3}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button className="btn btn-add">
                {" "}
                <AddIcon style={{ marginRight: 5 }} />
                Thêm bài nộp
              </button>
              <div
                className="drop-zone"
                style={{
                  border: "2px dashed #bbb",
                  minHeight: 150,
                  margin: "20px 0",
                }}
              >
                <div className=".dndupload-arrow"></div>
                Thả file vào đây để nộp bài
              </div>
            </Files>
          </div>
          <button className="btn btn-mark">Đánh dấu là đã hoàn thành</button>
        </div>
      </div>
    </div>
  );
}

export default SubmitHomework;
