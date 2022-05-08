const path = require("path");
const express = require("express");

const app = express(); // create express app
const port = 3000

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
