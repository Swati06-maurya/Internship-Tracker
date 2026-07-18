const internshipRoutes =
require("./routes/internshipRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(
    "/api/internships",
    internshipRoutes
);

app.get("/", (req, res) => {
    res.send("🚀 Internship Tracker Backend is Running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});