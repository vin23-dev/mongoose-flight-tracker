let express = require('express');
let router = express.Router();
let flightsCtrl = require('../controllers/flights');
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/new', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
module.exports = router;