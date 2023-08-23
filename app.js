const express = require("express")
const db = require("./db")
const fs = require("fs")
const app = express()
const PORT = 3000;

app.use(express.json())


const personList =(req, res)=>
{
    {
  
        db.readData().then(data => {
            res.send(data);
            res.end(data)
        })
       
    }
}



//Post Request

const postPerson =(req, res)=>
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
    
}



// function for specific person
const selectedPerson =(req, res)=>
{
    {
        db.readData().then(data =>
            { 
                const id = parseInt(req.params.id);
                const selectData = data.find(value=> value.id=== id);
                if(!selectData) 
                {
                    res.status(404).send("No student found with this id")
                }
                else
                {
                    res.send(selectData)
                    res.end()
                }
             
            })
    }
}



// Put Request

const updatePerson=(req, res)=>
{
    {
        const info = req.body;
        console.log(info.id)
        db.readData().then(data=>
            {
                console.log(data)
                const i = data.findIndex(s=>s.id == info.id)
                if(i<=-1)
                {
                    res.status(404).send("No student found with this id")
                    res.end()
                }
               else 
               {
                 data[i]= info;
                 db.writeData(data).then(feedback => 
                    {
                        res.send(info)
                    })
               }
    
            })
    }
}



// delete Request

const deletePerson =(req, res)=>
    {
        const id = parseInt(req.params.id)
        db.readData().then(data => 
            {
                const index = data.findIndex(s => s.id==id)
                if(index<=-1)
                {
                    res.status(404).send("No id mathched with this id")
                    res.end()
                }
    
                else 
                {
                    const newData = data.filter(s=> s.id != id)
                    console.log(newData)
                    db.writeData(newData).then(x => 
                        {
                            res.send("Delted")
                            res.end()
                        })
                    res.end()
                }
            })
        // console.log(id)
        // res.end()
    }

// All the request , the necessary functionsa are above

    app.route("/").get(personList).post(personList);
    // app.get("/",personList)
    // app.post("/",postPerson)
    app.route("/person/:id").get(selectedPerson).delete(deletePerson)
    app.put("/person",updatePerson)


app.get("/another",(req, res)=>
{
    res.send("This is antoher request")
})

app.listen(PORT, ()=>
{
    console.log("Server is running successfully")
})



console.log("My Name is Shariar Mahmud duke")
