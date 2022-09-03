const express = require("express");
const {
  getEvaluationCategories,
  createEvaluationCategories,
} = require("../Controllers/evaluationCategoryController");
const routes = new express.Router();

routes.get("/", getEvaluationCategories);
routes.post("/", createEvaluationCategories);

module.exports = routes;
