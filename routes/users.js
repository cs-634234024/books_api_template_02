const router = require("express").Router();

const userController = require("../controllers/userController");

router.route("/").get(userController.getUsers).post(userController.addUser);

router
  .route("/:userid/")
  .get(userController.getUserbyId)
  .put(userController.updateUserbyId)
  .delete(userController.deleteUserbyId);

module.exports = router;
