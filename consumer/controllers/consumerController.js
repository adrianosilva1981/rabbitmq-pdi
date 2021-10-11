const server = require('../index')

exports.echo = (req, res, next) => {
    res.status(200).send({ message: 'consumer works!' })
}

exports.consumeQueue = (req, res, next) => {
    server.io.emit('broadcast', 'tstes')
    next()

    res.status(200).send({ message: 'consume queue works!' })
}
