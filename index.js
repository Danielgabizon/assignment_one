const express = require("express");
const app = express();
const dotevn = require("dotenv").config();
const port = process.env.PORT;
const mongoose = require("mongose");
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected dto database");
});
const posts_routes = require("./routes/posts_routes");
app.use("/posts", posts_routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
