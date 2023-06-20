import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();
app.get("/", (req, res) => {
  res.send("API IS RUNNING 200 OK");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
