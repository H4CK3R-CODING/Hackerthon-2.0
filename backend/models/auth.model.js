import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: "string",
  },
  password: {
    type: "string",
    min: 8,
  },
  email: {
    type: "string",
    unique: true
  },
});

const User = mongoose.model("user", userSchema);

export default User;
