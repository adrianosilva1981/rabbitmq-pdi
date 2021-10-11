const express = require('express')
const router = express.Router()
const consumerController = require('../controllers/consumerController')

router.get('/', consumerController.consumeQueue);
router.get('/echo', consumerController.echo);

module.exports = router;