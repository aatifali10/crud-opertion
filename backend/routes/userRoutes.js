import express from "express";
import {
  Createuser,
  DeleteUser,
  GetUser,
  UpdateUser,
} from "../controllers/user.js";
const routers = express.Router();

routers.post("/create", Createuser);
routers.get("/get", GetUser);
routers.put("/update/:id", UpdateUser);
routers.delete("/delete/:id", DeleteUser);

export default routers;
