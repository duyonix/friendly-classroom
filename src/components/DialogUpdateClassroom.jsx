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
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateClassroom,
  fetchUserInfo,
  resetUpdateClassroom,
} from "../redux/modules/Home/action";

function DialogUpdateClassroom(props) {
  const { openUpdateDialog, handleCloseUpdateDialog, classInfo } = props;
  const classroomId = classInfo._id;

  const [emptyNameNotice, setEmptyNameNotice] = useState(false);
  const [emptyDescriptionNotice, setEmptyDescriptionNotice] = useState(false);
  const [emptyFieldNotice, setEmptyFieldNotice] = useState(false);

  const inputName = useRef(null);
  const inputDescription = useRef(null);

  const dispatch = useDispatch();
  const [render, setRender] = useState(false);

  const data = useSelector((state) => state.updateClassroomReducer.data);
  const loading = useSelector((state) => state.updateClassroomReducer.loading);
  const err = useSelector((state) => state.updateClassroomReducer.err);

  // state để dispatch tới action Login
  const [state, setState] = useState({
    name: classInfo.name,
    description: classInfo.description,
  });

  useEffect(() => {
    setState({
      name: classInfo.name,
      description: classInfo.description,
    });
    // eslint-disable-next-line
  }, [render]);

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
      handleClearInput();
      setTimeout(handleReset, 1000);
      return <Alert severity="error">{err?.response.data.message}</Alert>;
    }
  };

  const handleClearInput = () => {
    if (inputName.current) inputName.current.value = classInfo.name;
    if (inputDescription.current)
      inputDescription.current.value = classInfo.description;
  };

  // sự kiện submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (state.name === "" || state.description === "") {
      setEmptyFieldNotice(true);
      return;
    }

    dispatch(updateClassroom(classroomId, state));
    setRender(!render);
  };

  const handleReset = () => {
    dispatch(resetUpdateClassroom());
  };

  const renderLoading = () => {
    if (loading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      );
    }
  };

  if (data) {
    handleReset();
    handleCloseUpdateDialog();
    dispatch(fetchUserInfo());
  }

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={openUpdateDialog}
        onClose={handleCloseUpdateDialog}
      >
        <DialogTitle sx={{ pb: 0 }}>Tạo lớp học</DialogTitle>

        <DialogContent>
          {renderLoading()}
          {renderNotice()}

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              inputRef={inputName}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Tên môn học"
              type="text"
              name="name"
              autoComplete="off"
              defaultValue={classInfo.name}
              autoFocus
              onChange={handleChange}
              onBlur={handleValidationName}
            />
            <TextField
              inputRef={inputDescription}
              margin="normal"
              required
              fullWidth
              name="description"
              label="Mô tả"
              type="text"
              id="Description"
              autoComplete="off"
              defaultValue={classInfo.description}
              onChange={handleChange}
              onBlur={handleValidationDescription}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: "0 24px 20px" }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleCloseUpdateDialog}
          >
            Hủy
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Cập nhật
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogUpdateClassroom;
