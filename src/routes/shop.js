const router = require("express").Router();
const shopController = require("../controllers/shopController");

// addPost
router.post(
    "/add-shop",
    // middlewareController.verifyToken,
    shopController.addshop
);
// getPost
router.get("/", shopController.getshop);
// putPost
router.put("/:id", shopController.putshop);
// deletePost
router.delete("/:id", shopController.deleteshop);

module.exports = router;
