const mongoose = require('mongoose');

const FotoSchema = mongoose.Schema({
    uri:String,
    judul:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Foto', FotoSchema);