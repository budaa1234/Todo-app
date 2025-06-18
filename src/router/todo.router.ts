import express from "express"
import {getTodos, addTodo, getTodoById } from "../controller/todo.controller"
const todoRouter = express.Router()


todoRouter.get('/todos', getTodos)

todoRouter.post('/todos', addTodo)

todoRouter.get('/todos/:id', getTodoById)
export default todoRouter;