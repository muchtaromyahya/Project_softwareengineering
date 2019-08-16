var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// connect to database
mongoose.connect('mongodb+srv://sulthan1:1@todo-xw17o.mongodb.net/SE_project?retryWrites=true&w=majority', { useNewUrlParser: true })

//database schema - blueprint for pemagang registration
var akunSchema = new mongoose.Schema({
    fullname: String,
    uname: String,
    email: String,
    tempat: String,
    tanggal: Date,
    psw1: String
    
})

var Akun = mongoose.model('Akun', akunSchema)

var akunMitraSchema = new mongoose.Schema({
    companyName: String,
    username: String,
    companyEmail: String,
    berdiri: Date,
    adress: String,
    type: String,
    password: String
    
})

var AkunMitra = mongoose.model("AkunMitra", akunMitraSchema)

var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){

// memberikan view header berupa link menuju home, registrasi, login, about, dll
app.get('/header', function(req, res){
    res.render('header')
})
// memasukkan data registrasi pemagang ke database
app.post('/header', urlencodedParser, function(req, res){
    console.log(req.body)
    var newAkun = Akun(req.body).save(function(err, data){
        if (err) throw err
        res.json(data)
    })
})
// memasukkan data registrasi perusahaan ke database
app.post("/header", urlencodedParser, function(req, res){
    var newAkunMitra = AkunMitra(req.body).save(function(err, data){
        if (err) throw err
        res.json(data)
    })
})

// melakukan login untuk pemagang
app.post('/header', function(req, res){
    var uname = req.body.uname
    var psw1 = req.body

    Akun.findOne({
        uname: uname,
        psw1: psw1,
    }, function(err, Akun){
        if (err){
            console.log(err)
            return res.status(500).send()
        }
        if (!Akun){
            return res.status(404).send()
        }
        res.render('header')
    })
})

// memberikan view setting
app.get('/setting', function(req, res){
    res.render('setting', {qs: req.query})
})
// melakukan update data sesuai yang dimasukkan user
app.post('/setting', function(req, res){
    console.log(req.body)
    var newAkun = Akun(req.bod).save(function(err, data){
        if (err) throw err
        res.json(data)
    })
})




}
