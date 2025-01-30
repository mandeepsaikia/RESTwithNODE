const express = require('express')
const app = express()

const bodyparser = require('body-parser')
app.use(bodyparser.json())

const router = require('./routes/feed')

app.use('/feed', router)

app.listen(3000)