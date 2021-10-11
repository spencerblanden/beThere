const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    place: Object,
    creator: Object, 
    time: String,
    attendees: Array, 
    there: Array
}, {
    timestamps: true
});

const Events = mongoose.model('Event', eventSchema);

module.exports = Events;