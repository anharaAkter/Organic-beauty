import mongoose from "mongoose"

const  connectDB = async()=>{
    try{
       await mongoose.connect("mongodb+srv://anharasusoma:Sanaya2020@beautnature.aiqlaec.mongodb.net/?retryWrites=true&w=majority")
  
    console.log("db connected")
    }
    catch(err){
        console.log("Error to connect with database",err)
    }
} 
export default connectDB;


//mongodb+srv://anharasusoma:<password>@beautnature.aiqlaec.mongodb.net/?retryWrites=true&w=majority
