import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import apiRoutes from "./routes/api.js";
import mongoose from "mongoose";

const app = express();

// * connection to mongodb
mongoose.connect("mongodb://localhost/nodedatabase");

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port : ", PORT);
});

app.get("/", (req, res) => {
  const routes = ["GET /", "GET /users", "GET /user:id"];
  res.send(routes);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.use("/api", apiRoutes);

app.use("/users", userRoutes);
