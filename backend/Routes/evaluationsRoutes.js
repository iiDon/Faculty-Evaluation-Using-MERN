const express = require("express");
const { getEvaluations, createEvaluation } = require("../Controllers/evaluationController");
const routes = new express.Router();

routes.get("/", getEvaluations);
routes.post("/", createEvaluation);



module.exports = routes;
