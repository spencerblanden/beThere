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
const placeSchema = new Schema({
    name: String, 
    img: String,
    address: String,
    creator: String,
    description: String,
    events: [eventSchema],
    type: String,
    tags: Array
}, {
    timestamps: true
});



const Places = mongoose.model('Places', placeSchema);

module.exports = Places;