import { password } from "bun";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 100
    },
    email: {
        type: String,
        require: true,
        minLength: 8,
        maxLength: 100
    },
    password : {
        type : String ,
        required : true,
        minLength : 8,
        maxLength : 100,
    }
}, { timestamps: true });


const User = mongoose.model("User",userSchema);

export default User;





