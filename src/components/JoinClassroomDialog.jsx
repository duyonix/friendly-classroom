import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  joinClassroom,
  resetJoinClassroom,
} from "../redux/modules/Home/action";

function JoinClassroomDialog(props) {
  const { openJoinDialog, handleCloseJoinDialog, render, setRender } = props;

  const [emptyCodeNotice, setEmptyCodeNotice] = useState(false);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.joinClassroomReducer.data);
  const loading = useSelector((state) => state.joinClassroomReducer.loading);
  const err = useSelector((state) => state.joinClassroomReducer.err);

  // state để dispatch tới action Login
  const [state, setState] = useState({
    code: "",
  });

  // sự kiện thay đổi giá trị của các trường đăng nhập
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });

    if (state.code !== "") {
      setEmptyCodeNotice(false);
    }
  };

  const handleValidationCode = () => {
    if (state.code === "") {
      setEmptyCodeNotice(true);
    }
  };

  // hàm thông báo lỗi khi nhập sai giá trị ở các trường đăng nhập tương ứng
  const renderNotice = () => {
    if (emptyCodeNotice) {
      setTimeout(() => setEmptyCodeNotice(false), 1000);
      return <Alert severity="error">Mã môn học không được để trống</Alert>;
    }
    // if (err) {
    //   return <Alert severity="error">{err?.response.data.message}</Alert>;
    // }
  };

  // sự kiện submit form đăng nhập
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(state);

    if (state.code === "") {
      // setEmptyFieldNotice(true);
      setEmptyCodeNotice(true);
      return;
    }

    dispatch(joinClassroom(state));
    // console.log("state", state);
    handleCloseJoinDialog();
    // setRender(!render);
  };

  async function handleReset() {
    await dispatch(resetJoinClassroom());
    setRender(!render);
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (data) {
    // console.log("dataJoin", data);
    // alert(data.message);
    handleReset();
  }

  if (err) console.log("error", err.response.data);

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={openJoinDialog}
        onClose={handleCloseJoinDialog}
      >
        <DialogTitle sx={{ pb: 0 }}>Tham gia lớp học</DialogTitle>

        <DialogContent>
          {renderNotice()}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="code"
              label="Mã lớp học"
              type="text"
              id="code"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleValidationCode}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: "0 24px 20px" }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleCloseJoinDialog}
          >
            Hủy
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Tham gia
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default JoinClassroomDialog;
