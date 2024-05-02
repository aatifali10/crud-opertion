import express from "express";
import routers from "./routes/userRoutes.js";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use(cors());
const PORT = 5000;

app.use("/api", routers);
mongoose
  .connect("mongodb://localhost:27017/crud")
  .then((res) => console.log(`mongodb connected successfully`));

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
