const env = require('../env')
var open = require('amqplib').connect('amqp://localhost');

exports.sendMessage = async (message) => {
    open.then((conn) => {
        return conn.createChannel();
    }).then((ch) => {
        return ch.assertQueue(env.queue, { durable: false }).then((ok) => {
            return ch.sendToQueue(env.queue, Buffer.from(JSON.stringify(message)))
        });
    })
}

