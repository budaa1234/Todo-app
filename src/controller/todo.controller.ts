import { Request, Response } from "express"
import { Todo } from "../types/todo.types"

const todos: Todo[]= [] 

export const getTodos = (req: Request, res: Response) => {
    res.json({ todos })
}

export const addTodo = (req: Request, res: Response) => {
    const { desc } = req.body

    const todo = {
        id: 1,
        desc,
        isComplete: false
    }

    todos.push(todo)

    res.json({ success: true, todos })
}

export const getTodoById = (req: Request, res: Response) => {
    const { id } = req.params

    const todo = todos.find((todo) => todo.id === Number(id))

    if (!todo) {

        res.json({ success: false, message: 'not found todo' })
    }

    res.json({ todo })
}

 


export default {getTodoById, getTodos, addTodo,};
