import express from "express";
import { Createuser, GetUser,UpdateUser } from "../controllers/user.js";
const routers = express.Router();

routers.post("/create", Createuser);
routers.get("/get", GetUser);
routers.put("/update/:id", UpdateUser);

export default routers;
