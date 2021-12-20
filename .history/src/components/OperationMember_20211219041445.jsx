import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@mui/material";
import {
  actInviteStudent,
  resetInviteStudent,
  actPeopleChange,
} from "../redux/modules/People/action";
function OperationMember() {
  const [username, setUsername] = useState("");
  const [open, setOpen] = React.useState(false);
  let id = null,
    role = null;
  const [emptyNotice, setEmptyNotice] = useState(false);
  useEffect(() => {
    passDataSearch();
  }, [itemName]);
  
  const dataInvite = useSelector((state) => state.inviteStudentReducer?.data);
  const loadingInvite = useSelector(
    (state) => state.inviteStudentReducer?.loading
  );
  const errInvite = useSelector((state) => state.inviteStudentReducer?.err);
  const dispatch = useDispatch();
  if (localStorage.getItem("classroomId")) {
    id = localStorage.getItem("classroomId");
  }
  if (localStorage.getItem("role")) {
    role = localStorage.getItem("role");
  }

  const handleClickOpen = () => {
    setOpen(true);
    setUsername(""); // test được nè
  };
  const handleClose = () => {
    setOpen(false);
    handleReset();
  };

  const renderNotice = () => {
    if (emptyNotice) {
      setTimeout(() => setEmptyNotice(false), 1500);
      return <Alert severity="error">Username không được để trống</Alert>;
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "username") {
      setUsername(value);
    }
    if (value !== "") {
      setEmptyNotice(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // That ra onSubmit moi can preventDefault

    if (username === "") {
      setEmptyNotice(true);
      return;
    }

    dispatch(actInviteStudent(id, username));

    if (!emptyNotice && dataInvite) {
      setTimeout(() => {
        setOpen(false);
      }, 1200);
      handleReset();
      dispatch(actPeopleChange());
    }
  };

  const handleReset = () => {
    dispatch(resetInviteStudent());
  };

  const renderError = () => {
    if (errInvite) {
      return <Alert severity="error">{errInvite.response.data.message}</Alert>;
    }
  };

  const renderSuccess = () => {
    if (dataInvite) {
      return <Alert severity="success">{dataInvite.message}</Alert>;
    }
  };
  if (dataInvite) {
    setTimeout(() => {
      setOpen(false);
      handleReset();
      dispatch(actPeopleChange());
    }, 2000);
  }
  return (
    <section className="operation-member container">
      <div className="classname">TOÁN 6</div>
      <div className="input-group">
        <TextField label="Tìm thành viên" placeholder="Nhập tên thành viên" />
        <button type="button" id="idFind" className="btn btn-primary">
          <SearchIcon sx={{ fontSize: 28 }} />
        </button>
      </div>
      {role === "teacher" ? (
        <div className="btn btn-add" onClick={handleClickOpen}>
          Thêm
        </div>
      ) : (
        ""
      )}
      <Dialog style={{ padding: 30 }} open={open} onClose={handleClose}>
        <DialogTitle>Thêm thành viên mới</DialogTitle>
        <DialogContent>
          {renderError()}
          {renderSuccess()}
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
