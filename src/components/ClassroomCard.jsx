import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, Stack } from "@mui/material";
// import { pathImgFromIndex } from "../utils/constants";

const bgColor = [
  "#bbecff",
  "#caffcc",
  "#d9caff",
  "#e8ffca",
  "#ffe2ca",
  "#e1e1e1",
];

function ClassroomCard(props) {
  const { classInfo, role, index } = props;

  const bgColorItem = bgColor[index % bgColor.length];

  return (
    <Card sx={{ borderRadius: 5, backgroundColor: bgColorItem }}>
      <CardActionArea sx={{ height: 200 }}>
        {/* <CardMedia
          component="img"
          height="140"
          image={pathImgFromIndex + "intro_func_2.png"}
          alt="classroom"
        /> */}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{ textTransform: "uppercase", fontWeight: 500 }}
          >
            {classInfo.name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 4 }}>
            {classInfo.numberOfMember} thành viên
          </Typography>

          {role === "student" ? (
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "flex-end", alignItems: "center" }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                {classInfo.teacherId.fullName}
              </Typography>

              <Avatar
                sx={{ width: "48px", height: "48px" }}
                alt="User"
                src={classInfo.teacherId.avatarUrl}
              />
            </Stack>
          ) : (
            <div style={{ height: "48px" }}></div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ClassroomCard;
