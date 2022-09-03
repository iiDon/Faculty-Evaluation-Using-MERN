const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      immitable: true, // Can not change date ever
      default: () => Date.now(),
    },
    faculty_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Faculty",
    },
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    course_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Course"
    }
  },
  { timeseries: true }
);

module.exports = mongoose.model("Comment", commentSchema);
