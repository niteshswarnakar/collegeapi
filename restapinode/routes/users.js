import express from "express";
// import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [
  {
    prog: "BCT",
    batch: "075",
    group: "C",
    roll: "058",
    name: "nitesh swarnakar",
    id: "1",
  },
  {
    prog: "BCT",
    batch: "075",
    group: "C",
    roll: "058",
    name: "milan shrestha",
    id: "2",
  },
  {
    prog: "BCT",
    batch: "075",
    group: "C",
    roll: "058",
    name: "roshan subedi",
    id: "3",
  },
  {
    prog: "BCT",
    batch: "075",
    group: "C",
    roll: "058",
    name: "nischal shakya",
    id: "4",
  },
];

// router.get("/", async (req, res, next) => {
//   let url = "http://assmnt.pcampus.edu.np/api/students/";
//   let requestOption = new URLSearchParams();

//   requestOption.append("prog", "BCT");
//   requestOption.append("batch", "075");
//   requestOption.append("group", "C");

//   try {
//     let response = await fetch(url, {
//       method: "POST",
//       body: requestOption,
//     });
//     let data = await response.json();
//     console.log("data recieved - ", { data });
//     res.send(data);
//   } catch (err) {
//     console.log(err);
//   }
//   res.send(data);
// });
router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => id == user.id);
  console.log(foundUser);
  console.log("user id from url is ", id);
  res.send(foundUser);
});

router.post("/", (req, res) => {
  const userId = uuidv4();
  const newuser = { ...req.body, id: userId };
  users.unshift(newuser);
  console.log(newuser);
  res.send(users);
});

export default router;
