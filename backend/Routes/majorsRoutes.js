const express = require("express");
const { getMajors, createMajor } = require('../Controllers/majorController')
const routes = new express.Router();


routes.get('/', getMajors)

routes.post('/', createMajor)

module.exports = routes;
