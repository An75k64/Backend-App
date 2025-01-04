const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();
const upload = require("../middleware/upload");

// Register route
router.post("/register", upload.single("resume"), register);


// Login Route
router.post("/login", login);

module.exports = router;
