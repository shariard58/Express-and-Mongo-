const express = require("express")
const {Person} = require("../models/person")
const app = express()

const fs = require("fs")


const router = express.Router()

const personList = async (req, res)=>
{
   const person = await Person.find().sort({name:1});
   res.send(person)
}

//Post Request

const postPerson = async (req, res)=>
{
    
      const person = new Person(req.body)
      try{
        const result = await person.save()
        res.send(result)
        res.end()
      }catch(err)
      {
        const errMsgs =[];
        for(feild in err.errors)
        {
            errMsgs.push(err.errors[feild].message);
        }
        return res.status(400).send(errMsgs);

      }
    
}

// function for specific person
const selectedPerson = async(req, res)=>
{
    const id = req.params.id;
    console.log(id)
   
    try{
        
       const person = await Person.findById(id);
       res.send(person)
       res.end()
    }
    catch(err)
    {
        return res.status(404).send("Id not found")
    }
}

// Put Request

const updatePerson=(req, res)=>
{
   
}

// delete Request

const deletePerson =(req, res)=>
    {
  
}

// All the request , the necessary functionsa are above

    // router.route("/all").get(personList).post(postPerson).put(updatePerson)
    router.route("/").get(personList).post(postPerson)
    router.route("/:id").get(selectedPerson).delete(deletePerson)
  
    // router.route("/person").put(updatePerson)


app.get("/another",(req, res)=>
{
    res.send("This is antoher request")
})

module.exports= router