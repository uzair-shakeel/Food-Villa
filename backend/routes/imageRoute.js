const express = require("express");
const ExpressFormidable = require("express-formidable");
const router = express.Router();
const { imageController } = require("../controllers/imageController.js");

router.post(
  "/upload",
  ExpressFormidable({
    uploadDir: "./temp",
  }),
  imageController
);

module.exports = router;
