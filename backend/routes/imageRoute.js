const express = require("express");
const multer = require("multer");
const imageController = require("../controllers/imageController");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("image"), imageController.uploadImage);

module.exports = router;
