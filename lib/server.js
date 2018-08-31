const path = require("path");
const http = require("http");
const express = require("express");
const morgan = require("morgan")
const gourmet = require("@gourmet/client-lib");
const serverArgs = require("@gourmet/server-args");

const args = serverArgs(process.argv.slice(2));

const app = express();

app.use(morgan("dev"));

if (args.watch) {
  const watch = require("@gourmet/watch-middleware")(args, gourmet);
  app.use(watch);
} else {
  app.use(args.staticPrefix, express.static(args.clientDir));
}

app.get("*", (req, res, next) => {
  gourmet.render(req, res, next, {
    serverDir: args.serverDir,
    entrypoint: "main"
  });
});

server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
