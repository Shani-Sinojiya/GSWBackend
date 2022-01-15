"use strict";
const User = require("../models/user");

const userInfoControl = async (req, res) => {
  try {
    if (req.token) {
      const _id = req.token._id;
      const UserInfo = await User.findById(_id);
      res.status(200).send(UserInfo);
    } else {
      throw Error("Please Log in Now");
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = userInfoControl;
