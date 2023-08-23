const fs = require('fs')

const readData = () =>
{
   return new Promise((resolve, reject)=>
    {
      fs.readFile("./db.json","utf-8",(err, data)=>
      {
          let newData = JSON.parse(data)
          resolve(newData)
      })
    }
    )
}

const writeData =(personData)=> 
{
  return new Promise((resolve, reject)=>
  {
   
    fs.writeFile("./db.json",JSON.stringify(personData), (err)=>
   {
      resolve("Successfully posted")
   }) 
  })
}


module.exports.readData = readData;
module.exports.writeData= writeData;

// fs.readFile("./db.json","utf-8",(err, data)=>
// {
//     let newData = JSON.parse(data);
//     res.send(newData)
//     res.end()       
// })