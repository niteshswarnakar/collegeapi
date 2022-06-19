import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={classes.headerdiv}>
      <div className={classes.header}>
        <div className={classes.left}>
          <p>Logo</p>
        </div>
        <div className={classes.right}>
          <Link style={{ textDecoration: "none", color: "#eee" }} to="/">
            Home
          </Link>
          <Link style={{ textDecoration: "none", color: "#eee" }} to="/">
            Dashboard
          </Link>
          <Link style={{ textDecoration: "none", color: "#eee" }} to="/signup">
            Sign Up
          </Link>
          <Link style={{ textDecoration: "none", color: "#eee" }} to="/signup">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
