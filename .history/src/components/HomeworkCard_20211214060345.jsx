import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { pathImgFromIndex } from "../utils/constants";
function HomeworkCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 600, display: "flex" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="64"
            image={pathImgFromIndex + "homework_icon.png"}
            alt="homework icon"
            style={{ width: "auto", display: "inline-block" }}
          />
        </CardActionArea>
      </Card>
    </div>
  );
}

export default HomeworkCard;
