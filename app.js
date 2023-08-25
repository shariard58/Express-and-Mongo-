const express = require("express")
const app = express()
const PORT = 3000;
const studentRouter = require("./routers/personRouter");
const morgan = require("morgan");
app.use(express.json())
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/person", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connected MongoDb successfully")).catch(err=>console.log("MongoDb Connection failed"))


app.use(morgan("dev"))
app.use((req, res, next)=>
{
console.log("I am middleware 1")
next()
})

app.use((req, res, next)=>
{
    console.log("I am middleware two")
    next()
})

app.use('/api/person', studentRouter)
app.listen(PORT, ()=>
{
    console.log("Server is running successfully")
})

// Mongoose -> Model -> Collection
// Import korte hbe model k
// Connect Database
