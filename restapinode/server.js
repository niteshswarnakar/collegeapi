import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import mongoose from "mongoose";
import axios from "axios";
const app = express();
import RequestModel from "./models/clientrequest.js";

mongoose.connect("mongodb://localhost/nodedatabase");
// * connection to mongodb

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

// * create data in mongodb database
app.post("/api/students", async (req, res) => {
  console.log("req.body is - ", req.body);
  const formData = new URLSearchParams();
  formData.append("prog", req.body.prog);
  formData.append("batch", req.body.batch);
  formData.append("group", req.body.group);
  try {
    const savedRequest = await RequestModel.create({
      prog: req.body.prog,
      batch: req.body.batch,
      group: req.body.group,
      user: "thanos",
    });
    console.log("saved request => ", savedRequest);
    let response = await axios.post(
      "http://assmnt.pcampus.edu.np/api/students/",
      formData,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = response.data;
    // console.log(data);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

//* read data from mongodb database
app.get("/api/requestlist", async (req, res) => {
  let requestlist = await RequestModel.find();
  console.log("resquest list - ", requestlist);
  res.send(requestlist);
});

app.get("/api/modify", async (req, res) => {
  const updatedRequest = await RequestModel.updateOne(
    {
      user: "thanos",
    },
    {
      $set: {
        user: "nitesh swarnakar",
      },
    }
  );

  res.send(updatedRequest);
});

app.use("/users", userRoutes);
