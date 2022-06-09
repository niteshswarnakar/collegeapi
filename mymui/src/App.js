import React, { useRef, useState } from "react";
import { Button, Grid, Stack, Box } from "@mui/material";
import { TextField } from "@mui/material";
import Home from "./Home";
import axios from "axios";
import classes from "./App.module.css";
function App() {
  const [students, setStudents] = useState([]);
  let flag = false;
  let prog = useRef();
  let batch = useRef();
  let group = useRef();
  let url = "http://localhost:5000/api/students";
  let requestOption = new URLSearchParams();
  const submitHandler = async (e) => {
    e.preventDefault();

    requestOption.append("prog", prog.current.value);
    requestOption.append("batch", batch.current.value);
    requestOption.append("group", group.current.value);
    console.log("prog ref - ", prog.current.value);

    try {
      let response = await axios.post(url, requestOption);
      let data = await response.data;

      // return data;
      console.log(data);
      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack className={classes.App}>
      <Stack direction="column">
        {!flag && (
          <form className={classes.myform} onSubmit={submitHandler}>
            <TextField
              name="prog"
              type="text"
              label="Program"
              inputRef={prog}
            />
            <TextField
              type="text"
              name="batch"
              label="Batch"
              id="batch"
              inputRef={batch}
            />
            <TextField
              label="Group"
              type="text"
              name="group"
              id="group"
              inputRef={group}
            />
            <Button variant="contained" type="submit" onClick={submitHandler}>
              Fetch Data
            </Button>
          </form>
        )}
      </Stack>
      <Grid container sx={3} spacing={2}>
        {students.map((student, index) => {
          return <Home key={index} student={student} />;
        })}
      </Grid>
    </Stack>
  );
}

export default App;
