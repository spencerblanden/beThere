const express = require('express');
const app = express();
const homeController = require('./controllers/index.js');
const placeController = require('./controllers/places.js');
const mongoose = require('mongoose');

require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)

const PORT = process.env.PORT

const db = mongoose.connection;
db.on("error",(err) => console.log(err.message + " Where you at mongo?"))
db.on("connected", () => console.log("Your mongoose is running you better catch it"))
db.on("disconnected", ()=> console.log("mon no go"))




//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended:false }))



//routes
app.use('/', homeController)
app.use('/places', placeController)



app.listen(PORT, () =>{
console.log('bethere running on ' + PORT)
})