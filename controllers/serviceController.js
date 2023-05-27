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

      if (recipe.ingredients.length <= 0 || !recipe.ingredients.length) {
        res.status(406).json({ msg: "Insira ao menos um ingrediente!" });
        return;
      }

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

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const recipe = await RecipeModel.findById(id);

      if (!recipe) {
        res.status(404).json({ msg: "Receita não encontrada" });
        return;
      }

      const deleteRecipe = await RecipeModel.findByIdAndDelete(id);

      res.status(200).json({ deleteRecipe, msg: "Receita excluída!" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const recipe = {
      name: req.body.name,
      ingredients: req.body.ingredients,
      method: req.body.method,
      image: req.body.image,
    };

    const updateRecipe = await RecipeModel.findByIdAndUpdate(id, recipe);

    if (!updateRecipe) {
      res.status(404).json({ msg: "Receita não encontrada" });
      return;
    }

    res.status(200).json({ recipe, msg: "Receita atualizada!" });
  },
};

module.exports = serviceController;
