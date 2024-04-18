const mongoose = require("mongoose");

let mongooseschama = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const mongoosemodel = mongoose.model("newdata", mongooseschama);

module.exports = mongoosemodel;
