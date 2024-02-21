import mongoose from "mongoose";
import Tasks from "./Tasks.js";
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    Tasks :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tasks',
    }],
    date: {
        type: Date,
        default: Date.now(),
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;