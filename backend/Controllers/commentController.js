const Comment = require("../Models/Comment");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("faculty_id")
      .populate("user_id", "_id")
      .populate("course_id");
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createComments = async (req, res) => {
  try {
    const { content, faculty_id, user_id, course_id } = req.body;
    const comment = await Comment.create({
      content,
      faculty_id,
      user_id,
      course_id,
    });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getComments, createComments };
