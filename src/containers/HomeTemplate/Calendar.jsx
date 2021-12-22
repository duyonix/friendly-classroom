import React from "react";
import NavbarHome from "../../components/NavbarHome";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import PickersDay from "@mui/lab/PickersDay";
import endOfWeek from "date-fns/endOfWeek";
import isSameDay from "date-fns/isSameDay";
import isWithinInterval from "date-fns/isWithinInterval";
import startOfWeek from "date-fns/startOfWeek";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

// import TimeTable from "react-timetable-events";

import moment from "moment";

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  }),
}));

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

function Calendar() {
  const [value, setValue] = React.useState(new Date());

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek(value);
    const end = endOfWeek(value);

    const dayIsBetween = isWithinInterval(date, { start, end });
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  // const initialListCalendar =[
  //   {
  //     object:"Toán 6",
  //     title:"Nhân đa thức",
  //     deadline:"20th11",
  //     status:1
  //   },
  //   {
  //     object:"Anh 6",
  //     title:"Greeting",
  //     deadline:"20th11",
  //     status:0
  //   },
  //   {
  //     object:"BD toán 6",
  //     title:"Chuyên đề nâng cao",
  //     deadline:"20th11",
  //     status:0
  //   },
  // ];
  // const numbers = [1, 2, 3, 4, 5,6,7];

  const events = {
    monday: [
      {
        id: 1,
        name: "Homework",
        type: "custom",
        startTime: moment("2018-02-23T11:30:00"),
        endTime: moment("2018-02-23T13:30:00"),
      },

      {
        id: 2,
        name: "Classwork",
        type: "custom",
        startTime: moment("2018-02-23T09:30:00"),
        endTime: moment("2018-02-23T11:00:00"),
      },
      {
        id: 3,
        name: "Test",
        type: "custom",
        startTime: moment("2018-02-22T14:30:00"),
        endTime: moment("2018-02-22T15:30:00"),
      },
      {
        id: 4,
        name: "Test",
        type: "custom",
        startTime: moment("2018-02-22T15:30:00"),
        endTime: moment("2018-02-22T16:30:00"),
      },
    ],
    tuesday: [
      {
        id: 5,
        name: "Homework",
        type: "custom",
        startTime: moment("2018-02-22T09:30:00"),
        endTime: moment("2018-02-22T11:30:00"),
      },
      {
        id: 6,
        name: "Classwork",
        type: "custom",
        startTime: moment("2018-02-23T12:00:00"),
        endTime: moment("2018-02-23T13:00:00"),
      },
      {
        id: 7,
        name: "Classwork",
        type: "custom",
        startTime: moment("2018-02-23T13:30:00"),
        endTime: moment("2018-02-23T14:30:00"),
      },
      {
        id: 8,
        name: "Classwork",
        type: "custom",
        startTime: moment("2018-02-23T15:30:00"),
        endTime: moment("2018-02-23T17:30:00"),
      },
    ],
    wednesday: [
      {
        id: 7,
        name: "Classwork",
        type: "custom",
        startTime: moment("2018-02-23T13:30:00"),
        endTime: moment("2018-02-23T14:30:00"),
      },
      {
        id: 4,
        name: "Test",
        type: "custom",
        startTime: moment("2018-02-22T15:30:00"),
        endTime: moment("2018-02-22T16:30:00"),
      },
    ],
    thursday: [
      {
        id: 7,
        name: "Classwork",
        type: "custom",
        startTime: moment("2018-02-23T09:30:00"),
        endTime: moment("2018-02-23T12:30:00"),
      },
      {
        id: 4,
        name: "Test",
        type: "custom",
        startTime: moment("2018-02-22T14:30:00"),
        endTime: moment("2018-02-22T18:30:00"),
      },
    ],
    friday: [
      {
        id: 7,
        name: "Classwork",
        type: "custom",
        startTime: moment("2018-02-23T11:30:00"),
        endTime: moment("2018-02-23T14:30:00"),
      },
      {
        id: 4,
        name: "Test",
        type: "custom",
        startTime: moment("2018-02-22T15:30:00"),
        endTime: moment("2018-02-22T16:30:00"),
      },
    ],
    saturday: [
      {
        id: 7,
        name: "Classwork",
        type: "custom",
        startTime: moment("2018-02-23T08:30:00"),
        endTime: moment("2018-02-23T09:30:00"),
      },
      {
        id: 4,
        name: "Test",
        type: "custom",
        startTime: moment("2018-02-22T16:30:00"),
        endTime: moment("2018-02-22T17:30:00"),
      },
    ],
    sunday: [],
  };

  return (
    <div>
      {/* <NavbarHome /> */}
      <div className="calendar-container">
        <div className="calender-pick-week">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              label="Week picker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderDay={renderWeekPickerDay}
              renderInput={(params) => <TextField {...params} />}
              inputFormat="'Week of' MMM d"
            />
          </LocalizationProvider>
        </div>
        <div className="calendar-todo">
          {/* <TableContainer className="table-calendar" component={Paper}>
            <Table sx={{ minWidth: 1000 }} >
              <TableHead>
                <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>Thứ 2</StyledTableCell>
                    <StyledTableCell>Thứ 3</StyledTableCell>
                    <StyledTableCell>Thứ 4</StyledTableCell>
                    <StyledTableCell>Thứ 5</StyledTableCell>
                    <StyledTableCell>Thứ 6</StyledTableCell>
                    <StyledTableCell>Thứ 7</StyledTableCell>
                    <StyledTableCell>Chủ nhật</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {initialListCalendar?.map((row) => (
                  <StyledTableRow key={row.name}>
                    {numbers.map((number) =>( <StyledTableCell component="th" scope="row"></StyledTableCell> ))}
                    { row.status? 
                      <ButtonGroup variant="contained" aria-label="outlined primary button group"
                        size="large" color="success">
                          <Button>{row.object}</Button>
                      </ButtonGroup>
                      :
                      <ButtonGroup variant="contained" aria-label="outlined primary button group"
                        size="large" color="error">
                        <Button>{row.object}</Button>
                      </ButtonGroup>
                    }
                  </StyledTableRow>
                  
                ))}
                
              </TableBody>
            </Table>
          </TableContainer> */}
          {/* <div>
            <TimeTable
              events={this.state.events}
              renderHour={this.renderHour}
              renderEvent={this.renderEvent}
              hoursInterval={[7, 24]}
              timeLabel="Time :)"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
