const app = require("express");
const { CreateUser, LoginUser, GetAllUsers, DeleteUser } = require("../controllers/user.controller");
const router = app.Router();


router.post("/register", CreateUser);
router.post("/login", LoginUser);
router.get("/users", GetAllUsers);
router.delete("users/deleteUser/:userId", DeleteUser);

module.exports = router