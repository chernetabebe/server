const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  password:{
    type: String,
    required: true,
    min: 6,
    max:244,
  },
  Date: {
    type: Date,
    default: Date.now
  }
 
});

module.exports = mongoose.model("Students-Record", bookSchema);
