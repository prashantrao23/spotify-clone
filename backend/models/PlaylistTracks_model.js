const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const playlisttrackSchema = new Schema({
    track_id: {
        type: String,
        required: true
    },
    playlist_id: {
        type: String,
        required: true
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

module.exports = mongoose.model('PlaylistTracks', playlisttrackSchema)