const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facultySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      default: "",
    },
    major_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Major"
    }
  },

  { timeseries: true }
);

module.exports = mongoose.model("Faculty", facultySchema);
