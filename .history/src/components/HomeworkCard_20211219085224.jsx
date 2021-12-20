import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { pathImgFromIndex } from "../utils/constants";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDocumentDetailList } from "../redux/modules/Homework/action";
import Loading from "./Loading";
function HomeworkCard(props) {
  const { type, homework } = props;
  let role;
  if (localStorage.getItem("role")) {
    role = localStorage.getItem("role");
  }
  const dispatch = useDispatch();
  const [more, setMore] = useState(false);

  const imgIconCard = type === "Homework" ? "homework_icon" : "document_icon";

  const showDetailDocument = (document) => {
    return () => {
      dispatch(actFetchDocumentDetailList("61ba9ed7b168494e4a970488"));
      setMore(true);
    };
  };

  const data = useSelector((state) => state.documentDetailReducer?.data);
  const loading = useSelector((state) => state.documentDetailReducer?.loading);
  const err = useSelector((state) => state.documentDetailReducer?.err);
  if (loading) {
    return <Loading />;
  }
  if (err) {
    console.log(err.response.data.message);
  }
  if (data) {
    console.log(data);
  }
  const renderMore = () => {};

  const collapseDocument = () => {
    setMore(false);
  };
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
            {role === "teacher" ? (
              <Link
                to={{
                  pathname: "/classroom/:classroomId/homework/" + homework?._id,
                  state: { homework: homework },
                }}
              >
                <button className="btn btn-change">Sửa</button>
              </Link>
            ) : (
              ""
            )}

            {role === "teacher" ? (
              <Link to={"/classroom/:classroomId/homework/" + homework?._id}>
                <button className="btn btn-detail">Chi tiết</button>
              </Link>
            ) : type === "homework" ? (
              <Link to={"/classroom/:classroomId/homework/" + homework?._id}>
                <button className="btn btn-detail">Chi tiết</button>
              </Link>
            ) : more === false ? (
              <button
                className="btn btn-detail"
                onClick={showDetailDocument(homework)}
              >
                Chi tiết
              </button>
            ) : (
              <button className="btn btn-detail" onClick={collapseDocument}>
                Thu gọn
              </button>
            )}
          </div>
        </Box>
      </Card>
    </div>
  );
}

export default HomeworkCard;
