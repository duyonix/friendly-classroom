import { useState, useEffect } from "react";
import CommentForm1 from "./CommentForm1.jsx";
import Comment1 from "./Comment1.jsx";
import SendIcon from "@mui/icons-material/Send";
function Comments1(props) {
  const [activeComment, setActiveComment] = useState(null);
  let userId = null;

  if (localStorage.getItem("User")) {
    userId = JSON.parse(localStorage.getItem("User")).user._id;
  }
  const rootComments = props.rootComments;
  return (
    <div className="comments">
      <div className="comments-container">
        {rootComments?.map((rootComment) => (
          <Comment1
            classroomId={props.classroomId}
            postId={props.id}
            className="comment-child"
            key={rootComment._id}
            comment={rootComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            // addComment={addComment}
            // deleteComment={deleteComment}
            // updateComment={updateComment}
            currentUserId={userId}
          />
        ))}
      </div>
      <CommentForm1
        classroomId={props.classroomId}
        id={props.id}
        submitLabel={<SendIcon />}
        // handleSubmit={addComment}
      />
    </div>
  );
}

export default Comments1;
