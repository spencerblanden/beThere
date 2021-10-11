const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String, 
    img: String,
    address: String,
    creator: String,
    description: String,
    type: String,
    tags: Array
}, {
    timestamps: true
});

const Places = mongoose.model('Places', placeSchema);

module.exports = Places;