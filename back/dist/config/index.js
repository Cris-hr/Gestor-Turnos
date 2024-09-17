"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PROTO = exports.PORT = void 0;
require("dotenv/config");
var _a = process.env,
  PORT = _a.PORT,
  PROTO = _a.PROTO,
  HOST = _a.HOST,
  ENVIRONMENT = _a.ENVIRONMENT;
exports.PORT = PORT;
exports.PROTO = PROTO;
exports.HOST = HOST;
