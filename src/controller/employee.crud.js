let express = require("express");
let mongoosemodel = require("../schema/mongo.schema");

// add
let adddata = async (req, res) => {
  let { name, classname, select, roll } = req.body;
  let datatoadd = new mongoosemodel({
    name,
    classname,
    select,
    roll,
  });
  let savedata = await datatoadd.save();
  if (!savedata) {
    console.log("error to save");
    return res.status(400).json({
      message: "error",
      savedata: savedata,
    });
  }
  res.status(200).json({
    message: "success",
    savedata: savedata,
  });
};

let updateddata = async (req, res) => {
  let { id } = req.params;
  let { name, classname, roll } = req.body;
  let datatoupate = await mongoosemodel.findByIdAndUpdate(
    id,
    {
      name,
      classname,
      roll,
    },
    { new: true }
  );
  if (!datatoupate) {
    console.log("error");
    return res.status(404).json({
      message: "updateerror",
      datatoupate: datatoupate,
    });
  }
  res.status(200).json({
    message: "succes",
    datatoupate: datatoupate,
  });
};

// delete

let deletedata = async (req, res) => {
  let { id } = req.params;
  let deleted = await mongoosemodel.findByIdAndDelete(id);
  if (!deleted) {
    console.log("error");
    return res.status(404).json({
      message: "error",
      deleted: deleted,
    });
  }
  res.status(200).json({
    message: "success",
    deleted: deleted,
  });
};

// get
let getdata = async (req, res) => {
  let getalldata = await mongoosemodel.find();
  res.status(200).json({
    message: "success",
    getalldata: getalldata,
  });
};

// getsingle
let getsingledata = async (req, res) => {
  let { id } = req.params;
  let getsingleddata = await mongoosemodel.findById(id);
  res.status(200).json({
    message: "single data",
    getsingleddata: [getsingleddata],
  });
};

module.exports = {
  adddata,
  getdata,
  updateddata,
  getsingledata,
  deletedata
};
