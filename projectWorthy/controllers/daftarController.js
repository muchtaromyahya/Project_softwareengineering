var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// connect to database

//create a schema - this is like a blueprint
var mahasiswaSchema = new mongoose.Schema({
    username: String,
    nama: String,
    nim: String,
    universitas: String,
    password: String,
    status: String
})
var perusahaanSchema = new mongoose.Schema({
    username: String,
    namaPerusahaan: String,
    password: String,
    status: String
})
var pekerjaanSchema = new mongoose.Schema({
    kategori: String,
    namaPerusahaan: String,
    namaPekerjaan: String,
    ipkMinimal: Float32Array,
    deskripsi: String
})

var Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema)
var Perusahaan = mongoose.model('Perusahaan', perusahaanSchema)
var Pekerjaan = monggose.model('Pekerjaan', pekerjaanSchema)

var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){

app.post('/daftarmahasiswa', urlencodedParser, function(req, res){
    // get data from the view that the use inputs and put it on the database
    var newDaftar = Daftar(req.body).save(function(err, data){
        if (err) throw err
        res.json(data)
    })
})
app.post('/daftar')

}