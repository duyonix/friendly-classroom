import React from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

function AssignHomework() {
  const [value, setValue] = React.useState(new Date());

  return (
    <section className="assign-homework container">
      <div className="header">
        <div className="classroom-name">Toán 6</div>
        <Button variant="contained" sx={{ px: 3, py: 1.5 }}>
          Giao Bài tập
        </Button>
      </div>

      <Box className="content" component="form" noValidate>
        <div className="row">
          <div className="col-md-9 left">
            <Box className="input-box">
              <TitleIcon
                fontSize="large"
                color="action"
                className="icon-input"
              />
              <TextField
                variant="filled"
                // inputRef={inputName}
                margin="normal"
                // required
                fullWidth
                id="title"
                label="Tiêu đề"
                type="text"
                name="title"
                autoComplete="off"
                // onChange={handleChange}
                // onBlur={handleValidationName}
              />
            </Box>
            <Box className="input-box">
              <DescriptionIcon
                fontSize="large"
                color="action"
                className="icon-input"
              />
              <TextField
                variant="filled"
                // inputRef={inputName}
                margin="normal"
                // required
                fullWidth
                id="description"
                label="Mô tả nội dung"
                type="text"
                name="description"
                autoComplete="off"
                multiline
                minRows={5}
                // onChange={handleChange}
                // onBlur={handleValidationName}
              />
            </Box>
            <Box className="input-box" style={{ alignItems: "flex-end" }}>
              <AttachFileIcon
                fontSize="large"
                color="action"
                className="icon-input"
              />
              <TextField
                variant="standard"
                id="file"
                name="file"
                margin="normal"
                type="file"
              />
            </Box>
          </div>

          <div className="col-md-3 right">
            <Box sx={{ pb: 2 }}>
              <Typography className="input-label">Điểm</Typography>
              <TextField
                variant="outlined"
                id="grade"
                name="grade"
                type="number"
                // label="Điểm"
                fullWidth
                defaultValue="10"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
            <Box sx={{ pb: 2 }}>
              <Typography className="input-label">Hạn nộp</Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  // label="Hạn nộp"
                  fullWidth
                  renderInput={(props) => <TextField {...props} />}
                  inputFormat="dd/MM/yyyy hh:mm a"
                  mask="_/__/____ __:__ _M"
                  minDateTime={new Date()}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                    console.log(newValue);
                  }}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ pb: 2 }}>
              <Typography className="input-label">Chủ đề</Typography>
              <TextField
                variant="filled"
                id="grade"
                name="grade"
                type="number"
                // label="Điểm"
                hiddenLabel
                fullWidth
                defaultValue="10"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          </div>
        </div>
      </Box>
    </section>
  );
}

export default AssignHomework;
