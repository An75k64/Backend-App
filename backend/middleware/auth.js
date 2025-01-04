const jwt = require("jsonwebtoken");

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    // Return immediately if no token is provided
    res.status(401).json({ message: "Access denied" }); // Just send the response, no need for `next()`
    return; // Exit the function early after sending a response
  }

  try {
    // Decode the token with the provided JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user information to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    // Return immediately if the token is invalid
    res.status(400).json({ message: "Invalid token", error: err.message }); // Send the response
    return; // Exit the function after sending a response
  }
};

module.exports = verifyToken;
