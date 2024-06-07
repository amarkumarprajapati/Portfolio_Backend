const mongoose = require("mongoose");

let mongooseschama = mongoose.Schema({
  Experience: {
    type: Number,
    required: false,
  },
  Project: {
    type: Number,
    required: false,
  },
  Clients: {
    type: Number,
    required: false,
  },
});

const mongoosemodel = mongoose.model("proatfolio1", mongooseschama);

module.exports = mongoosemodel;
