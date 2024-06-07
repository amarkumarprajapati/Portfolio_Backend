let apiresponse = {};

apiresponse.Success = async (req, res) => {
  res.status(200).json({
    status: "true",
    message: "OK"
  });
};

apiresponse.Created = async (req, res) => {
  res.status(201).json({
    status: "true",
    message: "Created"
  });
};

apiresponse.Success204 = async (req, res) => {
  res.status(204).send();
};

apiresponse.Badresponce = async (req, res) => {
  res.status(400).json({
    status: "false",
    message: "Bad Request"
  });
};

apiresponse.Unauthorized = async (req, res) => {
  res.status(401).json({
    status: "false",
    message: "Unauthorized"
  });
};

apiresponse.Notfound = async (req, res) => {
  res.status(404).json({
    status: "false",
    message: "Not Found"
  });
};

apiresponse.servererror = async (req, res) => {
  res.status(500).json({
    status: "false",
    message: "Internal Server Error"
  });
};

module.exports = apiresponse;
