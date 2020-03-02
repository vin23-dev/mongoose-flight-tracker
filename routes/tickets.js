let express = require('express');
let router = express.Router();
let ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new/', ticketsCtrl.new);
router.post('/tickets/:id', ticketsCtrl.createTicket);
router.delete('/tickets/:flightid', ticketsCtrl.deleteTicket);

module.exports = router