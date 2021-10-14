const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
   
    name: String,
    day: String,
    time: String,
    creator:  {type: Schema.Types.ObjectId, ref: "User"} ,
    attendees: Array, 
    there: Array
}, {
    timestamps: true
});

const placeSchema = new Schema({
    name: String, 
    img: String,
    address: String,
    creator: {type: Schema.Types.ObjectId, ref: "User"},
    description: String,
    events: [eventSchema],
    type: String,
    tags: Array
}, {
    timestamps: true
});



const Places = mongoose.model('Places', placeSchema);

module.exports = Places;
