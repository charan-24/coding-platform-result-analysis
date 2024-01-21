const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const {profileSchema} = require('./ProfileModel');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profiles: profileSchema,
    total:{
        type: Number
    }

});

const userModel = mongoose.model('User',userSchema);

module.exports = {userSchema , userModel};