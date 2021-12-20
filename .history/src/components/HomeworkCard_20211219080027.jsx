import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { pathImgFromIndex } from "../utils/constants";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function HomeworkCard(props) {
  const { type, homework } = props;
  let role;
  if (localStorage.getItem("role")) {
    role = localStorage.getItem("role");
  }
  const imgIconCard = type === "Homework" ? "homework_icon" : "document_icon";
  return (
    <div className="homework-card">
      <Card style={{ maxWidth: 600 }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
            cursor: "default",
          }}
        >
          <CardMedia
            component="img"
            height={type === "Homework" ? "64" : "80"}
            image={pathImgFromIndex + imgIconCard + ".png"}
            alt="homework icon"
            style={{ width: "auto", display: "inline-block" }}
          />
          <div className="info">
            <span className="hw-name">{homework?.title}</span>
            {type === "Homework" ? (
              <span className="hw-deadline">
                Hạn chót: {homework?.deadline}
              </span>
            ) : (
              <span className="hw-createdAt">
                Ngày đăng: {homework?.createdAt}
              </span>
            )}
           {role === "teacher"}

            <Link to={"/classroom/:classroomId/homework/" + homework?._id}>
              <button className="btn btn-detail">Chi tiết</button>
            </Link>
          </div>
        </Box>
      </Card>
    </div>
  );
}

export default HomeworkCard;
