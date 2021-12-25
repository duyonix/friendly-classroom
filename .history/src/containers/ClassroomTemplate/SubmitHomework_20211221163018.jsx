import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { pathImgFromIndex } from "../../utils/constants";
import Files from "react-files";
import AddIcon from "@mui/icons-material/Add";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
function SubmitHomework(props) {
  const homework = useLocation();
  const [file, setFile] = useState(null);
  const onFilesChange = (files) => {
    setFile(files[0]);
    console.log(files[0]);
  };
  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  function format2Digits(n) {
    return n < 10 ? "0" + n : n;
  }
  const convertDate = (date) => {
    date = new Date(date);
    let hours, minutes, seconds;
    hours = format2Digits(date.getHours());
    minutes = format2Digits(date.getMinutes());
    seconds = format2Digits(date.getSeconds());

    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var yyyy = date.getFullYear();
    return " " + dd + "/" + mm + "/" + yyyy + " " + hours + ":" + minutes;
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
                <span> Điểm tối đa bài tập:</span> 100
              </p>
            </div>
            <p style={{ marginTop: 10 }}>
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

            <span className="status incomplete">Chưa nộp bài</span>
          </div>
          <h4
            style={{
              textAlign: "right",
              fontWeight: "normal",
              fontSize: 16,
              margin: "10px 0",
              lineHeight: "25px",
            }}
          >
            Kích thước tối đa: 20MB <br />
            Số lượng file: 1, nếu nhiều file hãy nén lại
          </h4>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Bài làm này do chính tôi thực hiện"
            />
          </FormGroup>
          <div className="files">
            <Files
              className="files-dropzone"
              onChange={onFilesChange}
              onError={onFilesError}
              maxFiles={1}
              maxFileSize={20971520}
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
                <div className="up-arrow"></div>
                Thả file vào đây để nộp bài
              </div>
            </Files>
            <div
              class="card"
              style={{
                width: "100%",
                borderRadius: 10,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
                  marginB
              }}
            >
              <div class="card-body p-3 file-info">
                <h5 class="card-title">{file?.name}</h5>
                <div className="info d-flex justify-content-between">
                  <div className="left">
                    <h6 class="card-subtitle mb-2 text-muted">
                      Kích thước: {file?.sizeReadable}
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      Loại: {file?.extension}
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      Sửa lần cuối: {convertDate(file?.lastModified)}
                    </h6>
                  </div>
                  <button class="btn">
                    <DeleteIcon fontSize="large" color="error" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-mark">Nộp bài</button>
        </div>
      </div>
    </div>
  );
}

export default SubmitHomework;
