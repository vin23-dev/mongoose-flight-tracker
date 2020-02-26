let Flight = require('../models/flight');

module.exports = {
    create,
    new: newFlight,
    index,
    show
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'});
}
function create(req, res) {

    if(!req.body.departs){
        var redate = new Date();
        redate.setFullYear(redate.getFullYear()+1);
        req.body.departs = redate
    }
        var flight = new Flight(req.body);
        flight.save(function(err) {
            if (err) return res.redirect('/flights/new', {title: 'Add Flight'});
            res.redirect('/flights');
        });
    }
    function index(req, res) {
        Flight.find({}, function(err, flights) {
            res.render('flights/index', { title: 'All Flights', flights});
        });
    }

    function show(req, res){
        Flight.findById(req.params.id)
    }