import mongoose from "mongoose"

const  connectDB = async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URI)
  
    console.log("db connected")
    }
    catch(err){
        console.log("Error to connect with database",err)
    }
} 
export default connectDB;
