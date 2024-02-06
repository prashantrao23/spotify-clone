const mongoose = require('mongoose');
const { Schema } = mongoose;

const playlistSchema = new Schema({
    name: {
        type: String,
        requied: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        requied: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Playlist', playlistSchema)