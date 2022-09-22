import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <img
        className="image1"
        src="http://nccpindia.org/assets/image/error-404.png"
        alt=""
      ></img>
      <h3 className="error-text">You've to Login First to access this Page</h3>
      <Link to="/Login" className="btn">
        Login
      </Link>
    </div>
  );
};

export default Error;
