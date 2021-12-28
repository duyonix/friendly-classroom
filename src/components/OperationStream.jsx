import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { pathImgFromIndex } from "../utils/constants";
import { Avatar } from "@mui/material";
import Posts from "./post/Posts.js";
import PostForm from "./post/PostForm.js";
import{
  actFetchAllPost,
  actFetchSinglePost,
  actCreatePost,
  actUpdatePost,
  deletePost,
} from "../redux/modules/Stream/Post/action"
// TODO: action call API
function OperationStream() {
  let className = null;
  if (localStorage.getItem("classInfo")) {
    className = JSON.parse(localStorage.getItem("classInfo")).name;
  }
  const initialPost = [
    {
      id: 1,
      name: "Võ Hoàng Vũ",
      avatar: "hoang_vu.jpg",
      time: "22 th 11",
      title: " Ahihi",
      body: "Cô thông báo bài 1 không làm bị trừ điểm",
      postedBy: 1,
    },
    {
      id: 2,
      name: "Võ Vũ",
      avatar: "student_icon.png",
      time: "22 th 11",
      body: "Hôm nay nghỉ nhé các em",
      postedBy: 1,
    },
    {
      id: 3,
      name: "Võ Vũ",
      avatar: "teacher_icon.png",
      time: "22 th 11",
      body: "Rét dữ dội. Tuyết rơi. Trời đã tối hẳn. Đêm nay là đêm giao thừa. Giữa trời đông giá rét, một em gái nhỏ đầu trần, chân đi đất, đang dò dẫm trong đêm tối.Lúc ra khỏi nhà em có đi giày vải, nhưng giày vải phỏng có tác dụng gì kia chứ !Giày ấy của mẹ em để lại, rộng quá, em đã liên tiếp làm văng mất cả hai chiếc khi em chạy qua đường, vào lúc hai chiếc xe ngựa đang phóng nước đại.",
      postedBy: 2,
    },
  ];
  const [posts, setPosts] = useState(initialPost);
  // const addPost = (text) => {
  //   setPosts([...posts, { body: {}, id: 1 }]);
  // };
  //TODO: addPost --> createPost
  //TODO: fetch singlePost, allPosts
  const dispatch = useDispatch();

  //load user info
  return (
    <div>
        <div className="operation-stream container">
          <div className="classname">{className}</div>
          <div className="share">
            <div className="shareWrapper">
              <div className="shareTop">
                 <Avatar
                  // TODO: load avt of this user
                  src={pathImgFromIndex + "meo_ngu_ngoc.jpg"}
                  alt="avatar"
                  sx={{ width: 40, height: 40 }}
                />      
                <input
                  placeholder="Nhập nội dung ..."
                  className="shareInput"
                />
              </div>
              <hr className="shareHr"/>
              <div className="shareBottom">
                  <button  className="shareButton"> Đăng </button>
                  {/* <button className="cancelButton">Hủy</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="posts-container">
          <div className="posts-poster">
            <img src={pathImgFromIndex+"post.png"}></img>
          </div>
          <div className="posts-list">
          {initialPost.map((post)=>(
                <Post 
                key ={post.id}
                name={post.name}
                avatar={post.avatar}
                body={post.body}
                time={post.time}/>
                ))}
          </div>
        </div>
        </div>
  );
}

export default OperationStream;
