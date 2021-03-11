const express = require("express");
const router = express.Router();
const Book = require("../models/book");


router.get("/", async (req, res) => {

    try {
      const fetchedbooks = await Book.find();
     // console.log(fetchedbooks);
      res.json(fetchedbooks);
    } catch (err) {
      res.json({ message: err });
    }
  });

  module.exports = router;