import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "rejected") {
      content = "This comment was been hidden public view";
    }
    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }
    return (
      <li key={comment.id} className="list-group-item disabled">
        {content}
      </li>
    );
  });

  return (
    <ul className="list-group" style={{ fontSize: "0.8rem" }}>
      {renderedComments}
    </ul>
  );
};

export default CommentList;
