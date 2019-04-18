const express = require("express");

const getRepos = require("./api/getRepos");

const server = express();
const port = 3001;

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
  try {
    const response = await getRepos(req.params.name);
    res.json(response);
  } catch (error) {
    res.sendStatus(501);
  }
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
