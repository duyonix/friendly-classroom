import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import { Avatar, Button, Checkbox, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllSubmission } from "../redux/modules/HomeworkDetail/action";
import Loading from "./Loading";
import { pathImgFromIndex } from "../utils/constants";
import DialogAddScore from "./DialogAddScore";
import DialogUpdateScore from "./DialogUpdateScore";

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

function DataSubmissionCell(props) {
  const { data } = props;

  // Dialog Add Score
  const [openAddScoreDialog, setOpenAddScoreDialog] = useState(false);

  const handleOpenAddScoreDialog = () => {
    setOpenAddScoreDialog(true);
  };

  const handleCloseAddScoreDialog = () => {
    setOpenAddScoreDialog(false);
  };

  // Dialog Update Score
  const [openUpdateScoreDialog, setOpenUpdateScoreDialog] = useState(false);

  const handleOpenUpdateScoreDialog = () => {
    setOpenUpdateScoreDialog(true);
  };

  const handleCloseUpdateScoreDialog = () => {
    setOpenUpdateScoreDialog(false);
  };

  return (
    <React.Fragment>
      <StyledTableCell>
        <Avatar
          src={
            data.studentId.avatarUrl !== undefined
              ? data.studentId.avatarUrl
              : pathImgFromIndex + "avatar.png"
          }
          alt="avatar"
          sx={{ width: 64, height: 64 }}
        />
      </StyledTableCell>
      <StyledTableCell>{data.studentId?.fullName}</StyledTableCell>

      {data.fileAttributes?.length === 0 ? (
        <StyledTableCell>Ch??a n???p b??i</StyledTableCell>
      ) : (
        <StyledTableCell>
          <Stack direction="row" spacing={2}>
            <Typography
              // sx={{ display: { xs: "none", md: "block" } }}
              style={{
                width: 200,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {data.fileAttributes[0].name}
            </Typography>
            <a title="T???i xu???ng t??i li???u" href={data?.attachedFiles[0]}>
              <DownloadIcon fontSize={"large"} />
            </a>
          </Stack>
        </StyledTableCell>
      )}

      {data.markDone ? (
        <StyledTableCell sx={{ color: "#00dc00" }}>???? n???p</StyledTableCell>
      ) : (
        <StyledTableCell sx={{ color: "red" }}>Thi???u</StyledTableCell>
      )}

      {data.score === undefined ? (
        <StyledTableCell align="right">...</StyledTableCell>
      ) : (
        <StyledTableCell align="right">{data.score}</StyledTableCell>
      )}

      {data.score === undefined ? (
        <StyledTableCell align="right">
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "flex-end" }}
          >
            <Checkbox
              checked={false}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
            <Button
              variant="contained"
              sx={{ width: 75, borderRadius: 7 }}
              onClick={handleOpenAddScoreDialog}
            >
              Ch???m
            </Button>
          </Stack>

          <DialogAddScore
            openAddScoreDialog={openAddScoreDialog}
            handleCloseAddScoreDialog={handleCloseAddScoreDialog}
            studentId={data.studentId?._id}
          />
        </StyledTableCell>
      ) : (
        <StyledTableCell align="right">
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "flex-end" }}
          >
            <Checkbox
              checked={true}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ width: 75, borderRadius: 7 }}
              onClick={handleOpenUpdateScoreDialog}
            >
              S???a
            </Button>
          </Stack>

          <DialogUpdateScore
            openUpdateScoreDialog={openUpdateScoreDialog}
            handleCloseUpdateScoreDialog={handleCloseUpdateScoreDialog}
            submission={data}
          />
        </StyledTableCell>
      )}
    </React.Fragment>
  );
}

function ListSubmission() {
  const { homeworkId } = useParams();
  useEffect(() => {
    dispatch(fetchAllSubmission(homeworkId));
    //eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();

  const dataFetch = useSelector(
    (state) => state.fetchAllSubmissionReducer?.data
  );
  const loadingFetch = useSelector(
    (state) => state.fetchAllSubmissionReducer?.loading
  );
  const errFetch = useSelector((state) => state.fetchAllSubmissionReducer?.err);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const submissionDoneList = dataFetch?.filter(
    (submission) => submission.markDone === true
  );

  const renderRow = () => {
    return dataFetch
      ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((data, key) => {
        return (
          <StyledTableRow role="checkbox" tabIndex={-1} key={key}>
            <DataSubmissionCell data={data} />
          </StyledTableRow>
        );
      });
  };

  if (loadingFetch) {
    return <Loading />;
  }

  if (errFetch) {
    console.log(errFetch);
  }

  return (
    <div className="list-submission">
      <div className="header-submission">
        <h4>Danh s??ch b??i n???p</h4>
        <p>
          ???? n???p:{" "}
          <span>
            {submissionDoneList?.length}/{dataFetch?.length}
          </span>
        </p>
      </div>

      <div className="header-line"></div>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>H??? v?? t??n</StyledTableCell>
                <StyledTableCell>B??i n???p</StyledTableCell>
                <StyledTableCell>T??nh tr???ng</StyledTableCell>
                <StyledTableCell align="right">??i???m s???</StyledTableCell>
                <StyledTableCell align="right">Ch???m ??i???m</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderRow()}</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={dataFetch?.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="S??? d??ng:"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default ListSubmission;
