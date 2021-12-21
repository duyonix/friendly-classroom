import React from "react";
import NavbarHome from "../../components/NavbarHome";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { pathImgFromIndex } from "../../utils/constants";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: 3,
  width: 'fit-content',
  height: 'fit-content',
};

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          backgroundColor: red,
        },
      },
    },
  },
});

function TodoList() {
  const currencies = [
    {
      value: 'Tất cả các lớp học',
      label: '$',
    },
    {
      value: 'Toán 6',
      label: '€',
    },
    {
      value: 'Anh 6',
      label: '฿',
    },
    {
      value: 'BD Toán 6',
      label: '¥',
    },
  ];
  const [currency, setCurrency] = React.useState('Tất cả các lớp học');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  
  const todoList = {
      duocgiao:[
      {
        object:"Toán 6",
        title:"Nhân biểu thức",
      },
      {
        object:"Tin 6",
        title:"Vòng lặp",
      },
      {
        object:"Anh 6",
        title:"Greeting",
      }
      ],
      hoanthanh:[
        {
          object:"Anh 6",
          title:"Nhân biểu thức",
        },
        {
          object:"Toán 6",
          title:"Nhân biểu thức",
        }
        ],
      quahan:[
      {
        object:"BD Toán 6",
        title:"Cộng biểu thức",
      }
      ]  ,
};

  return (
    <div>
      <NavbarHome />
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
              <Card className="card-title" sx={{ minWidth:300 }}>
                <CardMedia sx={{ maxWidth:160 }}
                  component="img"
                  height="130"
                  image={pathImgFromIndex+"meo_ngu_ngoc.jpg"}
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
        <Card className="card-title" sx={{ minWidth:300 }}>
                <CardMedia sx={{ maxWidth:160 }}
                  component="img"
                  height="130"
                  image={pathImgFromIndex+"meo_ngu_ngoc.jpg"}
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
        <Card className="card-title" sx={{ minWidth:300 }}>
                <CardMedia sx={{ maxWidth:160 }}
                  component="img"
                  height="130"
                  image={pathImgFromIndex+"meo_ngu_ngoc.jpg"}
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
          {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ ...commonStyles, borderColor: 'primary.main',borderRadius: '7%' }} >
            <Card>
                  <CardContent>
                    {todoList.duocgiao?.map((ex) => (
                    <div><h5>{ex.object}</h5>
                    <h5>{ex.title}</h5></div>
                    ))}
                  </CardContent>
                </Card>
            </Box>
          </Box> */}
          <div className="card-content-exercise">
          {todoList.duocgiao?.map((ex) => (
                    <div className="card-content-exercise-button">
                      <Button variant="contained" color="primary" sx={{ minWidth:300 }}>
                        <div>
                        <Typography>{ex.object}</Typography>
                        <Typography variant="body3" >{ex.title}</Typography></div>
                      </Button>
                    </div>
                    ))}
          </div>
          <div className="card-content-exercise">
          {todoList.hoanthanh?.map((ex) => (
                    <div className="card-content-exercise-button">
                      <Button variant="contained" color="success" sx={{ minWidth:300 }}>
                        <div>
                        <Typography>{ex.object}</Typography>
                        <Typography variant="body3" >{ex.title}</Typography></div>
                      </Button>
                    </div>
                    ))}
          </div>
          <div className="card-content-exercise">
          {todoList.quahan?.map((ex) => (
                    <div className="card-content-exercise-button">
                      <Button variant="contained" color="error" sx={{ minWidth:300 }}>
                        <div>
                        <Typography>{ex.object}</Typography>
                        <Typography variant="body3" >{ex.title}</Typography></div>
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
