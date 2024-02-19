const serviceAccount = require("./../serviceAccountKey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://food-villa-89cbc.appspot.com",
});

const imageController = async (req, res) => {
  try {
    if (req.files && req.files.image) {
      const file = req.files.image;
      const bucket = admin.storage().bucket();
      const metadata = {
        metadata: {
          contentType: file.mimetype,
        },
      };

      const uploadTask = bucket.upload(file.path, {
        metadata: metadata,
      });

      uploadTask
        .then((data) => {
          const fileUrl = `https://storage.googleapis.com/${bucket.name}/${data[0].name}`;
          res.json({
            url: fileUrl,
            public_id: data[0].metadata.id,
          });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: "Failed to upload image to Firebase" });
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
