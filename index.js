import express from "express";
import bodyParser from "body-parser"
import path from "path";
import dotenv from "dotenv";
import homepageRouter from "./routes/homepageRoute.js";
import router from "./routes/categoryRoute.js"
import productRouter from "./routes/productRoute.js";
import connectDB from "./config/connectdb.js";

const __dirname = path.resolve();

//config dotenv 
dotenv.config()


// Create express App
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

// Set views engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", "views");

//load assets 
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));

//load routers 
app.use(homepageRouter);
app.use(router)
app.use(productRouter);


//load assets 
app.use(express.static(path.join(__dirname, "public")));



// Create server and Listenning
app.listen(8082, () => {
  console.log("Server is listenning at port 8082");
});
