import RequestModel from "../models/clientrequest.js";
import mongoose from "mongoose";
import axios from "axios";

// * fetch data from collegeapi and send as response
export const saveRequest = async (req, res) => {
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
};

export const getRequestedFormData = async (req, res) => {
  let requestlist = await RequestModel.find();
  console.log("resquest list - ", requestlist);
  res.send(requestlist);
};
