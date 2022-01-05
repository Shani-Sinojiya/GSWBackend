"use strict";
const JWT = require("jsonwebtoken");
const KEY = "GUJRATISTUDYWEBFOREDUCATIONINHOM";

async function authToken(req, res, next) {
  const tokan = req.header("X-Accsess-Tokan");
  try {
    const token = await JWT.verify(tokan,KEY)
    req.token = token;
    next();
  } catch (error) {
    next();
  }
}

module.exports = authToken;
