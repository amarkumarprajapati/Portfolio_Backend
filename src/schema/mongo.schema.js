const mongoose = require("mongoose");

let mongooseschama = mongoose.Schema({
  name: {
    type: String,
    require: false,
  },
  classname: {
    type: String,
    require: false,
  },
  select: {
    type: String,
    require: false,
    enum: ["true", "false"],
  },
  roll: {
    type: Number,
    require: false,
  },
});

const mongoosemodel = mongoose.model("newdata", mongooseschama);

module.exports = mongoosemodel;
