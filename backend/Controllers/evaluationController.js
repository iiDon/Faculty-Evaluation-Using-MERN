const Evaluation = require("../Models/Evaluation");

const getEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find({})
      .populate("evaluationCategory_id", "_id, name")
      .populate("faculty_id", "_id")
      .populate("course_id")
      .populate("user_id", "_id")
    res.status(200).json(evaluations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createEvaluation = async (req, res) => {
  try {
    // take data from json
    const { value, evaluationCategory_id, faculty_id, course_id, user_id } =
      req.body;

    //   create new evaluation
    const evaluation = await Evaluation.create({
      value,
      evaluationCategory_id,
      faculty_id,
      course_id,
      user_id,
    });

    // response
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getEvaluations, createEvaluation };
