const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmpModel = require("./models/Emp");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/pritamdb");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmpModel.findOne({ email: email }).then(user => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record exist");
    }
  });
});

app.post("/register", (req, res) => {
  EmpModel.create(req.body)
    .then((mytable) => res.json(mytable))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
