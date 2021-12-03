const mongoose = require('mongoose');

const ProfilSchema = mongoose.Schema({
    namapt:String,
    alamatpt:String,
    logopt:String,
    deskripsipt:String,
    tentangust:String,
    fotoust:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Profil', ProfilSchema);