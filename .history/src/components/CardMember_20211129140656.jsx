import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { pathImgFromIndex } from "../utils/constants";
export default function CardMember(props) {
  const student = props.student;
  console.log(student);
  return (
    <Card className="card-member" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {student.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {student.des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
