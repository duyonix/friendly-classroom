import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@mui/material";


function OperationMember() {
  const [username, setUsername] = useState("");
  const [open, setOpen] = React.useState(false);
  const [emptyNotice, setEmptyNotice] = useState(false);
  

  
    <section className="operation-member container">
      <div className="classname">TOÁN 6</div>
      <div className="input-group">
        <TextField label="Tìm thành viên" placeholder="Nhập tên thành viên" />
        <button type="button" id="idFind" className="btn btn-primary">
          <SearchIcon sx={{ fontSize: 28 }} />
        </button>
      </div>
      <div className="btn btn-add">Thêm</div>
      <Dialog style={{ padding: 30 }} open={open} onClose={handleClose}>
        <DialogTitle>Thêm thành viên mới</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: 10 }}>
            Nhập username của thành viên muốn thêm vào lớp
          </DialogContentText>
          {renderNotice()}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <button className="btn btn-danger" onClick={handleClose}>
            Huỷ
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Đồng ý
          </button>
        </DialogActions>
      </Dialog>
    </section>
  );
}

export default OperationMember;
