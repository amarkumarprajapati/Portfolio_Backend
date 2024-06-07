const express = require("express");
const mongoosemodeluser = require("../schema/userhandle.schame");
const axios = require("axios");
const mongoosemodelall = require("../schema/servicedata.schama");
const mongoosemodelhero = require("../schema/Hero");
const jwt = require("jsonwebtoken");
const secretKey = require("../config/jwt");
const apiresponse = require("../middleware/api.response");
const { v4: uuidv4 } = require("uuid");

const fallbackSecretKey = "h6$RdP2qL@v8#eZuF9&w";

// Ensure the secret key is valid
const validSecretKey =
  typeof secretKey === "string" && secretKey ? secretKey : fallbackSecretKey;

// userlogin
const userEnter = async (req, res) => {
  try {
    const userID = generateUserID();
    const token = jwt.sign({ userID }, validSecretKey, {
      expiresIn: "5050h",
    });
    const entranceTime = new Date().toISOString();
    const userData = {
      userID,
      timeenter: entranceTime,
      totaltimewait: "",
    };

    const newUser = new mongoosemodeluser(userData);
    await newUser.save();
    apiresponse.Created(req, res, token);
  } catch (error) {
    console.error("Error saving user data:", error);
    apiresponse.servererror(req, res);
  }
};

const generateUserID = () => {
  return uuidv4();
};

// add queries
let adddata = async (req, res) => {
  let { name, email, message } = req.body;
  let datatoadd = new mongoosemodeluser({
    name,
    email,
    message,
  });
  let savedata = await datatoadd.save();
  if (!savedata) {
    console.log("error to save");
    return apiresponse.Badresponce(req, res);
  }
  apiresponse.Success(req, res);
};

// get all data
let getdataalldata = async (req, res) => {
  const { Experience, Project, Clients } = req.query;
  let filterdata = {};
  if (Experience) filterdata.Experience = parseFloat(Experience);
  if (Project) filterdata.Project = parseInt(Project);
  if (Clients) filterdata.Clients = parseInt(Clients);
  let getalldata = await mongoosemodeluser.find(filterdata);
  res.status(200).json({
    message: "success",
    getalldata: getalldata,
  });
};

// get hero section data
let getherosection = async (req, res) => {
  let responcedata = await mongoosemodelhero.find();
  res.status(200).json({
    status: "true",
    message: "success",
    data: responcedata,
  });
};

// get service data
let contentdata = async (req, res) => {
  let getresponce = await mongoosemodelall.find();
  if (!getresponce) {
    return res.status(404).json(getdataalldata);
  }
  res.status(200).json({
    status: "true",
    message: "success data received",
    your: getresponce,
  });
};

// download cv
let downloadcv = async (req, res, next) => {
  try {
    const response = await axios.get("https://easyupload.io/anlk4k", {
      responseType: "arraybuffer",
    });
    const pdfContent = response.data;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="downloaded.pdf"'
    );
    res.status(200).send(pdfContent);
  } catch (error) {
    console.error("Error while fetching file:", error);
    res.status(500).json({
      status: "false",
      message: "Internal server error",
    });
  }
};

module.exports = {
  adddata,
  userEnter,
  getdataalldata,
  downloadcv,
  contentdata,
  getherosection,
};
