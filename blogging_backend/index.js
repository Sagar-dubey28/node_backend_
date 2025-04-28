import express from "express";
import connectDB from "./src/config/db.js";
import blogRoute from "./src/routes/blog.routes.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/api/blog", blogRoute);

app.get("/", (req, res) => {
  res.send("I am Testing U");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("I am console, Testing You");
});
