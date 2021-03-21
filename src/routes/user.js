const express = require("express");
const {
  getAllUserList,
  getUser,
  deleteUser,
  addOrUpdateUser,
} = require("../controllers/user");
const router = express.Router();

router.delete("/:userId", deleteUser);
router.get("/:userId", getUser);
router.put("/add-or-update-user", addOrUpdateUser);
router.get("/", getAllUserList);

module.exports = router;
