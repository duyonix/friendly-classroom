import React from "react";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { pathImgFromIndex } from "../../utils/constants";
import MenuItem from '@mui/material/MenuItem';
import TablePagination from '@mui/material/TablePagination';



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

function Grade() {
  const members = [
    {
      name: "Bài tập bất đẳng thức",
      grade:"10/10"
    },
    {
      name: "Bài tập chia ",
      grade:"5/10"
    },
    {
      name: "Bài tập nhân",
      grade:"3/10"
    },
    {
      name: "Bài tập trừ",
      grade:"8/10"
    },
    {
      name: "Bài tập cộng",
      grade:"9/10"
    },
    {
      name: "Bài tập Pytago",
      grade:"10/10"
    },
    {
      name: "Bài tập Talet",
      grade:"5/10"
    },
    {
      name: "Bài tập huhu",
      grade:"10/10"
    },
    {
      name: "Bài tập hehe",
      grade:"5/10"
    },
  ]
  const currencies = [
    {
      value: 'Cũ nhất',
      label: '$',
    },
    {
      value: 'Mới nhất',
      label: '€',
    },
    {
      value: 'Cao nhất',
      label: '฿',
    },
    {
      value: 'Thấp nhất',
      label: '¥',
    },
  ];
  const [currency, setCurrency] = React.useState('Mới nhất');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const columns = [
    { id: 'name', label: 'Học sinh', minWidth: 200 },
    { id: 'equal', label: 'Bất đẳng thức', minWidth: 100 },
    {
      id: 'rectangle',
      label: 'Tứ giác nội tiếp',
      minWidth: 100,
    },
    {
      id: 'add',
      label: 'Cộng',
      minWidth: 100,
    },
    {
      id: 'sub',
      label: 'Trừ',
      minWidth: 100,
    },
  ];
  
  function createData(name, equal, rectangle, add,sub) {
    return { name, equal, rectangle, add,sub};
  }
  
  const rows = [
    createData("Vi xinh dep", 8,9,10,2),
    createData("Y xau xi", 8,9,10,5),
    createData("Vu ngungok", 8,9,10,3),
    createData("Duy ko co bo", 8,9,10,4),
    createData("DMB TT", 8,9,10,8),
    createData("Vi xinh dep1", 8,9,10),
    createData("Y xau xi1", 8,9,10),
    createData("Vu ngungok1", 8,9,10),
    createData("Duy ko co bo1", 8,9,10),
    createData("DMB TT1", 8,9,10),
    createData("Vi xinh dep2", 8,9,10),
    createData("Y xau xi2", 8,9,10),
    createData("Vu ngungok2", 8,9,10),
    createData("Duy ko co bo2", 8,9,10),
    createData("DMB TT2", 8,9,10),
  ];
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
  return (
    <div className="list-grade">
      <div className="inputFind">
        <div className="function">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Tìm kiếm tên bài tập" variant="outlined" text="hi"/>
          </Box>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Sắp xếp theo"
                value={currency}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
            </div>
          </Box>
        </div>
      </div>
      <div className="container" >
        <TableContainer className="table" component={Paper}>
          <Table sx={{ minWidth: 300 }} >
            <TableHead>
              <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>Bài tập</StyledTableCell>
                  <StyledTableCell >Điểm</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {members?.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                  <StyledTableCell >{row.grade}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <img src={pathImgFromIndex+"gradepeople.png"}></img>
      </div>

      <div className="inputFind">
        <div className="function">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Tìm kiếm học sinh" variant="outlined" text="hi"/>
          </Box>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Sắp xếp theo"
                value={currency}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
            </div>
          </Box>
        </div>
      </div>
      <div className="container-teacher">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </div>
  </div>
  );
}


export default Grade;


