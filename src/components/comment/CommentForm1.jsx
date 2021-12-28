import React from 'react'
import { useState } from "react";
import { pathImgFromIndex } from "../../utils/constants";
import { Avatar } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
function CommentForm1(props) {
   
  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
      <div className="comment-form-display">
      <Avatar
        src={pathImgFromIndex + "meo_ngu_ngoc.jpg"} 
        //TODO: load avatar user
        alt="avatar"
        sx={{ width: 40, height: 40 }}                  
      />
      <textarea
        class="form-control"
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {props.submitLabel}
          </button>
            {props.hasCancelButton && (
              <button
                type="button"
                className="comment-form-button comment-form-cancel-button"
                onClick={props.handleCancel}>
              {<CancelIcon/>}
              </button>
        )}
      </div>
    </form>
    </div>
  )
}

export default CommentForm1;
