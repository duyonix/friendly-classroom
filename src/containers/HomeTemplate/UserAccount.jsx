import React, { useState, useEffect } from "react";
import { pathImgFromIndex } from "../../utils/constants";
import NavbarHome from "../../components/NavbarHome";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../redux/modules/Home/action";
import Loading from "../../components/Loading";

function UserAccount() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
    //eslint-disable-next-line
  }, []);
  const initialField = {
    username: "Username",
    name: "Họ tên",
    email: "Email",
    phone: "Số điện thoại",
    dayCreated: "Ngày tạo",
    numsClass: "Tổng số lớp học tham gia",
    numsTeacher: "Vai trò giáo viên",
    numsStudent: "Vai trò học sinh",
  };

  const user = useSelector((state) => state.fetchUserInfoReducer?.data?.user);
  const loading = useSelector((state) => state.fetchUserInfoReducer.loading);
  const err = useSelector((state) => state.fetchUserInfoReducer.err);
  const convertDate = (date) => {
    date = new Date(date);
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var yyyy = date.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      {/* <NavbarHome /> */}

      <div className="user-account ">
        <img
          src={pathImgFromIndex + "meo_ngu_ngoc.jpg"}
          alt="avatar"
          width="150"
          height="150"
          className="avatar"
        ></img>
        <div className="info">
          <h2 className="username">{user?.username}</h2>
          <hr className="shareHr" />
          <div className="infoline">
            <div className="field-container">
              <h4 className="field">{initialField.name}</h4>
              <h4 className="field">{initialField.birth}</h4>
              <h4 className="field">{initialField.email}</h4>
              <h4 className="field">{initialField.phone}</h4>
              <h4 className="field">{initialField.dayCreated}</h4>
              <h4 className="field">{initialField.numsClass}</h4>
            </div>
            <div className="value-container">
              <h4 className="value-field">{user?.fullName}</h4>
              <h4 className="value-field">{user?.birth}</h4>
              <h4 className="value-field">{user?.email}</h4>
              <h4 className="value-field">{user?.phoneNumber}</h4>
              <h4 className="value-field">{convertDate(user?.createdAt)}</h4>
              <h4 className="value-field">
                {user?.classStudent.length + user?.classTeacher.length}
              </h4>
              <h4 className="value-field">{user?.classTeacher.length}</h4>
              <h4 className="value-field">{user?.classStudent.length}</h4>
            </div>
            <div className="button-edit-info">
              <div>
                <IconButton id="nameButton">
                  <EditIcon fontSize="small" />
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
