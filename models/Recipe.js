const mongoose = require("mongoose");

const { Schema } = mongoose;

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = {
  Recipe,
  recipeSchema,
};
