import cookieParser from "cookie-parser";
import express from "express";
import Authroutes from "./src/routes/auth.routes.js";
import connectDB from "./src/config/db.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", Authroutes);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("i am server");
});
