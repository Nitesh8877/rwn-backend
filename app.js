const mongoose=require("mongoose");
const express=require('express');
const dbConfig=require("./configs/db.config")
const app=express();
const cors=require('cors');
app.use(cors());


mongoose.connect(dbConfig.DB_URL);
app.use(express.json());
const db=mongoose.connection
db.on("error",()=>console.log("Can't connect to DB"));
db.once("open",()=>
{
    console.log("Connected to mongo DB");

})

require('./routes/user.route')(app);
require('./routes/product.route')(app);
app.listen(7500,()=>console.log("server is started port number: 7500"))
