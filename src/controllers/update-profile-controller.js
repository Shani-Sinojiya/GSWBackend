"use strict";
const User = require("../models/user");

const upControl = async (req, res) => {
  try {
    if (req.token) {
      const _id = req.token._id;
      const update = await User.findByIdAndUpdate(_id, req.body, { new: true });
      res.status(200).send(update);
    } else {
      throw Error("Please Log In Now");
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = upControl;
