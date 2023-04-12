import express from "express";
import path from "path";

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

})


//create server and listening 
app.listen(8082, ()=>{

    console.log( "Server is listening at port 8082")
})