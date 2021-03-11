const express = require("express");
const router = express.Router();
const Book = require("../models/book");


router.delete("/:postid", async (req, res) => {

    try {
      const removedbook = await Book.remove({ _id: req.params.postid });
      res.json(removedbook);
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  

  module.exports = router;