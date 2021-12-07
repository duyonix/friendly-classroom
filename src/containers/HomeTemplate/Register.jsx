import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@mui/material";

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

  // state để dispatch lên action Register
  const [state, setState] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    tel: "",
  });

  // hàm để khởi tạo mặc định các state từng trường thành false
  const handleDisableNotice = () => {
    setEmptyUsernameNotice(false);
    setIsValidTelNumber(false);
    setEmptyPasswordNotice(false);
    setIsEmailFormatNotice(false);
    setEmptyFullNameNotice(false);
  };

  // regex for tel
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
    if (vnf_regex.test(state.tel) && state.tel !== "") {
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

  // hàm kiểm tra điều kiện đúng của tel bằng regex
  const validationTelNumber = () => {
    if (vnf_regex.test(state.tel) && state.tel !== "") {
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
    if (state.password === "") {
      setEmptyPasswordNotice(true);
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
    if (isEmailFormatNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Không đúng định dạng email</Alert>;
    }
  };

  // hàm Submit đăng ký và truyền dữ liệu lên server
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // dispatch(registerUser(state));
    // eslint-disable-next-line no-console
    console.log({
      username: data.get("username"),
      password: data.get("password"),
      fullName: data.get("fullName"),
      email: data.get("email"),
      tel: data.get("tel"),
    });
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
          <img
            src="/assets/img/Friendly_logo.png"
            alt="Friendly"
            style={{
              height: "70px",
              width: "auto",
            }}
          />
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>

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
                  name="tel"
                  label="Số điện thoại"
                  type="tel"
                  id="tel"
                  autoComplete="tel"
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
