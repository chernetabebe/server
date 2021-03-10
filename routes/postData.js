const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");


router.post("/", async (req, res) => {
     //lets hash the password
     //generate salt of 10 
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password, salt);

     const book = new Book({

        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
  });


  try {
    const savedData = await book.save();
    //res.json(savedData);
  //console.log(savedData);

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
  to: req.body.email,
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





  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
