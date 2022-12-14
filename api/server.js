const express = require("express");

const server = express();

server.get("/api/users", (req, res) => {
  res.json("users");
});

server.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

module.exports = server;
