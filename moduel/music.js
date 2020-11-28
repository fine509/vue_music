const mongoose = require('mongoose')

const MusicSchema = new mongoose.Schema({
    musicid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})


module.exports = Music = mongoose.model('music', MusicSchema)