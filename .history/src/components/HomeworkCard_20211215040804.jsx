import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { pathImgFromIndex } from "../utils/constants";
function HomeworkCard(props) {
  const { type, homework } = props;
  const imgIconCard = type === "Homework" ? "homework_icon" : "document_icon";
  return (
    <div className="homework-card">
      <Card style={{ maxWidth: 600 }}>
        <CardActionArea
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
            <span className="hw-name">{Nhân biểu thức}</span>
            <span className="hw-deadline">Hạn chót: 20.11.2021</span>
            <button className="btn btn-change">Sửa</button>
            <button className="btn btn-detail">Chi tiết</button>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default HomeworkCard;
