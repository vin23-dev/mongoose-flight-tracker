let express = require('express');
let router = express.Router();
let flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/new', flightsCtrl.createFlight);
router.get('/:id', flightsCtrl.show);
router.post('/update/:id', flightsCtrl.update);
router.get('/:id/edit', flightsCtrl.showUpdate);
router.delete('/:id', flightsCtrl.delete);

module.exports = router;