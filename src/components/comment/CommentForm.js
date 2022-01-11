import { useState } from "react";
import { pathImgFromIndex } from "../../utils/constants";
import { Avatar } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    handleSubmit(text);
    setText("");

  };
  return (
    <form onSubmit={onSubmit}>
      <div className="comment-form-display">
        <Avatar
          src={pathImgFromIndex + "hien_vi.jpg"}
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
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-button comment-form-cancel-button"
            onClick={handleCancel}
          >
            {<CancelIcon />}
          </button>
        )}
      </div>
    </form>

  );
};

export default CommentForm;
