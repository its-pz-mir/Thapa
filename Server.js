const express =  require("express");
const app = express();
require('dotenv').config();
const dbConnect = require("./db/index");

dbConnect();


const port  =  process.env.PORT;

app.get("/", (req, res)=>{
    res.status(200).json({Message:"Hello world"});
})

app.listen(port,()=>{
    console.log("Server has been created");
})