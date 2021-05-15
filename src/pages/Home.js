import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

const Home = () => {
  const [postsData, setPostsData] = useState(null);
  console.log(postsData);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((response) => {
        setPostsData(response);
      });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {postsData && <Posts postsData={postsData} />}
    </div>
  );
};

export default Home;
