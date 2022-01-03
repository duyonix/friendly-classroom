import React from "react";
import SendIcon from "@mui/icons-material/Send";
import DoneIcon from "@mui/icons-material/Done";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CommentForm1 from "./CommentForm1";

function Comment1(props) {
  const isEditing =
    props.activeComment &&
    props.activeComment.id === props.comment.id &&
    props.activeComment.type === "editing";

  const fiveMinutes = 300000;
  const timePassed =
    new Date() - new Date(props.comment.createdAt) > fiveMinutes;
  const canDelete = props.currentUserId === props.comment.userId && !timePassed;
  const canEdit = props.currentUserId === props.comment.userId && !timePassed;
  // const createdAt = new Date(props.comment.createdAt).toLocaleDateString();

  return (
    <div key={props.comment.id} className="comment">
      <div className="comment-image-container">
        <Avatar
          // TODO: load avt of this author
          src={props.comment.commentedBy.avatarUrl}
          alt="avatar"
          sx={{ width: 40, height: 40 }}
        />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">
            {props.comment.commentedBy.username}
          </div>
          {/* <div>{props.comment.createdAt}</div> */}
        </div>
        {!isEditing && <div className="comment-text">{props.comment.body}</div>}
        {isEditing && (
          <CommentForm1
            submitLabel={<DoneIcon />}
            hasCancelButton
            initialText={props.comment.body}
            handleSubmit={(text) => props.updateComment(text, props.comment.id)}
            handleCancel={() => {
              props.setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                props.setActiveComment({
                  id: props.comment.id,
                  type: "editing",
                })
              }
            >
              Sửa
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => props.deleteComment(props.comment.id)}
            >
              Xóa
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment1;
