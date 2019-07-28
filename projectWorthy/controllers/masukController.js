var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var daftarController = require('./controllers/daftarController')

// connect to database 


var MasukMahasiswa = mongoose.model('MasukMahasiswa', masukMahasiswaSchema)
var MasukPerusahaan = mongoose.model('MasukPerusahaan', masukPerusahaanSchema)

module.exports = function(app){

app.get('/masuk', function(req, res){
    // get data from database and compare the data from the user input
    Masuk.find({})

})

}