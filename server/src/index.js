const express = require("express");
const getRepos = require("./api/getRepos");
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

server.get("/api/:name", async (req, res) => {
  const response = await getRepos(req.params.name);
  res.json(response);
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
