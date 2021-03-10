const express = require("express");
const router = express.Router();
const Book = require("../models/book");



//getting one book
router.get("/:id", async (req, res) => {
  try {
    const books = await Book.findById(req.params.id);
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});



module.exports = router;