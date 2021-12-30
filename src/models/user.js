"use strict";
const mongoose = require("mongoose");
const validator = require("validator");
const passwordHasherMiddleware = require("../middleware/passwordHashMiddleware");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: 3,
      default: null,
    },
    lastName: {
      type: String,
      minlength: 3,
      default: null,
    },
    userName: {
      type: String,
      required: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "email already present"],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    mobileNo: {
      type: Number,
      required: true,
    },
    std: {
      type: Number,
    },
    Image: {
      type: String,
      default: null,
    },
    DOB: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", passwordHasherMiddleware);

const User = new mongoose.model("User", UserSchema);

module.exports = User;
