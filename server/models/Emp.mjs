import mongoose from "mongoose";

const EmpSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: {
    type: String,
    required: true,
    minlength: [6, "password length should be atleast 6 charecter"],
  },
});

const EmpModel = mongoose.model("mytable", EmpSchema);

export default EmpModel;
