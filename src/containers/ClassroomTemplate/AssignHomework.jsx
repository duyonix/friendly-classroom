import React, { useState } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { useSelector } from "react-redux";
import CreatableSelect from "react-select/creatable";
import Files from "react-files";
import DeleteIcon from "@mui/icons-material/Delete";
import { pathImgFromIndex } from "../../utils/constants";
import { useParams } from "react-router-dom";

function AssignHomework() {
  const classInfo = JSON.parse(localStorage.getItem("classInfo"));
  const { classroomId } = useParams();

  const [state, setState] = useState({
    title: "",
    description: "",
    deadline: new Date(),
    file: null,
    topic: "Không có chủ đề",
  });

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [file, setFile] = useState(null);
  // const [deadline, setDeadline] = useState(new Date());
  // const [topic, setTopic] = useState("Không có chủ đề");

  const rawTopic = useSelector((state) => state.homeworkReducer.data);
  let allTopics = [];

  allTopics = rawTopic?.map((item) => {
    return {
      value: item.topic,
      label: item.topic,
    };
  });
  allTopics.unshift({ value: "Không có chủ đề", label: "Không có chủ đề" });

  // console.log("topic", allTopics);
  // console.log("classInfo", classInfo);

  const onFilesChange = (files) => {
    if (files[0] !== undefined) setState({ ...state, file: files[0] });
    console.log(files[0]);
  };
  const onFilesError = (error) => {
    console.log("error code " + error.code + ": " + error.message);
    setState({ ...state, file: null });
    if (error.code === 2) {
      alert("Kích thước tệp vượt quá 20MB. Vui lòng thử lại hoặc nén file!");
    }
  };

  const format2Digits = (n) => {
    return n < 10 ? "0" + n : n;
  };

  const convertDate = (date) => {
    date = new Date(date);
    let hours, minutes;
    hours = format2Digits(date.getHours());
    minutes = format2Digits(date.getMinutes());

    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var yyyy = date.getFullYear();
    return " " + dd + "/" + mm + "/" + yyyy + " " + hours + ":" + minutes;
  };

  const handleDeleteFile = () => {
    setState({ ...state, file: null });
    // setSubmit(false);
  };

  return (
    <section className="assign-homework container">
      <div className="header">
        <div className="classroom-name">{classInfo.name}</div>
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
            <Box
              className="input-box"
              style={{ alignItems: "flex-start", marginTop: "1rem" }}
            >
              <AttachFileIcon
                fontSize="large"
                color="action"
                className="icon-input"
              />
              {state.file === null ? (
                <Files
                  enctype="multipart/form-data"
                  className="files-dropzone"
                  onChange={onFilesChange}
                  onError={onFilesError}
                  multiple={false}
                  maxFiles={1}
                  maxFileSize={20971520}
                  minFileSize={0}
                  clickable
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {
                    <div
                      className="drop-zone"
                      style={{
                        border: "2px dashed #bbb",
                        minHeight: 150,
                        padding: "0 10px",
                      }}
                    >
                      <div className="up-arrow"></div>
                      Kéo thả hoặc ấn vào đây để đăng tải file
                    </div>
                  }
                </Files>
              ) : (
                ""
              )}
              <div className="files">
                {state.file !== null ? (
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      borderRadius: 10,
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  >
                    <div className="card-body d-flex p-3 file-info">
                      <img
                        src={pathImgFromIndex + "file.png"}
                        alt="file img"
                        height="100"
                        style={{ marginRight: 20, marginLeft: -20 }}
                      />
                      <div className="info-file-block" style={{ width: "80%" }}>
                        <div className="info d-flex justify-content-between">
                          <div
                            style={{
                              width: "80%",
                            }}
                          >
                            <h5
                              className="card-title"
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                              }}
                            >
                              {state.file?.name}
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Kích thước: {state.file?.sizeReadable}
                            </h6>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Loại: {state.file?.extension}
                            </h6>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Đăng tải: {convertDate(state.file?.lastModified)}
                            </h6>
                          </div>
                          <button className="btn btn-delete-file">
                            <DeleteIcon
                              fontSize="large"
                              color="error"
                              onClick={handleDeleteFile}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
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
                // label="-"
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
                  // label="-"
                  fullWidth
                  renderInput={(props) => <TextField {...props} />}
                  inputFormat="dd/MM/yyyy hh:mm a"
                  mask="_/__/____ __:__ _M"
                  // minDateTime={new Date()}
                  value={state.deadline}
                  // onChange={(newValue) => {
                  //   setDeadline(newValue);
                  //   console.log(newValue);
                  // }}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ pb: 2 }}>
              <Typography className="input-label">Chủ đề</Typography>
              <CreatableSelect
                isClearable
                formatCreateLabel={(inputValue) =>
                  "Tạo chủ đề mới: " + inputValue
                }
                defaultValue={allTopics[0]}
                placeholder="Chọn chủ đề"
                onChange={(value) => console.log(value)}
                options={allTopics}
                size="large"
              />
            </Box>
          </div>
        </div>
      </Box>
    </section>
  );
}

export default AssignHomework;
