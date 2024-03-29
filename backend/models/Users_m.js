const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {
        type: String,
        requied: true
    },
    lastname: {
        type: String,
        requied: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    },
    password: {
        type: String,
        requied: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)