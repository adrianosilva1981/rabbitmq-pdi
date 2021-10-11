const express = require('express')
const env = require('./env')
const app = express()
const bodyParser = require('body-parser')

// public files
app.use('/public', express.static('./public/'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
const producerRouter = require('./routes/producerRouter')

app.use('/producer', producerRouter);

// start
app.listen(env.runnning_port)
console.log(`Server started at ${env.domain}:${env.runnning_port}`)