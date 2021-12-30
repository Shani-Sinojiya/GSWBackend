"use strict";
const UserImg = require("../models/singlefile");
const MultipleFile = require("../models/multiplefile");
const User = require("../models/user");

const singleFileUpload = async (req, res, next) => {
  try {
    const file = new UserImg({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
    });
    await file.save();
    const id = file._id;
    if (req.token) {
      const _id = req.token._id;
      const UserImg = await User.findByIdAndUpdate(
        _id,
        { Image: id },
        { new: true }
      );
      res.status(201).json({ UserImg });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const multipleFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    const multipleFiles = new MultipleFile({
      title: req.body.title,
      files: filesArray,
    });
    await multipleFiles.save();
    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getallSingleFiles = async (req, res, next) => {
  try {
    const files = await UserImg.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getallMultipleFiles = async (req, res, next) => {
  try {
    const files = await MultipleFile.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

module.exports = {
  singleFileUpload,
  multipleFileUpload,
  getallSingleFiles,
  getallMultipleFiles,
};
