const express = require("express");
const app = express();

app.get("/", function(req, res)  {
  res.send('Hello from the server!');
});

// const PORT = process.env.PORT || 3001;
const PORT = 3001;
app.listen(PORT, function() {
  console.log(`Server listening on ${PORT}`);
});
