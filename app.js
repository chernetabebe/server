const express = require("express");
const app = express();
const mongoose = require("mongoose");
//http = require('http');
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv/config');
const nodemailer = require("nodemailer");


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

// app.use((req, res, next) => {
//   //console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html/');
//   //res.end("hellow world");
//   next();
// });

//sending mail to uses who signed up
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cherulast123@gmail.com",
    pass: "cherulast@54321$67890#"
  }
});

let mailoption = {
  from : "cherulast123@gmail.com",
  to: "ayaaba366@gmail.com",
  subject : "testing",
  text: "it works love nodejs"
}

transporter.sendMail(mailoption, function(err,data){
  if (err){
    console.log("sucess")
  }else{
    console.log("failed")
  }
})





const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`app listening on port of : ${port}!`)
});

