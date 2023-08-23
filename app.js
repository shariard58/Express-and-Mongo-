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
    const person = req.body;
    // fs.readFile("/app.js","utf-8",(err, data)=>
    // {
    //     let newData = JSON.parse(data);
    //     console.log(newData)

    // })
    console.log(person)
    fs.readFile("./db.json","utf-8",(err, data)=>
    {
        let newData = JSON.parse(data);
        newData.students.push(person)
       console.log("The Data is",newData)  
       fs.writeFile("./db.json",JSON.stringify(newData), (err)=>
       {
        res.send(newData)
       })   
    })
  
    res.send("Posted Successfully")
    // fs.writeFile("./db.json",person,()=>)
    // res.send("Posted successfully")

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
