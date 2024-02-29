//server create
const express = require("express");
const app = express();


require("dotenv").config;

const PORT = process.env.PORT || 3000

// middleware for parse the json body
app.use(express.json());

const blog = require("./routes/blog");

//mount to the path
app.use("/api/v1",blog);

//connectio to the database

const connectWithDb = require("./config/database");
connectWithDb();

// start the server 
app.listen(PORT,()=>{
    console.log(`app is running succesfully ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is my Home Page Baby</h1>`)

})