import express from "express"
import todoRouter from "./router/todo.router"
const app = express()
const port = 4200
app.use(express.json())
app.use("/todos", todoRouter)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
    
})