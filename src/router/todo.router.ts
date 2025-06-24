import express, { Request, Response } from "express";
// import {
//   getTodos,
//   // addTodo,
//   getTodoById,
//   Delete,
//   Put,
// } from "../controller/todo.controller";
import {db} from "../index"
import { ObjectId } from "mongodb";

const todoRouter = express.Router();

// todoRouter.get("/", getTodos);

// todoRouter.post("/", addTodo);

// todoRouter.get("/:id", getTodoById);

// todoRouter.delete("/:id", Delete);

// todoRouter.put("/", Put);


todoRouter.get("/", async (req: Request, res: Response) => {


   const responses = db.collection("todo").find()

   const users = await responses.toArray()
   res.json((users))
})



todoRouter.post("/", async (req: Request, res: Response) => {
  const {desc, isComplete} = req.body
   try {
      const response = await db
         .collection("todo")
         .insertOne({desc, isComplete});

      res.json(response);
      res.status(200)
   } catch (error) {
      console.log(error);
      res.status(400).send("api error")
   }
})

todoRouter.delete("/:id", async(req: Request, res: Response)=>{
  const { id}= req.params
   try {
      const response = await db
         .collection("todo")
         .deleteOne({_id: new ObjectId(id)})

      res.json(response);
      res.status(200)
   } catch (error) {
      console.log(error);
      res.status(400).send("api error")
   }
})
todoRouter.put("/:id", async(req: Request, res: Response)=>{
  const{id}=req.params
  const{desc}=req.body
  try {
      const response = await db
         .collection("todo")
         .updateOne({_id: new ObjectId(id)}, {$set: {desc}})

      res.json(response);
      res.status(200)
   } catch (error) {
      console.log(error);
      res.status(400).send("api error")
   }
})
todoRouter.get("/:id", async(req: Request, res: Response)=>{
  const {id} = req.params
  
   try {
      const response = await db
         .collection("todo")
         .findOne({_id: new ObjectId(id)})

      res.json(response);
      res.status(200)
   } catch (error) {
      console.log(error);
      res.status(400).send("api error")
   }
})

export default todoRouter;
