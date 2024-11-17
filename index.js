const express = require("express");
const app = express();
const dotevn = require("dotenv").config();
const port = process.env.PORT;

const mongoose = require("mongoose");
const connectToDatabase = async () => {
  try {
    // Attempt to connect to the database
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Successfully connected to the databaseeeeeeeeeeeeeeee");
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
};
connectToDatabase();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const posts_routes = require("./routes/posts_routes");
app.use("/posts", posts_routes);

// Start the Express server, listening on the port defined by the environment variable.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
