import UserModel from "../models/user.js";

const Createuser = async (req, res) => {
  try {
    const { name, email, lastName, phone } = req.body;
    const NewUser = new UserModel({ name, email, lastName, phone });
    await NewUser.save();
    res
      .status(200)
      .json({ success: true, message: "user created successfully", NewUser });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal servere error", error });
  }
};
const GetUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found", user });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal servere error", error });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    const UpdatedUser = await UserModel.findByIdAndUpdate(UserId, req.body, {
      new: true,
    });
    if (!UpdatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      UpdatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal servere error", error });
  }
};
// delet user ap
const DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletuser = await UserModel.findByIdAndDelete(userId);
    if (!deletuser) {
      return res
        .status(404)
        .json({ success: false, message: "user Not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "user Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { Createuser, GetUser, UpdateUser, DeleteUser };
