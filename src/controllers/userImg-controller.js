"use strict";
const UserImg = require("../models/singlefile");

const userImg = async (req, res) => {
  if (req.token && req.body.id) {
    try {
      const _id = req.body.id;
      const file = await UserImg.findById(_id);
      res.status(200).send(file);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = userImg;
