const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.get("/bundle.js", (req, res) => res.sendFile(path.resolve(__dirname, "../build/bundle.js")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
