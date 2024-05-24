import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmpModel from "./models/Emp.mjs";

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
      res.json("No record exists");
    }
  });
});

app.post("/register", (req, res) => {
  EmpModel.create(req.body)
    .then((mytable) => res.json(mytable))
    .catch((err) => res.json(err));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("server is running");
});
