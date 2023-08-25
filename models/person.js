// const moongoose = require('mongoose')
const {Schema, model} = require('mongoose')

const studentSchema = Schema({

    name: {
        type:String, required:true
    },
    age:{
        type:Number, min:0
    },
    hobbies: {
        type:Array,
        of:String,
        validate:{
            validator:(value)=> value.length>0,
            message:"There must be at least 1 hobby"
        }
    }
})

const Person = model("Student", studentSchema)

exports.Person = Person;