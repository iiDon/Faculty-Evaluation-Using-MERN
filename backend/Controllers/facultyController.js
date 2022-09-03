const Faculty = require("../Models/Faculty");
const Comment = require("../Models/Comment");
const { default: mongoose } = require("mongoose");
const getFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find().populate("major_id");
    res.status(200).json(faculties);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createFaculty = async (req, res) => {
  try {
    const { name, photo, major_id } = req.body;
    await Faculty.create({ name, photo, major_id });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFaculty = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "لا يوجد معرف" });
  }

  const faculty = await Faculty.findById(id).populate("major_id")

  if (!faculty) {
    return res.status(404).json({ error: "لا يوجد معرف" });
  } 

  res.status(200).json(faculty)
};

module.exports = { getFaculties, createFaculty, getFaculty };
