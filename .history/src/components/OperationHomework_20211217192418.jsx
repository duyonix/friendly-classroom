import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export default function OperationHomework() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thêm thành viên mới</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
