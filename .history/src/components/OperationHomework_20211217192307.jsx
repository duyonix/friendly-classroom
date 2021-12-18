import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export default function OperationHomework() {
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
      <div className="btn btn-add">Thêm</div>
    </section>
  );
}
