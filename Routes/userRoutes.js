const express = require("express");
const userController = require("../Controller/userController")
const router = express.Router();


router.post("/signup",userController.signUp)
router.post("/login",userController.Login)
router.post("/addpost",userController.Addpost)



const userRoutes = router;

module.exports = userRoutes;