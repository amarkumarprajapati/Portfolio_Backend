const jwt = require("jsonwebtoken");

var secratekey = "shgdvcs6v4s68fv4sv46f8f";

const tokken = (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    let token = {
      status: false,
      message: "no authentication",
    };
    return res.status(401).json(token);
  }
  try {
    let decode = jwt.verify(token, secratekey);
    let userid = decode.userid;
    req.userid = userid;
    next();
  } catch (error) {
    let errormessage = {
      status: false,
      message: "error in tokken",
    };
    return res.status(403).json(errormessage);
  }
};
module.exports = tokken;
