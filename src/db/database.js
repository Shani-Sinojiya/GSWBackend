"use strict";
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/gsw-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongodb......");
  })
  .catch((e) => {
    console.log("failed connected", e);
  });
