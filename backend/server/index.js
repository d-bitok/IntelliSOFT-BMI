const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const intellisoftRouter = require("../routes/intellisoft")

app.use(cors());
app.use(bodyParser.json());
app.use("/dbIntelliSOFT", intellisoftRouter)

mongoose.connect("mongodb+srv://dbIntelliSOFT:6us!7zggWkKQ*Pf@cluster0.bchie.mongodb.net/IntelliSOFT-API?retryWrites=true&w=majority", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});



app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});