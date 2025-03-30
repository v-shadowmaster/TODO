const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({

    taskName :{
        type : String,
        default : "untitled task",
        minLength : 4,
        maxLength : 100,
    },

    date : {
        type : String,
        default : new Date().getDate(),
    },

    tags : {
        type: String,
    },

    priority : {
        type : String,
        enum : [ "low" , "medium" , "high"],
        default : "low",

    },
    progress : {
        type : String,
        enum : ["Not Started", "In Progress" , "Completed"],
        default : "Not Started",
    },
    completed : {
        type : Boolean,
        default : false
    }

    // user : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: [true,"user is required"],
    //     index: true
    // }

},{timestamps : true})


const TodoTasks = mongoose.model("TodoTask",todoSchema);

export default TodoTasks;