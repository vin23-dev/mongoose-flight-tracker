let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let destSchema = new Schema({
    airport: {
        type: String,
        enum: ["AUS", "DAL", "LAX", "SEA"]
    },
    arrival: {
        type: Date,
    }
});

let flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ["United", "Southwest", "Delta"]
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs:
    {
        type: Date,
        default: function () {
        let redate = new Date();
        redate.setFullYear(redate.getFullYear()+1)
        return redate();}
    },
    airport: {
        type: String,
        required: true,
        enum: ["AUS", "DAL", "LAX", "SEA"],
        default: "DEN"
    },
    destinations: [destSchema],


    }, {
        timestamps: true
    });


module.exports = mongoose.model('Flight', flightSchema);