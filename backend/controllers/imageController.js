const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "mern-practice",
  api_key: "748289359289231",
  api_secret: "Qz_0OA9kSwfu0sV5DVCYet2TfHc",
});

const imageController = async (req, res) => {
  try {
    if (req.files && req.files.image) {
      const result = await cloudinary.uploader.upload(req.files.image.path);
      res.json({
        url: result.secure_url,
        public_id: result.public_id,
      });
    } else {
      res.status(400).json({ error: "No image file provided" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { imageController };
