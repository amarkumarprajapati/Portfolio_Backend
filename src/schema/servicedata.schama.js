const mongoose = require("mongoose");

let mongooseschamaall = mongoose.Schema({
  skills: {
    type: String,
    required: false,
  },
  descriptions: {
    type: String,
    required: false,
  },
  
});

const mongoosemodelall = mongoose.model("contentsata", mongooseschamaall);

module.exports = mongoosemodelall;
