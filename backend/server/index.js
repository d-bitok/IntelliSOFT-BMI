const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://dbIntelliSOFT:6us!7zggWkKQ*Pf@cluster0.bchie.mongodb.net/IntelliSOFT-API?retryWrites=true&w=majority", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});