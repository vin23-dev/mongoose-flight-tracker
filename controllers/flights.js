var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newFlightView,
    createFlight,
    index,
    show,
    delete: deleteOne,
    showUpdate,
    update
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
      Ticket.find({flight: flights._id}, function(err, tickets) {
        res.render('flights/show', { 
            title: 'Flight Details',
            flights, 
            tickets 
        });
      })
    })
  }

function newFlightView(req, res) {
    res.render('flights/new', {
        title: 'Add Flight'
    });
}

function createFlight(req, res) {
    if(!req.body.departs){
        var redate = new Date();
        redate.setFullYear(redate.getFullYear() +1);
        req.body.departs = redate
    }
    let flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new', {title: 'Add Flight'});
        console.log(flight);
        res.redirect('/flights');
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { 
            title: 'All Flights',
            flights
        });
    });
}

function deleteOne(req, res){
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
        res.redirect('/flights/');
    })
}

function showUpdate(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/update', {
            title: 'Update Flight', 
            flight: flight
        });
    });
}

function update(req, res){
    if (!req.body.departs){
        let newDate = new Date();
        newDate.setFullYear(newDate.getFullYear() +1);
        req.body.departs = newDate;
    }
    Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flights){
        res.redirect('/flights/');
    });
}