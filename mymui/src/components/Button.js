import React from "react";
import classes from "../styles/Button.module.css";
const Button = ({ mytype, children }) => {
  return (
    <div className={classes.buttonbox}>
      <button className={classes.mybutton} type={mytype}>
        {children}
      </button>
    </div>
  );
};

export default Button;
