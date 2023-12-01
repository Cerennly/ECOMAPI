//main file
//console.log("my senior") this nodemon debuggin star : nodemon setup tryin to node index.js on terminal

const { error } = require("console");
const express = require("express");
const app = express();
const mongoose =require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./router/usere");
const mainRoute = require("./router/mainauth");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("mongbdokasko"))
.catch((err)=>{console.log(err)
});


//app.get("/api/test", ()=>{
//    console.log("testsuccesfulasko");
//}); --- invakid for app use because of router

app.use(express.json());
app.use("/api/auth", mainRoute);
//app.use("/api/user", userRoute);


app.listen(process.env.PORT || 5000,  ()=> {
    console.log("runningggg");
});
