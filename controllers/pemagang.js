var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//connect to databse
//mongoose.connect('monggodb://localhost/lowongan', { useNewUrlParser: true })
mongoose.connect('mongodb+srv://sulthan1:1@todo-xw17o.mongodb.net/SE_project?retryWrites=true&w=majority', { useNewUrlParser: true })

// schema
var pemagangSchema = new mongoose.Schema({
    nim: String,
    nama: String,
    email: String,
    jurusan: String,
    kampus: String,
    semester: Number,
    sks: Number,
    ipk: Number,
    berkas: String
})

var Pemagang = mongoose.model('Pemagang', pemagangSchema)

var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){

// memberikan tampilan form kepada pemagang untuk melakukan input data diri V
app.get('/daftar-magang', function(req, res){
    res.render('daftar_magang')
})
// ketika user menekan tombol submit, maka ada yang diisi akan dimasukkan ke database V
app.post('/daftar-magang', urlencodedParser, function(req, res){
    //  console.log(req.body)
    var newPemagang = Pemagang(req.body).save(function(err, data){
        if (err) throw err
        res.json(data)
    })
    res.render('home')
})

// memberikan daftar pemagang yang ingin mendaftarkan diri V
app.get('/data-pendaftar', function(req, res){
    // get data from mongodb and pass it to view
    Pemagang.find({}, function(err, data){
        if (err) throw err
        res.render('data_pendaftar', {pemagangs: data})
    })
})





}