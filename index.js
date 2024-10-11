const express = require("express");
const mongoose = require("mongoose")
const userRoutes = require("./Routes/userRoutes")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://parasmore21:fxaVQoCxCnPnTAv7@cluster0.0wrudrd.mongodb.net/ExamMet").then(()=>{
        console.log("DB connected");
        
}).catch(()=>{
        console.log("DB not connected");
})

app.use(userRoutes)


app.listen(10000,()=>{
    console.log("server is up 10000");
    
})