const express = require("express");
const fs = require("fs");
const port = 3001;

const server = express();

server.use((req, res, next) => {
  //TODO: Allow cross origin request for local dev environment only
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.get("/", (req, res) => {
  fs.readFile("./src/api/response.json", (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
