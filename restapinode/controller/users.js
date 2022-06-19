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

export const getUsers = (req, res) => {
  res.send(users);
};

export const getuser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => id == user.id);
  console.log(foundUser);
  console.log("user id from url is ", id);
  res.send(foundUser);
};

export const adduser = (req, res) => {
  const userId = uuidv4();
  const newuser = { ...req.body, id: userId };
  users.unshift(newuser);
  console.log(newuser);
  res.send(users);
};
