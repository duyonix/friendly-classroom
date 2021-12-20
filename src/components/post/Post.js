import PostForm from "./PostForm.js";

const Post = ({
  post,
  replies,
  setActivePost,
  activePost,
  updatePost,
  deletePost,
  addPost,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activePost &&
    activePost.id === post.id &&
    activePost.type === "editing";
  const isReplying =
    activePost &&
    activePost.id === post.id &&
    activePost.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(post.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === post.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === post.userId && !timePassed;
  const replyId = parentId ? parentId : post.id;
  const createdAt = new Date(post.createdAt).toLocaleDateString();
  return (
    <div key={post.id} className="post">
      <div className="post-image-container">
        <img src="/user-icon.png" />
      </div>
      <div className="post-right-part">
        <div className="post-content">
          <div className="post-author">{post.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="post-text">{post.body}</div>}
        {isEditing && (
          <PostForm
            submitLabel="Update"
            hasCancelButton
            initialText={post.body}
            handleSubmit={(text) => updatePost(text, post.id)}
            handleCancel={() => {
              setActivePost(null);
            }}
          />
        )}
        <div className="post-actions">
          {canReply && (
            <div
              className="post-action"
              onClick={() =>
                setActivePost({ id: post.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="post-action"
              onClick={() =>
                setActivePost({ id: post.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="post-action"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <PostForm
            submitLabel="Reply"
            handleSubmit={(text) => addPost(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Post
                post={reply}
                key={reply.id}
                setActivePost={setActivePost}
                activePost={activePost}
                updatePost={updatePost}
                deletePost={deletePost}
                addPost={addPost}
                parentId={post.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;


