let Flight = require('../models/flight');
let Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
 
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {title: 'Add Ticket', flight});
    });
};


function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, tickets) {  
      res.redirect(`/flights/${req.params.id}`);
    })
};