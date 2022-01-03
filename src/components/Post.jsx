import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import Comments from './comment/Comments.js';
import { Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Comments1 from "./comment/Comments1.jsx";
// import CommentForm1 from './comment/CommentForm1.jsx';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function format2Digits(n) {
  return n < 10 ? "0" + n : n;
}
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
function Post(props) {
  //

  // const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(props.post.createdAt) > fiveMinutes;
  // const canDelete =props.currentUserId === props.post.userId && !timePassed;
  // const canEdit = props.currentUserId === props.post.userId && !timePassed;

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const OptionMenu = (props) => {
    const options = [
      { title: "Sửa" },
      // TODO: handleClickUpdate
      { title: "Xóa" },
      // TODO: handleClickDelete
    ];
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="option-menu">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem key={index} onClick={option.handleClick}>
              {option.title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  };

  return (
    <div className="post">
      <Card className="card-post" sx={{ maxWidth: 1400 }}>
        <div className="card-header-function">
          <CardHeader
            key={props.id}
            sx={{ minWidth: 550 }}
            avatar={
              <Avatar
                //src={props.avatar} TODO: load avt of post
                src={props.avatar}
                alt="avatar"
                sx={{ width: 40, height: 40 }}
              />
            }
            title={<div className="post-author">{props.name}</div>}
            subheader={convertDate(props.time)}
          />
          <OptionMenu />
        </div>
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {props.body}
          </Typography>
        </CardContent>
        {
          <CardActions disableSpacing>
            <div className="show-helper-text">Xem thêm thảo luận</div>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        }
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {/* <Comments currentUserId="4" /> */}
          {/* TODO: load ID user to setup currentUserId*/}
          <Comments1 rootComments={props.listComments} />
        </Collapse>
      </Card>
    </div>
  );
}

export default Post;
