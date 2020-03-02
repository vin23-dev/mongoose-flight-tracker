var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicketPage,
    createTicket,
    deleteTicket
};

function deleteTicket(req, res){
    Ticket.findByIdAndDelete(req.params.ticketid, function(err, ticket){
        res.redirect(`/flights/${req.params.flightid}`);
    });
}

function newTicketPage(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {
            title: 'Add Ticket', 
            flight
        });
    });
};


function createTicket(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, tickets) {  
      res.redirect(`/flights/${req.params.id}`);
      })
};

