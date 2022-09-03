const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evaluationCategorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("EvaluationCategory", evaluationCategorySchema);
