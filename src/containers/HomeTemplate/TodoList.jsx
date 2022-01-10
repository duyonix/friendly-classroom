import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { pathImgFromIndex } from "../../utils/constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import{
  fetchAllTodo,
} from "../../redux/modules/Todo/action.js";
const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          backgroundColor: red,
        },
      },
    },
  },
});

function TodoList() {
  //TODO: load list course
  const currencies = [
    {
      value: "Tất cả các lớp học",
      label: "$",
    },
    {
      value: "Toán 6",
      label: "€",
    },
    {
      value: "Anh 6",
      label: "฿",
    },
    {
      value: "BD Toán 6",
      label: "¥",
    },
  ];
  const [currency, setCurrency] = React.useState("Tất cả các lớp học");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  //TODO: load list task
  const todoList = {
    duocgiao: [
      {
        object: "Toán 6",
        title: "Nhân biểu thức",
      },
      {
        object: "Tin 6",
        title: "Vòng lặp",
      },
      {
        object: "Anh 6",
        title: "Greeting",
      },
    ],
    hoanthanh: [
      {
        object: "Anh 6",
        title: "Nhân biểu thức",
      },
      {
        object: "Toán 6",
        title: "Nhân biểu thức",
      },
    ],
    quahan: [
      {
        object: "BD Toán 6",
        title: "Cộng biểu thức",
      },
    ],
  };
  useEffect(() => {
      dispatch(fetchAllTodo);
    //eslint-disable-next-line
  }, []);
  const dispatch = useDispatch();

  const dataTodo = useSelector(
    (state) => state.fetchAllTodoReducer?.data
  );
  const loadingTodo = useSelector(
    (state) => state.fetchAllTodoReducer?.loading
  );
  const errTodo = useSelector(
    (state) => state.fetchAllTodoReducer?.err
  );
  console.log("dataTodo");
  console.log(dataTodo);
  return (
    <div>
      {dataTodo}
      <div className="container-todolist">
        <div className="function-filter">
          <TextField
            id="outlined-select-currency"
            select
            label="."
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
        <div className="groups">
          <div className="card-title-length">
            <ThemeProvider theme={theme}>
              <Card className="card-title" sx={{ minWidth: 300 }}>
                <CardMedia
                  sx={{ maxWidth: 160 }}
                  component="img"
                  height="130"
                  image={pathImgFromIndex + "meo_ngu_ngoc.jpg"}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {todoList.duocgiao.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Việc được giao
                  </Typography>
                </CardContent>
              </Card>
            </ThemeProvider>
          </div>
          <div className="card-title-length">
            <ThemeProvider theme={theme}>
              <Card className="card-title" sx={{ minWidth: 300 }}>
                <CardMedia
                  sx={{ maxWidth: 160 }}
                  component="img"
                  height="130"
                  image={pathImgFromIndex + "meo_ngu_ngoc.jpg"}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {todoList.hoanthanh.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Việc hoàn thành
                  </Typography>
                </CardContent>
              </Card>
            </ThemeProvider>
          </div>
          <div className="card-title-length">
            <ThemeProvider theme={theme}>
              <Card className="card-title" sx={{ minWidth: 300 }}>
                <CardMedia
                  sx={{ maxWidth: 160 }}
                  component="img"
                  height="130"
                  image={pathImgFromIndex + "meo_ngu_ngoc.jpg"}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {todoList.quahan.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Việc quá hạn
                  </Typography>
                </CardContent>
              </Card>
            </ThemeProvider>
          </div>
        </div>
        <div className="data-groups">
          <div className="card-content-exercise">
            {todoList.duocgiao?.map((ex) => (
              <div className="card-content-exercise-button">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ minWidth: 300 }}
                >
                  <div>
                    <Typography>{ex.object}</Typography>
                    <Typography variant="body3">{ex.title}</Typography>
                  </div>
                </Button>
              </div>
            ))}
          </div>
          <div className="card-content-exercise">
            {todoList.hoanthanh?.map((ex) => (
              <div className="card-content-exercise-button">
                <Button
                  variant="contained"
                  color="success"
                  sx={{ minWidth: 300 }}
                >
                  <div>
                    <Typography>{ex.object}</Typography>
                    <Typography variant="body3">{ex.title}</Typography>
                  </div>
                </Button>
              </div>
            ))}
          </div>
          <div className="card-content-exercise">
            {todoList.quahan?.map((ex) => (
              <div className="card-content-exercise-button">
                <Button
                  variant="contained"
                  color="error"
                  sx={{ minWidth: 300 }}
                >
                  <div>
                    <Typography>{ex.object}</Typography>
                    <Typography variant="body3">{ex.title}</Typography>
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
