var express = require('express')
var berandaController = require('./controllers/berandaController')
var daftarController = require('./controllers/daftarController')
var masukController = require('./controllers/masukController')

var app = express()

// set up template engine
app.set('view engine', 'ejs')

// static files


// fire controller
daftarController(app)
masukController(app)

//listen to port
app.listen(3000)
console.log("listening to port 3000 right now!")