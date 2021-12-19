import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Alert } from "@mui/material";

export default function OperationHomework() {
  const [open, setOpen] = React.useState(false);
  const [item_name, setUsername] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
    setUsername(""); // test được nè
  };
  const [emptyNotice, setEmptyNotice] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const renderNotice = () => {
    if (emptyNotice) {
      setTimeout(() => setEmptyNotice(false), 1500);
      return <Alert severity="error">Username không được để trống</Alert>;
    }
    // if (err) {
    //   setTimeout(handleReset, 1500);
    //   return <Alert severity="error">{err?.response.data.message}</Alert>;
    // }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "item_name") {
      setUsername(value);
    }
    if (value !== "") {
      setEmptyNotice(false);
    }
  };
  const handleValidationUsername = () => {
    if (item_name === "") {
      setEmptyNotice(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // That ra onSubmit moi can preventDefault

    if (item_name === "") {
      // setEmptyFieldNotice(true);
      setEmptyNotice(true);
      return;
    }

    console.log(item_name);
    //dispatch(joinClassroom(state));
    // console.log("state", state);
    // handleCloseJoinDialog();
    //setRenderJoin(!renderJoin);
    // setRender(!render);
    if (!emptyNotice) {
      handleClose();
    }
  };

  const handleReset = () => {
    //dispatch(resetJoinClassroom());
  };
  return (
    <section className="operation-homework container">
      <div className="classname">TOÁN 6</div>
      <div className="input-group">
        <TextField
          label="Tìm kiếm bài tập hoặc tài liệu"
          placeholder="Nhập tên bài tập hoặc tài liệu"
        />
        <button type="button" id="idFind" className="btn btn-primary">
          <SearchIcon sx={{ fontSize: 28 }} />
        </button>
      </div>
      <div className="btn btn-add" onClick={handleClickOpen}>
        Thêm
      </div>
    </section>
  );
}