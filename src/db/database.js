"use strict";
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://Shani:Shani9880@gsw.yufvk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to Mongodb......");
  })
  .catch((e) => {
    console.log("failed connected", e);
  });
