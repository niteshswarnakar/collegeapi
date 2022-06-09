import React from "react";
import { Grid } from "@mui/material";
import StudentCard from "./components/StudentCard";
const Home = ({ key, student }) => {
  return (
    <Grid item xs={6} md={3} my={2}>
      <StudentCard key={key} student={student} />
    </Grid>
  );
};

export default Home;
