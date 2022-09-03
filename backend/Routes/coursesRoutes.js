const express = require("express");
const { getCourses, createCourse } = require("../Controllers/courseController");
const routes = new express.Router();

routes.get("/", getCourses);
routes.post("/", createCourse);



module.exports = routes;
