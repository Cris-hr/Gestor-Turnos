"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var server = express();
var index_1 = require("./config/index");
server.listen(index_1.PORT, function () {
  console.log("server listening on PORT ".concat(index_1.PORT));
});
