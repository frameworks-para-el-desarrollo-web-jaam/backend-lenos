import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost/ventalenos');
        console.log("db connected")
    }catch (error){
        console.log(error);
    }
};
