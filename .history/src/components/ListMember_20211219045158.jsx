import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pathImgFromIndex } from "../utils/constants";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert, Avatar, Box, CircularProgress } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  actFetchPeopleList,
  resetPeople,
  actDeleteStudent,
  resetDeleteStudent,
  actPeopleSearchReset,
} from "../redux/modules/People/action";
import Loading from "./Loading";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#A3EBFB",
    color: "#000",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ListMember() {
  const dispatch = useDispatch();
  let id = null,
    role = null;
  let teacher, students;
  let members = null;

  if (localStorage.getItem("classroomId")) {
    id = localStorage.getItem("classroomId");
  }
  if (localStorage.getItem("role")) {
    role = localStorage.getItem("role");
  }

  const [open, setOpen] = React.useState(false);
  const [studentDelete, setStudentDelete] = React.useState(null);
  const [render, setRender] = React.useState(false);

  useEffect(() => {
    dispatch(actFetchPeopleList(id));
  }, []);

  const data = useSelector((state) => state.peopleReducer?.data);
  const loading = useSelector((state) => state.peopleReducer?.loading);
  const err = useSelector((state) => state.peopleReducer?.err);
  const keySearch = useSelector((state) => state.peopleReducer?.key);
  const change = useSelector((state) => state.peopleReducer?.change);
  if (keySearch !== null) {
    dispatch(actPeopleSearchReset());
  }
  const isMatch = (s,key)=>{
    s.toLowerCase().indexOf(key.toLowerCase())
  }
  const renderTeacher = (key) => {
    if (key == null) {
      return (
        <StyledTableRow>
          <StyledTableCell align="left">
            <Avatar
              src={
                pathImgFromIndex + members.teacher?.avatarUrl !== undefined
                  ? members.teacher?.avatarUrl
                  : "xuan_y.jpg"
              }
              alt="avatar"
              sx={{ width: 64, height: 64 }}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {members.teacher?.fullName}
          </StyledTableCell>

          <StyledTableCell align="right">
            {members.teacher?.username}
          </StyledTableCell>
          <StyledTableCell align="right">
            {members.teacher?.email}
          </StyledTableCell>

          <StyledTableCell align="right">
            {members.teacher?.phoneNumber}
          </StyledTableCell>
        </StyledTableRow>
      );
    }
  };
  if (change) {
    dispatch(resetPeople());
    dispatch(actFetchPeopleList(id));
  }
  const dataDelete = useSelector((state) => state.deleteStudentReducer?.data);
  const loadingDelete = useSelector(
    (state) => state.deleteStudentReducer?.loading
  );
  const errDelete = useSelector((state) => state.deleteStudentReducer?.err);

  if (loading) {
    return <Loading />;
  }

  if (data != null) {
    teacher = data.classroom?.teacherId;
    students = data.classroom?.listStudent;
  }

  members = {
    teacher,
    students,
  };

  if (err) {
    console.log(err.response.data.message);
  }
  const handleReset = () => {
    dispatch(resetDeleteStudent());
  };
  const handleClickOpen = (student) => {
    return () => {
      setOpen(true);
      setStudentDelete(student);
    };
  };
  const handleDelete = () => {
    dispatch(actDeleteStudent(id, studentDelete._id));
    setRender(!render);
  };

  // Sau 2s, close Dialog and fetch data again
  if (dataDelete) {
    setTimeout(() => {
      setOpen(false);
      handleReset();
      dispatch(actFetchPeopleList(id));
    }, 1200);
  }
  const handleClose = () => {
    setOpen(false);
    handleReset();
  };

  const renderLoading = () => {
    if (loadingDelete) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      );
    }
  };
  const renderError = () => {
    if (errDelete) {
      return <Alert severity="error">{errDelete.response.data.message}</Alert>;
    }
  };

  const renderSuccess = () => {
    if (dataDelete) {
      return <Alert severity="success">{dataDelete.message}</Alert>;
    }
  };

  return (
    <div className="list-member">
      <div className="container">
        <div className="teacher-area area">
          <div className="teacher-header">
            <div className="header">
              <img
                className="img-header"
                src={pathImgFromIndex + "teacher_icon.png"}
                alt="teacher"
              />
              <span className="header-name">Giáo viên</span>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>Họ và tên</StyledTableCell>
                  <StyledTableCell align="right">Username</StyledTableCell>
                  <StyledTableCell align="right">Gmail</StyledTableCell>
                  <StyledTableCell align="right">Số điện thoại</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTeacher(keySearch)}</TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="student-area area">
          <div className="student-header">
            <div className="header">
              <img
                className="img-header"
                src={pathImgFromIndex + "Student_icon.png"}
                alt="student"
              />
              <span className="header-name">Học sinh</span>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>Họ và tên</StyledTableCell>
                  <StyledTableCell align="right">Username</StyledTableCell>
                  <StyledTableCell align="right">Gmail</StyledTableCell>

                  <StyledTableCell align="right">Số điện thoại</StyledTableCell>
                  {role === "teacher" ? (
                    <StyledTableCell align="right"></StyledTableCell>
                  ) : (
                    ""
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {members.students?.map((row) => (
                  <StyledTableRow key={row.username}>
                    <StyledTableCell align="left">
                      <Avatar
                        src={
                          pathImgFromIndex + row.username.avatarUrl !==
                          undefined
                            ? members.teacher?.avatarUrl
                            : "xuan_y.jpg"
                        }
                        alt="avatar"
                        sx={{ width: 64, height: 64 }}
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.fullName}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {row.username}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>

                    <StyledTableCell align="right">
                      {row.phoneNumber}
                    </StyledTableCell>
                    {role === "teacher" ? (
                      <StyledTableCell align="right">
                        <div
                          className="btn btn-delete"
                          onClick={handleClickOpen(row)}
                        >
                          Xoá
                        </div>
                      </StyledTableCell>
                    ) : (
                      ""
                    )}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="Dialog-delete">
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Xoá học sinh</DialogTitle>
            <DialogContent>
              {renderLoading()}
              {renderError()}
              {renderSuccess()}
              <DialogContentText id="alert-dialog-description">
                Thao tác này sẽ không thể hoàn tác. Bạn vẫn muốn xoá{" "}
                {studentDelete?.fullName} ra khỏi lớp chứ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <button onClick={handleClose} className="btn btn-primary">
                Huỷ
              </button>
              <button
                onClick={handleDelete}
                className="btn btn-danger"
                autoFocus
              >
                Xoá
              </button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default ListMember;
