const express = require("express");
const router = express.Router();
const Book = require("../models/book");


//updating existing book
router.patch("/:id", async (req, res) => {
    try {
      const updatebook = await Book.updateOne(
        { _id: req.params.id },
        { $set: { email: req.body.email } }
      );
      res.json(updatebook);
      //res.json({ message: "update succsesfully.." });
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  module.exports = router;