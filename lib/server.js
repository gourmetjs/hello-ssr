const path = require("path");
const http = require("http");
const express = require("express");
const morgan = require("morgan")
const gourmet = require("@gourmet/client-lib");

const stage = "local";
const clientDir = path.join(__dirname, `../.gourmet/${stage}/client`);
const serverDir = path.join(__dirname, `../.gourmet/${stage}/server`);

const app = express();

app.use(morgan("dev"));

app.use("/s/", express.static(clientDir));

app.get("*", (req, res, next) => {
  gourmet.render(req, res, next, {
    serverDir,
    entrypoint: "main"
  });
});

server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
