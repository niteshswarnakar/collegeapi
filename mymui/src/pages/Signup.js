import React, { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import classes from "../styles/Signup.module.css";
const Signup = () => {
  let username = useRef();
  let password = useRef();
  let password1 = useRef();
  return (
    <div className={classes.signupdiv}>
      <div className={classes.signup}>
        <h1>User Signup</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(username.current.value, " -  ", password.current.value);
            username.current.value = "";
            password.current.value = "";
            password1.current.value = "";
          }}
          className={classes.form}
        >
          <div className="username">
            <Input
              label="Username"
              type="text"
              myref={username}
              name="username"
            />
          </div>

          <div className="password">
            <Input
              label="Password"
              type="password"
              myref={password}
              name="password"
            />
          </div>

          <div className="password1">
            <Input
              label="Confirm password"
              type="password"
              myref={password1}
              name="password1"
            />
          </div>
          <Button type="submit">Signup</Button>
        </form>
        <div className={classes.forgot}>Forgot password ?</div>
      </div>
    </div>
  );
};

export default Signup;
