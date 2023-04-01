import mongoose from "mongoose";

//fix depracation warning
mongoose.set("strictQuery", false);

const MONGO_URI = "mongodb+srv://abarker:TFYteNQieJWQMgJj@cluster0.6ucasko.mongodb.net/?retryWrites=true&w=majority";

const DBCONNECT = async() => {
    try {
        await mongoose.connect(MONGO_URI, { autoIndex: true });
        console.log("db connected Succesfully");
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

export default DBCONNECT;