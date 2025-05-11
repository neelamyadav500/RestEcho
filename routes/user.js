const express = require("express");
const router = express.Router();
const User =  require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/users.js")

router
    .route("/signup")
    .get(userController.renderSingupForm) //Signup Form
    .post(wrapAsync(userController.signup)); //Signup

router
    .route("/login")
    .get(userController.renderLoginForm) //Login Form
    .post(saveRedirectUrl ,passport.authenticate("local",{failureRedirect:'/login', failureFlash: true}), wrapAsync(userController.login)); //Login

router.get("/logout",userController.logout); //Logout

module.exports = router;