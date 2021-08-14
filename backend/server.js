const express=require("express")
const app=express();
app.use(express.json());

const cors=require("cors")
app.use(cors())

const mongoose=require("mongoose")
const url="mongodb+srv://Arijeet:1234@cluster0.5x7bo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})

const home=require("./routes/Home.js")
app.use("/home",home)

app.listen(5000,function(){
    console.log("Server running at PORT:5000")
})