"use strict";
const express = require("express");
const router = express();
const loginControl = require("../controllers/login-controller");
const signupControl = require("../controllers/signup-controller");
const upControl = require("../controllers/update-profile-controller");
const userInfoControl = require("../controllers/userInfo-controller");
const authToken = require("../middleware/authToken");

// user routes
router.post("/login", loginControl);
router.post("/register", signupControl);
router.patch("/update-profile", authToken, upControl);
router.get("/user-info", authToken, userInfoControl);

module.exports = {
  routes: router,
};
