const mongoose = require('mongoose');

const BannerSchema = mongoose.Schema({
    gambar:String,
    judul: String,
    keterangan: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Banner', BannerSchema);