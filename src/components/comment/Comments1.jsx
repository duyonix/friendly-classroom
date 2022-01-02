import { useState, useEffect } from "react";
import CommentForm1 from "./CommentForm1.jsx";
import Comment1 from "./Comment1.jsx"
import SendIcon from '@mui/icons-material/Send';
import{
  actFetchAllComments,
  actCreateComment,
  actUpdateComment,
  actDeleteComment,
}from "../../redux/modules/Stream/Comment/action"
function Comments1(currentUserId) {
  const [activeComment, setActiveComment] = useState(null);
  const rootComments=[
    {
      id: "1",
      body: "Bạn giỏi quá à",
      username: "Duy",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Dạ cô",
      username: "Bảo",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
  return (
    <div className="comments">
      
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment1 className="comment-child"
            key={rootComment.id}
            comment={rootComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            // addComment={addComment}
            // deleteComment={deleteComment}
            // updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
      <CommentForm1 submitLabel={<SendIcon />} 
      // handleSubmit={addComment} 
      />
    </div>
  )
}

export default Comments1
