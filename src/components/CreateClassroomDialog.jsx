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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createClassroom,
  resetCreateClassroom,
} from "../redux/modules/Home/action";

function CreateClassroomDialog(props) {
  const { openCreateDialog, handleCloseCreateDialog, handleRender } = props;

  const [emptyNameNotice, setEmptyNameNotice] = useState(false);
  const [emptyDescriptionNotice, setEmptyDescriptionNotice] = useState(false);
  const [emptyFieldNotice, setEmptyFieldNotice] = useState(false);

  const dispatch = useDispatch();
  const [renderCreate, setRenderCreate] = useState(false);

  const data = useSelector((state) => state.createClassroomReducer.data);
  const loading = useSelector((state) => state.createClassroomReducer.loading);
  const err = useSelector((state) => state.createClassroomReducer.err);

  // state để dispatch tới action Login
  const [state, setState] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    setState({
      name: "",
      description: "",
    });
    // eslint-disable-next-line
  }, [renderCreate]);

  // sự kiện thay đổi giá trị của các trường đăng nhập
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });

    if (state.name !== "") {
      setEmptyNameNotice(false);
    }
    if (state.description !== "") {
      setEmptyDescriptionNotice(false);
    }
    if (state.name !== "" && state.description !== "") {
      setEmptyFieldNotice(false);
    }
  };

  const handleValidationName = () => {
    if (state.name === "") {
      setEmptyNameNotice(true);
    }
  };

  const handleValidationDescription = () => {
    if (state.description === "") {
      setEmptyDescriptionNotice(true);
    }
  };

  // hàm thông báo lỗi khi nhập sai giá trị ở các trường đăng nhập tương ứng
  const renderNotice = () => {
    if (emptyFieldNotice) {
      setTimeout(() => setEmptyFieldNotice(false), 1000);
      return <Alert severity="error">Vui lòng nhập đầy đủ thông tin</Alert>;
    }
    if (emptyNameNotice) {
      setTimeout(() => setEmptyNameNotice(false), 1000);
      return <Alert severity="error">Tên môn học không được để trống</Alert>;
    }
    if (emptyDescriptionNotice) {
      setTimeout(() => setEmptyDescriptionNotice(false), 1000);
      return <Alert severity="error">Mô tả không được để trống</Alert>;
    }
    if (err) {
      setTimeout(handleReset, 1500);
      return <Alert severity="error">{err?.response.data.message}</Alert>;
    }
  };

  // sự kiện submit form đăng nhập
  const handleSubmit = (event) => {
    event.preventDefault();

    if (state.name === "" || state.description === "") {
      setEmptyFieldNotice(true);
      return;
    }

    dispatch(createClassroom(state));
    // console.log("state", state);
    // handleCloseCreateDialog();
    setRenderCreate(!renderCreate);
    // setRender(!render);
  };

  const handleReset = () => {
    dispatch(resetCreateClassroom());
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (data) {
    // console.log("dataCreate", data);
    // alert(data.message);
    handleReset();
    handleCloseCreateDialog();
    handleRender();
  }

  // if (err) console.log("error", err.response.data);

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={openCreateDialog}
        onClose={handleCloseCreateDialog}
      >
        <DialogTitle sx={{ pb: 0 }}>Tạo lớp học</DialogTitle>

        <DialogContent>
          {renderNotice()}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Tên môn học"
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleValidationName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Mô tả"
              type="text"
              id="Description"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleValidationDescription}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: "0 24px 20px" }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleCloseCreateDialog}
          >
            Hủy
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Tạo lớp
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateClassroomDialog;
