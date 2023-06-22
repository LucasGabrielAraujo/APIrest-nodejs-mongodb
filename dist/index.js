"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var _config = require("./config");
require("./database");
_app["default"].listen(_config.PORT);
console.log("Server en puerto", _config.PORT);