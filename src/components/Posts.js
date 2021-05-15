import React from "react";

import SinglePost from "./SinglePost";

const Posts = ({ postsData }) => {
  const renderPosts = () => {
    if (postsData) {
      console.log(postsData);
      return postsData.map((item) => {
        return <SinglePost key={item.id} postData={item} />;
      });
    } else {
      return <h1>Loading...</h1>;
    }
  };
  return <div>{renderPosts()}</div>;
};

export default Posts;
