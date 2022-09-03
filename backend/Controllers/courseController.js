const Course = require("../Models/Course");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createCourse = async (req, res) => {
  try {
    const { name } = req.body;
    const course = await Course.create({ name });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCourses, createCourse };
