import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import {
  actHomeworkSearch,
  actDocumentSearch,
} from "../redux/modules/Homework/action";
import { useDispatch } from "react-redux";

export default function OperationHomework() {
  let role = null;
  
  const [itemName, setItemName] = useState("");
  if (localStorage.getItem("role")) {
    role = localStorage.getItem("role");
  }
  const dispatch = useDispatch();

 
  const [emptyNotice, setEmptyNotice] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    passDataSearch();
  }, [itemName]);

  
  const passDataSearch = () => {
    dispatch(actHomeworkSearch(itemName));
    dispatch(actDocumentSearch(itemName));
  };
  const handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "itemName") {
      setItemName(value);
    }
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
