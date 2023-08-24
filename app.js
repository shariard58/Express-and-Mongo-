const express = require("express")
const app = express()
const db =require("./db")
const PORT = 3000;

 const studentRouter = require("./routers/personRouter")
app.use(express.json())

 app.use('/api/person', studentRouter)
app.listen(PORT, ()=>
{
    console.log("Server is running successfully")
})



console.log("My Name is Shariar Mahmud duke")
