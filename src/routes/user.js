const userController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController");
const router = require("express").Router();

//  get All user
router.get("/", middlewareController.verifyToken, userController.getAllUsers);
// delete user
router.delete(
    "/:id",
    middlewareController.verifyTokenAndAdminAuth,
    userController.deleteUsers
);

module.exports = router;
