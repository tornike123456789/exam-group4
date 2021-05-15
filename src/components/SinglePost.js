import React from "react";

const SinglePost = ({ postData }) => {
  return (
    <div>
      <h2> title: {postData.title}</h2>
      <text>body: {postData.body}</text>
    </div>
  );
};

export default SinglePost;
