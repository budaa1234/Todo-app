import { Request, Response } from "express"
import { Todo } from "../types/todo.types"
import { nanoid } from "nanoid"

const todos: Todo[]= [] 
const ID = nanoid()
export const getTodos = (req: Request, res: Response) => {
    res.json({ todos })
}

export const addTodo = (req: Request, res: Response) => {
    const { desc } = req.body

    const todo = {
        id: ID,
        desc,
        isComplete: false
    }

    todos.push(todo)

    res.json({ success: true, todos })
}

export const getTodoById = (req: Request, res: Response) => {
    const { id } = req.params

    const todo = todos.find((todo) => todo.id === (id))

    if (!todo) {

        res.json({ success: false, message: 'not found todo' })
    }

    res.json({ todo })
}

export const Delete = (req: Request, res: Response) =>{
    const { id } = req.params
    const deleteId = todos.filter((todo)=>todo.id !== id)
    console.log(todos);
    
    res.json(deleteId)
}
export const Put =(req: Request, res: Response) => {
    const {desc} = req.body
}

