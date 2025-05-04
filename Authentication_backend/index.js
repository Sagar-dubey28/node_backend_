import cookieParser from "cookie-parser";
import express from "express";
import Authroutes from "./src/routes/auth.routes.js";
import connectDB from "./src/config/db.js";

const app = express();

//Build in middleware
app.use(express.json());

//Third party midddleware
app.use(cookieParser());

//Mapping and routing
app.use("/api/auth", Authroutes);

//connection to database
connectDB();

//server port.
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("i am server");
});
