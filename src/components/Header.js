import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("access_token");
    history.push("/login");
  };
  const renderHeaderLinks = () => {
    if (localStorage.getItem("access_token")) {
      return (
        <div style={{ marginBottom: "50px" }}>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/comments">Comments</Link>
          <br></br>
          <button onClick={logOut}>Log out</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  return renderHeaderLinks();
};

export default Header;
