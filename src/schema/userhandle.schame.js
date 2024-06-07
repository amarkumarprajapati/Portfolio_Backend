const mongoose = require("mongoose");

let mongooseschama = mongoose.Schema({
  userID: {
    type: String,
    required: false,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  timeenter: {
    type: String,
    required: false,
  },
  timeenter: String,
  totaltimewait: Number,
});

const mongoosemodeluser = mongoose.model("proatfolios", mongooseschama);

module.exports = mongoosemodeluser;
