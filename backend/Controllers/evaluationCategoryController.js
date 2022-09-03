const EvaluationCategory = require("../Models/EvaluationCategory");

const getEvaluationCategories = async (req, res) => {
  try {
    const evaluationCategories = await EvaluationCategory.find({});
    res.status(200).json(evaluationCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createEvaluationCategories = async (req, res) => {
  try {
    // take data from json
    const { name } = req.body;

    //   create new evaluation
    const evaluationCategory = await EvaluationCategory.create({ name });

    // response
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getEvaluationCategories, createEvaluationCategories };
