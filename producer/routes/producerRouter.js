const express = require('express')
const router = express.Router()
const producerController = require('../controllers/producerController')

router.get('/echo', producerController.echo);
router.get('/', producerController.index);
router.post('/message', producerController.message);

module.exports = router;