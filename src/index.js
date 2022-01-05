"use strict";
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
// const Parser = require("body-parser");
const apiRoutes = require("./routes/file-router");
const authRoutes = require("./routes/auth-router");
const port = process.env.PORT || 8080;
require("./db/database");

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api", apiRoutes.routes);
app.use("/api/auth", authRoutes.routes);

app.listen(port, () =>
  console.log(`server is listening on url http://localhost:${port}`)
);
