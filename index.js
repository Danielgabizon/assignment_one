// Import the express module, which allows you to create a web server.
const express = require("express");

// Create an instance of an Express application (this is the main object that handles routing, middleware, etc.)
const app = express();

// Load environment variables from a .env file using the dotenv package.
const dotevn = require("dotenv").config();

// Access the PORT value from the environment variables (this will be used for the server to listen on)
const port = process.env.PORT;

// Import the mongoose library to interact with MongoDB (used for handling database operations).
const mongoose = require("mongoose");

// Connect to the MongoDB database using the connection string from the environment variables (DB_CONNECT).
mongoose.connect(process.env.DB_CONNECT);

// Access the mongoose connection to check for success or errors during the connection.
const db = mongoose.connection;

// If there is an error with the database connection, log it to the console.
db.on("error", (err) => {
  console.error("Error connecting to the database", err);
});

// Once the connection to the database is successfully established, log a success message.
db.once("open", () => {
  console.log("Successfully connected to the database");
});

// Import the routes for posts from the routes/posts_routes.js file.
const posts_routes = require("./routes/posts_routes");

// Use the imported routes for any URL starting with "/posts". This will route the requests to the appropriate handlers in posts_routes.js.
app.use("/posts", posts_routes);

// Start the Express server, listening on the port defined by the environment variable.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
