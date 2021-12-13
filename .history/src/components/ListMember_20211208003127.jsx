import React from "react";
import { pathImgFromIndex } from "../utils/constants";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function ListMember() {
  const members = {
    teacher: {
      avatar: "hoang_vu.jpg",
      username: "vudeptrai99",
      gmail: "vohoangvu.dev99@gmail.com",
      sex: "Nam",
      phone: "0836215664",
    },
    students: [
      {
        avatar: "hien_vi.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
      {
        avatar: "hien_vi.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
      {
        avatar: "hien_vi.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
      {
        avatar: "hien_vi.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
      {
        avatar: "hien_vi.jpg",
        username: "hienvingungok",
        gmail: "hienvi16@gmail.com",
        sex: "Nữ",
        phone: "0836215664",
      },
    ],
  };
  return (
    <div className="list-member">
      <div className="container">
        <div className="teacher-area area">
          <div className="teacher-header header">
            <img
              className="img-header"
              src={pathImgFromIndex + "teacher_icon.png"}
              alt="teacher"
            />
            <span class="header-name">Giáo viên</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMember;