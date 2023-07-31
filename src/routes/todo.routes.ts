import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware";
import {
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  getAllTodo,
} from "../controllers/todo.controller";

const router = Router();

router.post("/create-todo", authMiddleware, createTodo);

router.get("/get-todo-by-id/:id", authMiddleware, getTodoById);

router.put("/update-todo/:id", authMiddleware, updateTodo);

router.delete("/delete-todo/:id", authMiddleware, deleteTodo);

router.get("/get-All-Todos", authMiddleware, getAllTodo);

export default router;
