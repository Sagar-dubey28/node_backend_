import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("I am server.");
});
app.listen(5000,()=>{
    console.log("Hellow server is running at 5000.");
    
})
