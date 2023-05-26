const { Recipe: RecipeModel } = require("../models/Recipe");

const serviceController = {
  create: async (req, res) => {
    try {
      const recipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        method: req.body.method,
        image: req.body.image,
      };

      const response = await RecipeModel.create(recipe);

      res.status(201).json({
        response,
        msg: "Que delícia! Sua receita já foi incluída no nosso caderninho!",
      });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  getAll: async (req, res) => {
    try {
      const allRecipes = await RecipeModel.find();

      res.json(allRecipes);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  getSingle: async (req, res) => {
    try {
      const id = req.params.id;
      const recipe = await RecipeModel.findById(id);

      if (!recipe) {
        res.status(404).json({ msg: "Receita não encontrada" });
        return;
      }

      res.json(recipe);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },
};

module.exports = serviceController;
