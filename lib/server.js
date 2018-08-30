const http = require("http");
const express = require("express");
const morgan = require("morgan")

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/dashboard", (req, res) => {
  res.send("-- Dashboard --")
});

server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
