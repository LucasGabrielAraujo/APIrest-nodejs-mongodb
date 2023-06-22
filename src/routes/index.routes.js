import { Router } from "express";

import {
  createTask,
  renderTaskEdit,
  deleteTask,
  editTask,
  renderTask,
  taskToggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTask);

router.post("/task/add", createTask);

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", editTask);

router.get("/task/:id/delete", deleteTask);

router.get("/task/:id/toggledone", taskToggleDone);

export default router;
