// Connecting to MongoDB using Mongoose
import { Schema, model } from "mongoose";

// Defining the user schema for MongoDB
const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    job_title: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

export default User;
