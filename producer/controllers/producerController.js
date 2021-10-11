const path = require('path')
const env = require('../env')
const sender = require('../services/sendMessageService')

exports.echo = (req, res, next) => {
    res.status(200).send({ message: 'producer works!' })
}

exports.index = (req, res, next) => {
    res.sendFile(path.join(`${env.viewsPath}index.html`))
}

exports.message = (req, res, next) => {
    try {
        if (!req.body.message) {
            res.status(412).send({ success: false, info: 'Empty message' })
            return
        }

        if (!req.body.message.text) {
            res.status(412).send({ success: false, info: 'Empty message' })
            return
        }

        sender.sendMessage(req.body.message)
        res.status(200).send({
            success: true,
            info: 'We delivery your message to the queue service. We hope that works!',
            id: req.body.message.id,
            status: 1
        })
    } catch (error) {
        res.status(412).send({ success: false, info: error })
    }
}

