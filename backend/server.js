const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const cors = require("cors"); // cors middleware allow cross origin request like frontend and backend run on the different ports that'why we use cors to prevent from block
const mongoose = require("mongoose"); // mongoose connect node.js to mongodb and control the mongodb through Schema,Model,Query
const feedbackRoutes = require("./routes/feedbackRoutes");
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const localOrigin = /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}):30173$/;

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || localOrigin.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json()); // convert request body into json
// ===== Routes =====
app.use("/api/feedback", feedbackRoutes);
// ===== Test Route =====
app.get("/", (req, res) => {
  res.send("StudyLaneX Backend Testing 🚀");
});
// ===== Contact Route =====
app.use("/api/contact", contactRoutes);
// ===== MongoDB Connection =====
const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log("❌ MONGO_URI missing in .env");
      return;
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
  }
};

startServer();
// app.use kisi route pregix ko router file ke sath attach krta hai
