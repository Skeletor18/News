const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller.js");
const router = Router();

router.get("/categories", categoriesController.getCategories);
router.post("/categories", categoriesController.postCategories);
router.delete("/categories/:id", categoriesController.deleteCategories);

module.exports = router;
