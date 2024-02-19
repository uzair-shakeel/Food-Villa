const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const { initializeApp } = require("firebase/app");
const { firebaseConfig } = require("../config/firebase.config");

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(firebaseApp);

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const dateTime = giveCurrentDateTime();

    const storageRef = ref(
      storage,
      `images/${req.file.originalname}-${dateTime}`
    );

    // Create file metadata including the content type
    const metadata = {
      contentType: req.file.mimetype,
    };

    // Upload the file to the bucket storage
    const snapshot = await uploadBytesResumable(
      storageRef,
      req.file.buffer,
      metadata
    );

    // Grab the public URL of the uploaded file
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log(downloadURL);
    console.log("File successfully uploaded.");
    return res.json({
      message: "File uploaded to Firebase Storage",
      name: req.file.originalname,
      type: req.file.mimetype,
      url: downloadURL,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const giveCurrentDateTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
};

module.exports = {
  uploadImage,
};
