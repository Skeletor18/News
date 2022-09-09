const Category = require("../models/Category.model.js");

module.exports.categoriesController = {
  postCategories: async (req, res) => {
    const { nameCategory } = req.body;
    try {
      await Category.create({
        nameCategory,
      });
      res.json("Категория добавлена");
    } catch (err) {
      res.json(err);
    }
  },

  deleteCategories: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (err) {
      res.json(err);
    }
  },

  getCategories: (req, res) => {
    Category.find({}).then((data) => {
      res.json(data);
    });
  },
};
