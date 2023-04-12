import express from "express";
import path from "path";
import dotenv from "dotenv";
import homepageRouter from "./routes/homepageRoute.js";
import connectDB from "./config/connectdb.js";

const __dirname = path.resolve();

//config dotenv 
dotenv.config()


// Create express App
const app = express();
connectDB();

// Set views engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", "views");
app.use(homepageRouter);
app.use(express.static(path.join(__dirname, "public")));



// Create server and Listenning
app.listen(8082, () => {
  console.log("Server is listenning at port 8082");
});
