const express = require("express");
const ExpressFormidable = require("express-formidable");
const router = express.Router();
const { imageController } = require("../controllers/imageController.js");
const cors = require("cors");

router.post(
  cors(),
  "/upload",
  ExpressFormidable({
    uploadDir: "./temp",
  }),
  imageController
);

module.exports = router;
