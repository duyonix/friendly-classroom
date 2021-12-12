import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassroomCard from "../../components/ClassroomCard";
import NavbarHome from "../../components/NavbarHome";
import { fetchUserInfo } from "../../redux/modules/Home/action";
import { pathImgFromIndex } from "../../utils/constants";
import Loading from "../../components/Loading";
import CreateClassroomDialog from "../../components/CreateClassroomDialog";
import JoinClassroomDialog from "../../components/JoinClassroomDialog";

function Home() {
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);

  useEffect(() => {
    dispatch(fetchUserInfo());
    //eslint-disable-next-line
  }, [render]);

  const loading = useSelector((state) => state.fetchUserInfoReducer.loading);
  const data = useSelector((state) => state.fetchUserInfoReducer.data);
  const err = useSelector((state) => state.fetchUserInfoReducer.err);

  const user = data?.user;
  const classStudent = user?.classStudent;
  const classTeacher = user?.classTeacher;

  localStorage.setItem("avatar", user?.avatarUrl);

  // console.log(classStudent);

  // Dialog Create Classroom
  const [openCreateDialog, setOpenCreateDialog] = React.useState(false);

  const handleOpenCreateDialog = () => {
    setOpenCreateDialog(true);
  };

  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false);
  };

  // Dialog Join Classroom
  const [openJoinDialog, setOpenJoinDialog] = React.useState(false);

  const handleOpenJoinDialog = () => {
    setOpenJoinDialog(true);
  };

  const handleCloseJoinDialog = () => {
    setOpenJoinDialog(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (err) {
    console.log("error", err);
  }

  return (
    <div className="home">
      <NavbarHome />
      <div className="container mt-4">
        <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleOpenCreateDialog}>
            Tạo lớp học
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={handleOpenJoinDialog}
          >
            Tham gia lớp học
          </Button>
        </Stack>

        <CreateClassroomDialog
          openCreateDialog={openCreateDialog}
          handleCloseCreateDialog={handleCloseCreateDialog}
          render={render}
          setRender={setRender}
        />

        <JoinClassroomDialog
          openJoinDialog={openJoinDialog}
          handleCloseJoinDialog={handleCloseJoinDialog}
          render={render}
          setRender={setRender}
        />

        <div className="student-area area">
          <div className="student-header">
            <div className="header">
              <img
                className="img-header"
                src={pathImgFromIndex + "Student_icon.png"}
                alt="student"
              />
              <span className="header-name">Học sinh</span>
            </div>
          </div>
        </div>

        <div className="row">
          {classStudent?.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
              <ClassroomCard classInfo={item} index={index} role="student" />
            </div>
          ))}
        </div>

        <div className="teacher-area area">
          <div className="teacher-header">
            <div className="header">
              <img
                className="img-header"
                src={pathImgFromIndex + "teacher_icon.png"}
                alt="teacher"
              />
              <span className="header-name">Giáo viên</span>
            </div>
          </div>
        </div>

        <div className="row">
          {classTeacher?.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
              <ClassroomCard classInfo={item} index={index} role="teacher" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
