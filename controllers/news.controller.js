const News = require("../models/News.model.js");

module.exports.newsController = {
  postNews: async (req, res) => {
    const { title, text, categoriesID } = req.body;
    try {
      await News.create({
        title,
        text,
        categoriesID,
      });
      res.json("Новость добавлена");
    } catch (err) {
      res.json(err);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await News.findByIdAndRemove(req.params.id);
      res.json("Новость удалена");
    } catch (err) {
      res.json(err);
    }
  },

  patchNews: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.params.id, {title: req.body.title});
      res.json("Новость изменина");
    } catch (err) {
      res.json(err);
    }
  },

  getNews: (req, res) => {
    News.find({}).then((data) => {
      res.json(data);
    });
  },
  getNewsById: async (req, res) => {
    try {
      const newId = await News.find({ categoriesID: req.params.id });
      res.json(newId);
    } catch (err) {
      res.json(err);
    }
  },
  getNew: async (req, res) => {
    try {
      const newOne = await News.findById(req.params.id);
      res.json(newOne);
    } catch (err) {
      res.json(err);
    }
  },
};
