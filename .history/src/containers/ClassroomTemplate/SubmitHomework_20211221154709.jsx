import React from "react";
import { useLocation } from "react-router-dom";
import { pathImgFromIndex } from "../../utils/constants";
import Files from "react-files";
import AddIcon from "@mui/icons-material/Add";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function SubmitHomework(props) {
  const homework = useLocation();
  const onFilesChange = (files) => {
    console.log(files);
  };
  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  return (
    <div className="submit-homework container">
      <div className="logo-class">
        <div className="classname">TOÁN 6</div>
      </div>
      <div className="content">
        <div className="homework-detail">
          <img
            src={pathImgFromIndex + "homework_icon.png"}
            alt="homework-icon"
            height="100"
          />
          <div className="detail">
            <h3 className="name">Nhân biểu thức</h3>
            <div className="sub-detail">
              <p>
                <span>Ngày đăng:</span> 17.11.2021
              </p>
              <p>
                <span> Đến hạn:</span> 25.11.2021
              </p>
              <p>
                <span> Điểm tối đa bài tập:</span> 100
              </p>
            </div>
            <p style={{ marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              earum maxime, error provident vel numquam voluptatibus incidunt
              illum iste fugit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure, possimus.
            </p>
          </div>
        </div>
        <div className="submit">
          <div className="header" style={{ marginBottom: 10 }}>
            <span>Bài tập của bạn</span>

            <span className="status incomplete">Chưa nộp bài</span>
          </div>
          <h4
            style={{
              textAlign: "right",
              fontWeight: "normal",
              fontSize: 16,
              margin: "10px 0",
              lineHeight: "25px",
            }}
          >
            Kích thước tối đa: 20MB <br />
            Số lượng file: 1, nếu nhiều file hãy nén lại
          </h4>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Bài làm này do chính tôi thực hiện"
            />
          </FormGroup>
          <div className="files">
            <Files
              className="files-dropzone"
              onChange={onFilesChange}
              onError={onFilesError}
              multiple
              maxFiles={3}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button className="btn btn-add">
                {" "}
                <AddIcon style={{ marginRight: 5 }} />
                Thêm bài nộp
              </button>

              {/* <div
                className="drop-zone"
                style={{
                  border: "2px dashed #bbb",
                  minHeight: 150,
                  margin: "20px 0",
                }}
              >
                <div className="up-arrow"></div>
                Thả file vào đây để nộp bài
              </div> */}
              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
            </Files>
          </div>
          <button className="btn btn-mark">Nộp bài</button>
        </div>
      </div>
    </div>
  );
}

export default SubmitHomework;
