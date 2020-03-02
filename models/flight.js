let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let destinationSchema = new Schema({
    destAirport: {
        type: String,
    },
    arrives: {
        type: Date,
    }
});

let flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ["United", "Southwest", "Delta"]
    },
    flightNumber: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs:
    {
        type: Date
    },
    departingAirport: {
        type: String,
        required: true,
        enum: ["AUS", "DAL", "LAX", "SEA"]
    },
    destinations: [destinationSchema],


    }, {
        timestamps: true
    });


module.exports = mongoose.model('Flight', flightSchema);