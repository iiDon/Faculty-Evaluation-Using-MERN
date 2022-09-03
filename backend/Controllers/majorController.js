const Major = require("../Models/Major");

const getMajors = async (req, res) => {
  try {
    const majors = await Major.find({});
    res.status(200).json(majors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createMajor = async (req, res) => {
  try {
    const { name } = req.body;
    const major = await Major.create({ name });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getMajors, createMajor };
