const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.message);

router.get('/double/:value', controller.doubleValue);

module.exports = router;