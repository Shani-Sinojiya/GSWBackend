"use strict";
const User = require("../models/user");

const signupControl = async (req, res) => {
  try {
    const NewUser = new User(req.body);
    const signup = await NewUser.save();
    res.status(201).send(signup);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = signupControl;
