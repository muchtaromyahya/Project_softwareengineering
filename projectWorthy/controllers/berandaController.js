var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var daftarController = require('./controllers/daftarController')

// connect to database


module.exports = function(app){

app.get('/beranda', function(req, res){
    // get data from database and pass it to view
    Pekerjaan.find({}, function(err), data){
        if (err) throw err
        res.render('berandaView', {pekerjaans: })
    }
})

}
