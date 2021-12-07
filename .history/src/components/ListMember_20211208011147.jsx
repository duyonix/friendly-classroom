import React, { useState } from "react";
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
  const initialMembers = {
    teacher: [
      {
        name: "Võ Hoàng Vũ",
        avatar: "hoang_vu.jpg",
        username: "vudeptrai99",
        gmail: "vohoangvu.dev99@gmail.com",
        sex: "Nam",
        phone: "0836215664",
      },
    ],
    students: [
      {
        name: "Nguyễn Thị Hiền Vi",
        avatar: "hien_vi.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
      {
        name: "Nguyễn Thị Hiền Vi",

        avatar: "meo_ngu_ngoc.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
      {
        name: "Nguyễn Thị Hiền Vi",

        avatar: "thai_duy.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
      {
        name: "Nguyễn Thị Hiền Vi",

        avatar: "xuan_y.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
      {
        name: "Nguyễn Thị Hiền Vi",

        avatar: "minh_bao.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
    ],
  };
  const [members, setMembers] = useState(initialMembers);
  const handleDeleteMember =(username)=>{
    const membersAfterDelete = members.
  }
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
              <span class="header-name">Giáo viên</span>
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
                  <StyledTableCell align="right">Giới tính</StyledTableCell>
                  <StyledTableCell align="right">Số điện thoại</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.teacher.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="left">
                      <Avatar
                        src={pathImgFromIndex + row.avatar}
                        alt="avatar"
                        sx={{ width: 64, height: 64 }}
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {row.username}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.gmail}</StyledTableCell>
                    <StyledTableCell align="right">{row.sex}</StyledTableCell>
                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                  </StyledTableRow>
                ))}
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
              <span class="header-name">Học sinh</span>
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
                  <StyledTableCell align="right">Giới tính</StyledTableCell>
                  <StyledTableCell align="right">Số điện thoại</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.students.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="left">
                      <Avatar
                        src={pathImgFromIndex + row.avatar}
                        alt="avatar"
                        sx={{ width: 64, height: 64 }}
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {row.username}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.gmail}</StyledTableCell>
                    <StyledTableCell align="right">{row.sex}</StyledTableCell>
                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="btn btn-delete" onClick={handleDeleteMember(row.username)}>Xoá</div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default ListMember;
