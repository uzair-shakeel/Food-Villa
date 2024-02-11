const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Optional chaining operator for safer access
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Token Verification Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Token Server Error",
    });
  }
};

module.exports = protect;
