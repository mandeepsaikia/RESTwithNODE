const express = require('express')
const app = express()

const bodyparser = require('body-parser')
app.use(bodyparser.json())

const router = require('./routes/feed')
/*
   To handle requests to server from different domains i.e. CORS requests - we need to do setting on server side.
   By default, CORS requests are blocked by browsers as a security measure. 
   So, we need to set some CORS headers in the response headers i.e. leaving the server.
   
   app.use((req, res, next)=>{
     res.setHeader('Access-Control-Allow-Origin','*')
     res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE')
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
     next();
   })
*/


const sequelize = require('./utils/database') //import the sequelize model

app.use('/feed', router)

sequelize.m2.sync().then(result=>{ //initialize the sequelize model
   // console.log(result);
}).catch(err=>{
  console.log(err)
});// This creates the model aka the table in memory..and 'sync' it with the database.

const mongoConnection = require('./utils/mongoDB')

mongoConnection.m1((client)=>{
  //console.log(client);
})
app.listen(3000) 