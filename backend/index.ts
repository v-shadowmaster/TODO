import connectToDatabase from "./database/mongodb.connection";
import TodoTasks from "./models/todo.model";

const express = require("express");

const app = express();

app.use(express.json())

app.get("/:id",async (req:any,res:any)=> {

    const queryJson = await req.query;
    const data = await req.params.id;
    console.log(queryJson,data);
    res.status(201).send(queryJson);

})

app.get("/",async (req: any , res: any)=>{
    try {
        const data = await TodoTasks.find({});
        console.log(data);

        res.send(data)
    }catch (error)
    {
        console.log("error : ", error);
    }
})


app.post("/",async (req: any , res: any)=>{
    try {
        const data = await TodoTasks.create({...req.body});
        console.log(data);

        res.send({"message": "success",data})
    }catch (error)
    {
        console.log("error : ", error);
    }
})


app.listen(8000,()=>{
    console.log("server started at the port 8000");
    connectToDatabase();
});