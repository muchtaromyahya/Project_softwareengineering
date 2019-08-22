var express = require('express')
var path = require('path')
//var expressLayouts = require('express-ejs-layouts')

var lowonganController = require('./controllers/lowongan')
var pemanganController = require('./controllers/pemagang')
var akunController = require('./controllers/akun')


var app = express()

// set up template engine
//app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

// static files
app.use(express.static(__dirname + '/assets'))
//app.use(expressLayouts)

// fire controller
lowonganController(app)
pemanganController(app)
akunController(app)

// [small controllers] //

// display home
app.get('/', function(req, res){
    res.render('home2')
})
app.get('/home', function(req, res){
    res.render('home')
})

// display lowongan
app.get('/mitra', function(req, res){
    res.render('mitra')
})

// display about
app.get('/about', function(req, res){
    res.render('about')
})


// listen to port
app.listen(3000)
console.log("listening to port 3000 right now!")
