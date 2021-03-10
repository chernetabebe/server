const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const bcrypt = require('bcryptjs');



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
    res.json(savedData);
  console.log(savedData);







  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
