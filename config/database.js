import mongoose from "mongoose";

export const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Connect Successful");
    })
    .catch((err)=>{
        console.log("Database connection Error", err);
    });
};