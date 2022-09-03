const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evaluationSchema = new Schema(
  {
    value: {
      type: Number,
      require: true,
    },
    evaluationCategory_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "EvaluationCategory",
    },
    faculty_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Faculty",
    },
    course_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Course",
    },
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("Evaluation", evaluationSchema);
