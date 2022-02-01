const router = require("express").Router();

const {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:id
router.route("/:id").get(getUserById).put(updatePizza).delete(deletePizza);

module.exports = router;
