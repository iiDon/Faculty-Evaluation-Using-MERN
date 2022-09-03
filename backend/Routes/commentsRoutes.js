const express = require("express");
const { getComments, createComments } = require("../Controllers/commentController");
const routes = new express.Router();

routes.get("/", getComments);
routes.post("/", createComments);



module.exports = routes;
