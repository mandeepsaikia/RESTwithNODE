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


app.use('/feed', router)

app.listen(3000)