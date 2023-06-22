"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks.controller");
var router = (0, _express.Router)();
router.get("/", _tasks.renderTask);
router.post("/task/add", _tasks.createTask);
router.get("/task/:id/edit", _tasks.renderTaskEdit);
router.post("/task/:id/edit", _tasks.editTask);
router.get("/task/:id/delete", _tasks.deleteTask);
router.get("/task/:id/toggledone", _tasks.taskToggleDone);
var _default = router;
exports["default"] = _default;