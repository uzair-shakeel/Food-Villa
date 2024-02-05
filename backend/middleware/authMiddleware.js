const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(200).send({
          message: "Token Verification Failed",
          success: false,
        });
      } else {
        req.body.userId = decode.userId;

        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Token Server Error",
    });
  }
};

module.exports = protect;
