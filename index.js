const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const thoughtRoutes = require("./routes/thoughtRoutes");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

const url = "mongodb://localhost:27017";
const dbName = "social-network";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to the MongoDB database
mongoose
  .connect(url, options)
  .then(() => {
    console.log("Connected to MongoDB successfully!");

    // Routes
    app.use("/users", userRoutes);
    app.use("/thoughts", thoughtRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
