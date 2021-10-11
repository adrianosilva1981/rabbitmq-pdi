const express = require('express')
const env = require('./env')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const http = require('http')

const httpServer = http.createServer(app)
const pushServer = http.createServer(app).listen(env.socket_port)

httpServer.listen(env.runnning_port, () => {
    console.log(`app listening on port ${env.runnning_port}`)
})

const io = require("socket.io")(pushServer, {})
const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (error0, connection) => {
  if (error0) {
    throw error0;
  }

  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }

    channel.assertQueue(env.queue, {
      durable: false
    })

    channel.consume(env.queue, (msg) => {
        let response = JSON.parse(msg.content.toString())
        response.status = 2
        io.emit('consumer/producer', JSON.stringify(response))
    }, { noAck: true })
  })
})

exports.io = io;