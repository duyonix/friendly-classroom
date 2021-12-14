import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
export default function OperationHomework() {
  return (
    <section className="operation-homework container">
      <div className="classname">TOÁN 6</div>
      <div className="input-group">
        <TextField label="Nhập tên bài tập hoặc tài liệu" placeholder="abc" />
        <button type="button" id="idFind" className="btn btn-primary">
          <SearchIcon sx={{ fontSize: 28 }} />
        </button>
      </div>
      <div className="btn btn-add">Thêm</div>
    </section>
  );
}
