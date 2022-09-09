const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller.js");
const router = Router();

router.get("/comments/news/:id", commentsController.getComments);
router.post("/comments", commentsController.postComments);
router.delete("/comments/:id", commentsController.deleteComments);

module.exports = router;
