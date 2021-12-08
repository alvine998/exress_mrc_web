const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    uri:String,
    judul:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Video', VideoSchema);