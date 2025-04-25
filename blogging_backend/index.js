import express from "express";

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("I am Testing U")
})

const port= process.env.PORT || 5000
app.listen(port,()=>{
    console.log("I am console, Testing You");
    
})