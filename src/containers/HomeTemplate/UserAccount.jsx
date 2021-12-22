import React, { useState } from "react";
import { pathImgFromIndex } from "../../utils/constants";
import NavbarHome from "../../components/NavbarHome";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

function UserAccount() {
  const initialInfo = {
    username: "ngngan212",
    name: "Nguyễn Ngạn",
    email: "nganguyen212@gmail.com",
    birth: "01/06/2008",
    pass: "********",
    province: "Quảng Nam",
    school: "Đo Đo",
    class: "6/2",
  };
  const initialField = {
    username: "",
    name: "Họ tên",
    email: "Email",
    birth: "Ngày sinh",
    pass: "Mật khẩu",
    province: "Tỉnh/ thành phố",
    school: "Trường học",
    class: "Lớp",
  };

  const [buttonText, setButtonText] = useState(initialInfo.name);
  const changeText = (text) => setButtonText(text);
  return (
    <div>
      {/* <NavbarHome /> */}
      <div className="user-account">
        <img
          src={pathImgFromIndex + "meo_ngu_ngoc.jpg"}
          alt=""
          width="200"
          height="200"
        ></img>
        <div className="info">
          <h2 className="username">{initialInfo.username}</h2>
          <hr className="shareHr" />
          <div className="infoline">
            <div className="field-container">
              <h4 className="field">{initialField.name}</h4>
              <h4 className="field">{initialField.birth}</h4>
              <h4 className="field">{initialField.email}</h4>
              <h4 className="field">{initialField.pass}</h4>
              <h4 className="field">{initialField.province}</h4>
              <h4 className="field">{initialField.school}</h4>
              <h4 className="field">{initialField.class}</h4>
            </div>
            <div className="value-container">
              <h4 className="value-field">{initialInfo.name}</h4>
              <h4 className="value-field">{initialInfo.birth}</h4>
              <h4 className="value-field">{initialInfo.email}</h4>
              <h4 className="value-field">{initialInfo.pass}</h4>
              <h4 className="value-field">{initialInfo.province}</h4>
              <h4 className="value-field">{initialInfo.school}</h4>
              <h4 className="value-field">{initialInfo.class}</h4>
            </div>
            <div className="button-edit-info">
              <div>
                <IconButton id="nameButton">
                  <EditIcon />
                </IconButton>
              </div>
              <div>
                <IconButton id="nameButton">
                  <EditIcon />
                </IconButton>
              </div>
              <div>
                <IconButton id="nameButton">
                  <EditIcon />
                </IconButton>
              </div>
              <div>
                <IconButton id="nameButton">
                  <EditIcon />
                </IconButton>
              </div>
              <div>
                <IconButton id="nameButton">
                  <EditIcon />
                </IconButton>
              </div>
              <div>
                <IconButton id="nameButton">
                  <EditIcon />
                </IconButton>
              </div>
              <div>
                <IconButton id="nameButton">
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
