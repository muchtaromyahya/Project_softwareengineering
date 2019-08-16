var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//connect to databse
//mongoose.connect('monggodb://localhost/lowongan', { useNewUrlParser: true })
mongoose.connect('mongodb+srv://sulthan1:1@todo-xw17o.mongodb.net/SE_project?retryWrites=true&w=majority', { useNewUrlParser: true })

//create a schema - this is like a bluepring
var lowonganSchema = new mongoose.Schema({
    perusahaan: String,
    kategori: String,
    jurusan: String,
    durasi: String,
    until: Date,
    semester: String,
    sks: Number,
    ipk: Number,
    persyaratanumum: String,
    persyaratankhusus: String
})

var Lowongan = mongoose.model('Lowongan', lowonganSchema)

var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){

// memberikan tampilan yang berisi data tentang perusahaan yang mencari pemagang V
app.get('/lihat-lowongan', function(req, res){
    // get data from mongodb and pass it to view
    Lowongan.find({}, function(err, data){
        if (err) throw err
        res.render('lowongan', {lowongans: data})
        //res.send('this is a test and you pass')
    })
})
// mengarahkan pemagang untuk mengisi data diri yang dibutuhkan untuk magang???
app.post('/lihat-lowongan', function(req, res){

})

// memberikan tampilan kepada perusahaan berisi form untuk memasukkan data mengenai pekerjaan V
app.get('/tambah-lowongan', function(req, res){
    // get data from mongodb and pass it to view
    res.render('post_lowongan', {qs: req.query}) 
})
// ketika perusahaan menekan tombol submit, maka data akan dimasukkan ke database V
app.post('/tambah-lowongan', urlencodedParser, function(req, res){
    console.log(req.body)
    var newLowongan = Lowongan(req.body).save(function(err, data){
        if (err) throw err
        res.json(data)
    })
    res.render('header')
})


// memberikan detail terkait tentang lowongan yang ingin di daftar kepada pemagang ?
app.get('/detail-lowongan', function(req, res){
    // show details of jobs on the view
    Lowongan.find({namaPerusahaan}, function(err, data){
        if (err) throw err
        res.render('detail_lowongan')
    })
})

// memberikan tampilan untuk mengubah data lowongan magang yang telah terbuat V
app.get('/edit-lowongan', function(req, res){
    res.render('edit_lowongan', {qs: req.query})
})
// ketika perusahaan menekan tombol submit, maka data yang diisi akan dimasukkan ke database V
app.post('/edit-lowongan', urlencodedParser, function(req, res){
    console.log(req.body)
    var newLowongan = Lowongan(req.body).save(function(err, data){
        if (err) throw err
        res.json(data)
    })
    // render home page
})

// memberikan tampilan daftar kepada user mengenai status pendaftaran ???
app.get('/status-pendaftaran', function(req,res){
    res.render('view_lowongan')
})

}