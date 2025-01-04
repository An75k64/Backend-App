require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import Routes
const collegeRoutes = require('./routes/collegeRoutes');
const companyRoutes = require("./routes/companyRoutes");
const studentRoutes = require("./routes/studentRoutes");
const hackathonRoutes = require("./routes/hackathonRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
const internshipRequestRoutes = require("./routes/internshipRequestRoutes");
const jobRoutes = require("./routes/jobRoutes");
const offCampusRequestRoutes = require("./routes/offCampusRequestRoutes");
const onCampusRequestRoutes = require("./routes/onCampusRequestRoutes");
const createJobRoutes = require("./routes/createJobRoutes");
const collegeServiceRoutes = require("./routes/collegeServiceRoutes");
const companyServiceRoutes = require("./routes/companyServiceRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use("/api/auth", authRoutes);
app.use('/api/colleges', collegeRoutes);
app.use("/api/companies", companyRoutes);
app.use('/api/students', studentRoutes);
app.use("/api/hackathons", hackathonRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/internship-requests", internshipRequestRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/offcampusrequests", offCampusRequestRoutes);
app.use("/api/oncampusrequests", onCampusRequestRoutes);
app.use("/api/jobs", createJobRoutes);
// Use the collegeService routes
app.use('/api/college-services', collegeServiceRoutes);
// Middleware to handle company services routes
app.use("/api/company-services", companyServiceRoutes);


// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));



// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
