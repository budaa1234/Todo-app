import express from "express"
import todoRouter from "./router/todo.router"
import {  Db, MongoClient } from "mongodb"
import "dotenv/config"
const app = express()
const port = 4200
export let db: Db
app.use(express.json())
app.use("/todos", todoRouter)
const connectDb = async () => {
   try {
      const client = new MongoClient(process.env.MONGO_URL!)

      db = client.db("sample_mflix")
      console.log("Database connected");

      return client
   } catch (error) {
      return error
   };
}

app.listen(port, async ()=>{
    await connectDb()
    console.log(`http://localhost:${port}`);
    
})