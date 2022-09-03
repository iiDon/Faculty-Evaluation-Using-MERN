const express = require("express");
const { getFaculties, createFaculty, getFaculty } = require("../Controllers/facultyController");

const routes = new express.Router();

routes.get("/", getFaculties);
routes.get("/:id", getFaculty);
routes.post("/createfaculty", createFaculty);

module.exports = routes;
