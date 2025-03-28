const mongoose = require("mongoose");

const db_url = "mongodb://127.0.0.1:27017/todo?replicaSet=rs0"

const connectToDatabase = async () => {
    try {
        await mongoose.connect(db_url);
        console.log("mongo DB server connectioned")

    }catch(error)
    {
        console.log("error : ", error);
        process.exit(1);
    }
}

export default connectToDatabase;
