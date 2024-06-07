const jwt = require("jsonwebtoken");

const fallbackSecretKey = "h6$RdP2qL@v8#eZuF9&w";

const tokken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    const errorResponse = {
      status: false,
      message: "No authentication token provided",
    };
    return res.status(401).json(errorResponse);
  }
  try {
    const decode = jwt.verify(token, fallbackSecretKey);
    const userid = decode.userid;
    req.userid = userid;
    next();
  } catch (error) {
    const errorMessage = {
      status: false,
      message: "Error in token authentication",
    };
    return res.status(403).json(errorMessage);
  }
};

module.exports = tokken;

module.exports = "skfbhksgb237r6343f3i75^$%^&";
