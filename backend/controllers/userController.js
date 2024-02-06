const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register a new user without OTP and email verification
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm, role, profileImage } =
      req.body;

    // Validate if passwords match
    if (password !== passwordConfirm) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the error is due to duplicate key (email already exists)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }
    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      profileImage,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res
      .status(201)
      .json({ data: savedUser, message: "User Registered Successfully" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login user and return JWT token
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(200).json({ data: user, token, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// API endpoint to get user details (requires authentication)
exports.getUser = async (req, res) => {
  try {
    // Get the user ID from the decoded token attached by the auth middleware
    const userId = req.body.userId;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the user details as a response
    res
      .status(200)
      .json({ data: user, message: "User details retrieved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Update user details
exports.updateUser = async (req, res) => {
  try {
    const { name, email, gender, address, salutationPreference, profileImage } =
      req.body;
    const userId = req.body.userId; // Assuming userId is provided in the request body or can be obtained from the JWT token

    // Find the user by ID
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    user.name = name || user.name;
    // Check if the provided email is different from the current email
    if (email && email !== user.email) {
      user.email = email;
    }
    user.gender = gender || user.gender;
    user.address = address || user.address;
    user.salutationPreference =
      salutationPreference || user.salutationPreference;
    user.profileImage = profileImage || user.profileImage;

    // Save the updated user data
    user = await user.save();

    // Send the updated user details as a response
    res
      .status(200)
      .json({ data: user, message: "User details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
