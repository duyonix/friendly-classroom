import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Alert } from "@mui/material";

export default function OperationHomework() {
  let role = null;
  const [open, setOpen] = React.useState(false);
  const [itemName, setItemName] = useState("");
  if (localStorage.getItem("role")) {
    role = localStorage.getItem("role");
  }
  const handleClickOpen = () => {
    setOpen(true);
    setItemName(""); // test được nè
  };
  const [emptyNotice, setEmptyNotice] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    passDataSearch();
  }, [itemName]);

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
  const passDataSearch = () => {
    if (itemName !== "") {
      console.log(itemName);
    }
  };
  const handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "itemName") {
      setItemName(value);
    }
    if (value !== "") {
      setEmptyNotice(false);
    }
  };
  const handleValidationItemName = () => {
    if (itemName === "") {
      setEmptyNotice(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (itemName === "") {
      setEmptyNotice(true);
      return;
    }

    console.log(itemName);

    if (!emptyNotice) {
      handleClose();
    }
  };

  const handleReset = () => {
    //dispatch(resetJoinClassroom());
  };
  return (
    <section
      style={{
        justifyContent: role === "teacher" ? "space-between" : "space-around",
      }}
      className="operation-homework container"
    >
      <div className="classname">TOÁN 6</div>
      <div className="input-group">
        <TextField
          label="Tìm kiếm bài tập hoặc tài liệu"
          placeholder="Nhập tên bài tập hoặc tài liệu"
          name="itemName"
          onChange={handleChange}
        />
        <button type="button" id="idFind" className="btn btn-primary">
          <SearchIcon sx={{ fontSize: 28 }} />
        </button>
      </div>
      {role === "teacher" ? <div className="btn btn-add">Thêm</div> : ""}
    </section>
  );
}
