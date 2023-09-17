const router = require("express").Router();
const postController = require("../controllers/postController");
const middlewareController = require("../controllers/middlewareController");

// addPost
router.post(
    "/add-post",
    middlewareController.verifyToken,
    postController.addPost
);
// getPost
router.get("/get-post", postController.getPost);
// putPost
router.put("/:id", postController.putPost);
// deletePost
router.delete("/:id", postController.deletePost);
module.exports = router;
