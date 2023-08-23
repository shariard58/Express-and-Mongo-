const express = require("express")
const fs = require("fs")
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/",(req, res) => 
{
  
    fs.readFile("./db.json","utf-8",(err, data)=>
    {
        let newData = JSON.parse(data).students;
        res.send(newData)
        res.end()       
    })
})

//Post Request

app.post("/",(req, res)=> 
{
    console.log(req.body)
    res.send("Posted successfully")

})

app.get("/another",(req, res)=>
{
    res.send("This is antoher request")
})

app.listen(PORT, ()=>
{
    console.log("Server is running successfully")
})

console.log("My Name is Shariar Mahmud duke")
