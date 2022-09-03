const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("Course", courseSchema);
