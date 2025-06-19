import express from "express";
import {
  getTodos,
  addTodo,
  getTodoById,
  Delete,
  Put,
} from "../controller/todo.controller";
const todoRouter = express.Router();

todoRouter.get("/", getTodos);

todoRouter.post("/", addTodo);

todoRouter.get("/:id", getTodoById);

todoRouter.delete("/:id", Delete);

todoRouter.put("/", Put);

export default todoRouter;
