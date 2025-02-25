const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "../assets")));

app.get("/bundle.js", (req, res) => res.sendFile(path.resolve(__dirname, "../build/bundle.js")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error!",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
