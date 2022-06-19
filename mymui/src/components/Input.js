import React from "react";
import classes from "../styles/Input.module.css";
const Input = ({ label, type, name, myref }) => {
  return (
    <div className={classes.inputbox}>
      <label className={classes.mylabel} htmlFor={name}>
        {label}
      </label>
      <input
        ref={myref}
        className={classes.myinput}
        id={name}
        type={type}
        name={name}
      />
    </div>
  );
};

export default Input;
