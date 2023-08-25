const express = require("express")
const app = express()
const db =require("./db")



const PORT = 3000;

 const studentRouter = require("./routers/personRouter");
const morgan = require("morgan");
app.use(express.json())

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



console.log("My Name is Shariar Mahmud duke")
