"use strict";
const authToken = require("../middleware/authToken");
const express = require("express");
const { upload } = require("../helpers/filehelper");
const {
  singleFileUpload,
  multipleFileUpload,
  getallSingleFiles,
  getallMultipleFiles,
} = require("../controllers/fileuploaderController");
const userImg = require("../controllers/userImg-controller");
const router = express.Router();

// img routes
router.post("/imgFile", upload.single("file"), authToken, singleFileUpload);
router.post("/multipleImgFiles", upload.array("files"), multipleFileUpload);
router.get("/getImgFile", getallSingleFiles);
router.get("/getMultipleImgFiles", getallMultipleFiles);
router.get("/user-img", authToken, userImg);

module.exports = {
  routes: router,
};
