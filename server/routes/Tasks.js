import express from "express";
import { deleteTask, getUserTasks } from "../controller/tasks.js";
import { TasksCompleted } from "../controller/tasks.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

/* READ */
router.get("/:userId/tasks", verifyToken, getUserTasks);

/* UPDATE */
router.patch("/:id/completed", verifyToken, TasksCompleted);
/* Delete */
router.delete("/:id/delete", deleteTask);
export default router;
