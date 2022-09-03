const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const majorSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("Major", majorSchema);
