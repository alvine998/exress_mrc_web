const mongoose = require('mongoose');

const ArtikelSchema = mongoose.Schema({
    judul:String,
    gambar: String,
    paragraph1: String,
    paragraph2: String,
    paragraph3: String,
    status: String,
    penulis: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Artikel', ArtikelSchema);