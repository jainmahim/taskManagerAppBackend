import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
const router = express.Router();

router
  .route("/getTask")
  .post(getTasks)

  
router
.route("/addTask")
.post(createTask)

router
.route("/updateTask")
.put(updateTask)

router
.route("/deleteTask")
.delete(deleteTask)


export default router;
