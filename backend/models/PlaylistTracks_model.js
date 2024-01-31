const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const playlisttrackSchema = new Schema({
    track_id: {
        type: String,
        requied: true
    },
    playlist_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('PlaylistTacks', playlisttrackSchema)