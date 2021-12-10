import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  registerUser,
  resetRegister,
} from "../../redux/modules/Register/action";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";

const theme = createTheme();

function Register() {
  // khởi tạo các state tương ứng để kiểm tra các trường đăng ký
  const [isValidTelNumber, setIsValidTelNumber] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [validTel, setValidTel] = useState(false);
  const [emptyUsernameNotice, setEmptyUsernameNotice] = useState(false);
  const [emptyPasswordNotice, setEmptyPasswordNotice] = useState(false);
  const [isEmailFormatNotice, setIsEmailFormatNotice] = useState(false);
  const [emptyFullNameNotice, setEmptyFullNameNotice] = useState(false);
  const [isConfirmPasswordNotice, setIsConfirmPasswordNotice] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  // state để dispatch lên action Register
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
    phoneNumber: "",
  });

  const dispatch = useDispatch();

  const err = useSelector((state) => state.registerReducer.err);
  const data = useSelector((state) => state.registerReducer.data);
  const loading = useSelector((state) => state.registerReducer.loading);

  // hàm để khởi tạo mặc định các state từng trường thành false
  const handleDisableNotice = () => {
    setEmptyUsernameNotice(false);
    setIsValidTelNumber(false);
    setEmptyPasswordNotice(false);
    setIsConfirmPasswordNotice(false);
    setIsEmailFormatNotice(false);
    setEmptyFullNameNotice(false);
  };

  // regex for phoneNumber
  const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  // regex cho email
  const mailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // hàm bắt sự kiện Onchange của các trường đăng ký
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });

    // console.log("password", state.password);

    if (state.username !== "") {
      setEmptyUsernameNotice(false);
    }
    if (state.password !== "") {
      setEmptyPasswordNotice(false);
    }
    if (state.fullName !== "") {
      setEmptyFullNameNotice(false);
    }
    if (state.email.match(mailFormat) && state.email !== "") {
      setIsEmailFormatNotice(false);
      setValidEmail(true);
    }
    if (vnf_regex.test(state.phoneNumber) && state.phoneNumber !== "") {
      setIsValidTelNumber(false);
      setValidTel(true);
    }
    if (
      state.username !== "" &&
      state.password !== "" &&
      state.fullName !== "" &&
      validEmail === true &&
      validTel === true
    ) {
      setIsDisable(false);
    }
  };

  const handleChangeConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    // console.log("value", value);
    // console.log("confirmPassword", confirmPassword);

    if (value !== "" && value === state.password) {
      setIsConfirmPasswordNotice(false);
    } else {
      setIsDisable(true);
    }
  };

  // hàm kiểm tra điều kiện đúng của phoneNumber bằng regex
  const validationTelNumber = () => {
    if (vnf_regex.test(state.phoneNumber) && state.phoneNumber !== "") {
      setIsValidTelNumber(false);
      setValidTel(true);
    } else {
      setIsValidTelNumber(true);
      setValidTel(false);
      setIsDisable(true);
    }
  };

  // các hàm kiểm tra validation cho từng trường dữ liệu
  const handleValidationEmptyUserName = () => {
    if (state.username === "") {
      setEmptyUsernameNotice(true);
    }
  };

  const handleValidationEmptyPassword = () => {
    // console.log("password out", state.password);
    if (state.password === "") {
      setEmptyPasswordNotice(true);
    }
  };

  const handleValidationsConfirmPassword = () => {
    if (confirmPassword === "" || confirmPassword !== state.password) {
      setIsConfirmPasswordNotice(true);
    } else {
      setIsDisable(true);
    }
  };

  const handleValidationEmptyFullName = () => {
    if (state.fullName === "") {
      setEmptyFullNameNotice(true);
    }
  };

  const handleValidationEmail = () => {
    if (state.email.match(mailFormat) && state.email !== "") {
      setIsEmailFormatNotice(false);
      setValidEmail(true);
    } else {
      setIsEmailFormatNotice(true);
      setValidEmail(false);
      setIsDisable(true);
    }
  };

  useEffect(() => {
    if (
      state.username !== "" &&
      state.password !== "" &&
      confirmPassword !== "" &&
      confirmPassword === state.password &&
      state.fullName !== "" &&
      validEmail === true &&
      validTel === true
    ) {
      setIsDisable(false);
    }
    //eslint-disable-next-line
  }, [validTel, validEmail]);

  // hàm in ra thông báo lỗi validate tương ứng của các trường khi nhập sai
  const handleValidationNotice = () => {
    if (emptyFullNameNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Họ Tên không được để trống</Alert>;
    }
    if (isValidTelNumber) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Số điện thoại không đúng</Alert>;
    }
    if (emptyUsernameNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Tên đăng nhập không được để trống</Alert>;
    }
    if (emptyPasswordNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Mật Khẩu không được để trống</Alert>;
    }
    if (isConfirmPasswordNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Mật khẩu không trùng khớp</Alert>;
    }
    if (isEmailFormatNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Không đúng định dạng email</Alert>;
    }
  };

  const handleResetReducer = () => {
    dispatch(resetRegister());
  };

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <div id="card" className="animated fadeIn">
        <div id="upper-side">
          {/*?xml version="1.0" encoding="utf-8"?*/}
          {/* Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
          {/* {handleResetReducer()} */}
          <div className="success-checkmark">
            <div className="check-icon">
              <span className="icon-line line-tip"></span>
              <span className="icon-line line-long"></span>
              <div className="icon-circle"></div>
              <div className="icon-fix"></div>
            </div>
          </div>
          <h3 id="status">THÀNH CÔNG</h3>
        </div>
        <div id="lower-side">
          <p id="message">
            Chúc mừng, tài khoản của ban đã được tạo thành công.
          </p>
          <NavLink to={`/login`} id="contBtn">
            <Button style={{ color: "white" }} onClick={handleResetReducer}>
              Đăng nhập ngay
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }

  if (err) {
    setTimeout(handleResetReducer, 1500);
    // setIsDisable(true);
  }

  // hàm Submit đăng ký và truyền dữ liệu lên server
  const handleSubmit = (event) => {
    // console.log("err", err);
    // console.log("data", data);
    // console.log("loading", loading);

    event.preventDefault();
    dispatch(registerUser(state));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src="/assets/img/Friendly_logo.png"
              alt="Friendly"
              style={{
                height: "70px",
                width: "auto",
              }}
            />
          </Link>

          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          {err ? (
            <Alert severity="error">{err?.response.data.message}</Alert>
          ) : (
            ""
          )}
          {handleValidationNotice()}

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6">
                  Thông tin tài khoản
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  type="text"
                  label="Tên đăng nhập"
                  onChange={handleChange}
                  onBlur={handleValidationEmptyUserName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  onBlur={handleValidationEmptyPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Xác nhận mật khẩu"
                  type="password"
                  id="confirmPassword"
                  onChange={handleChangeConfirmPassword}
                  onBlur={handleValidationsConfirmPassword}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ marginTop: 10 }}
                >
                  Thông tin cá nhân
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Họ và tên"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  onChange={handleChange}
                  onBlur={handleValidationEmptyFullName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  onBlur={handleValidationEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Số điện thoại"
                  type="phoneNumber"
                  id="phoneNumber"
                  autoComplete="phoneNumber"
                  onChange={handleChange}
                  onBlur={validationTelNumber}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
              disabled={isDisable}
            >
              Đăng ký
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  to="/login"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Đã có tài khoản? Đăng nhập ngay
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
