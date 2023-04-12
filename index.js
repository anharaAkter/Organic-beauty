import express from "express";
import path from "path";
import homepageRouter from "./routes/homepageRoute.js";

const __dirname = path.resolve();



//const __dirname = path.resolve();

// create express  App
const app = express();

//set views engine
app.set("view engine", "ejs");

//set view directory
app.set("views", "views");

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("Hello world from anhara")
app.use(express.static(path.join(__dirname, "public")));
app.use(homepageRouter);

// Create server and Listenning
app.listen(8082, () => {
  console.log("Server is listenning at port 8082");
});