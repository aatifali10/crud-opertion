import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);
export default UserModel;
