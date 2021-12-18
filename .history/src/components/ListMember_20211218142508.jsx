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
import { Avatar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { actFetchPeopleList,actDeleteStudent } from "../redux/modules/People/action";
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
  let id = null;
  let teacher, students;
  let members = null;
  if (localStorage.getItem("classroomId")) {
    id = localStorage.getItem("classroomId");
  }

  const [open, setOpen] = React.useState(false);
  const [nameDelete, setNameDelete] = React.useState(false);

  useEffect(() => {
    dispatch(actFetchPeopleList(id));
  }, [members]);
  const data = useSelector((state) => state.peopleReducer?.data);
  const loading = useSelector((state) => state.peopleReducer?.loading);
  const err = useSelector((state) => state.peopleReducer?.err);

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
  //console.log(member);

  // const handleDeleteMember = (username) => {
  //   return () => {
  //     let membersClone = { ...members }; // clone to re-render
  //     membersClone.students = membersClone.students?.filter(
  //       (student) => student.username !== username
  //     );
  //     // membersClone.students = studentsAfterDelete;
  //     console.log(membersClone);
  //     setMembers(membersClone);
  //   };
  // };

  const handleClickOpen = (student) => {
    return () => {
      setOpen(true);
      setNameDelete(student.fullName);
      dispatch(actDeleteStudent);
    };
  };
  const handleClose = () => {
    setOpen(false);
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
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell align="left">
                    <Avatar
                      src={pathImgFromIndex + "xuan_y.png"}
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
              </TableBody>
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
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.students?.map((row) => (
                  <StyledTableRow key={row.username}>
                    <StyledTableCell align="left">
                      <Avatar
                        src={pathImgFromIndex + "hoang_vu.png"}
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
                    <StyledTableCell align="right">
                      <div
                        className="btn btn-delete"
                        onClick={handleClickOpen(row)}
                      >
                        Xoá
                      </div>
                    </StyledTableCell>
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
              <DialogContentText id="alert-dialog-description">
                Thao tác xoá học sinh sẽ không thể quay lại. Bạn vẫn muốn xoá{" "}
                {nameDelete} ra khỏi lớp chứ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <button onClick={handleClose} className="btn btn-primary">
                Huỷ
              </button>
              <button
                onClick={handleClose}
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
