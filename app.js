const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();



app.use(express.urlencoded({extended: false}))


//extended middleweres
app.use(cors());
app.use(bodyParser.json());



//routes for posting data
const postData = require("./routes/postData");
app.use("/books", postData);
//routes for getting all date
const getData = require("./routes/getData");
app.use("/books", getData);
//routes to get data by its id
const getById = require("./routes/getById");
app.use("/books", getById);
//routes for updating data
const updateData = require("./routes/updateData");
app.use("/books", updateData);
//routes for deleting data
const deleteData = require("./routes/deleteData");
app.use("/books", deleteData);

//mongoose connection

mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true },
   (err,result) => { 
     if(err){
       console.log(err)
     }else
  console.log("mongodb connected successfully...!")
   }
);

//serving static files
app.use(express.static("public"));



const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`app listening on port of : ${port}!`)
});

