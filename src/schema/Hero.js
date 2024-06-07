const mongoose = require("mongoose");

let heroschema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  designation: {
    type: String,
    required: false,
  },
  details: {
    type: String,
    required: false,
  },
});

const mongoosemodelhero = mongoose.model("hero", heroschema);

module.exports = mongoosemodelhero;
