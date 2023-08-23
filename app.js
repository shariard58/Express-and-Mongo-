const express = require("express")
const db = require("./db")
const fs = require("fs")
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/",(req, res) => 
{
  
    db.readData().then(data => {
        res.send(data);
        res.end(data)
    })
   
})

//Post Request

app.post("/",(req, res)=> 
{
    const person = req.body;
  
    console.log(person)
    db.readData().then(data => 
        {
           data.push(person)
           db.writeData(data).then(feedback => 
            {
                res.send(person)
            })
        })
   


   

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
