"use strict";
const User = require("../models/user");
const JWT = require("jsonwebtoken");
const KEY = "GUJRATISTUDYWEBFOREDUCATIONINHOM";
const passwordHashMatching = require("../helpers/passwordHashMaching-helper");

const loginControl = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
      const isMatch = await passwordHashMatching(password, userEmail.password);
      const _id = userEmail._id;
      if (isMatch) {
        const tokan = await JWT.sign({ _id }, KEY);
        if (tokan) {
          res.status(200).send({ tokan });
        } else {
          res.status(401).send({ msg: "pls try to 5 minutes after" });
        }
      } else {
        res.status(401).send("use vaild password");
      }
    } else {
      res.status(401).send("invalid login details");
    }
  } catch (e) {
    res.status(401).send({ err: "invalid login details", e });
  }
};

module.exports = loginControl;
