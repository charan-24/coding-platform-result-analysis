const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const {scoreSchema} = require('./ScoreModel');

const profileSchema = new mongoose.Schema({
    hackerrank: {
        username: {
            type: String,
        },
        scores: scoreSchema
    },
    leetcode: {
        username: {
            type: String,
        },
        scores: scoreSchema
    },
    codechef: {
        username: {
            type: String,
        },
        scores: scoreSchema
    },
    codeforces: {
        username: {
            type: String,
        },
        scores: scoreSchema
    },
    interviewbit: {
        username: {
            type: String,
        },
        scores: scoreSchema
    },
    spoj: {
        username: {
            type: String,
        },
        scores: scoreSchema
    }
});

const profileModel = mongoose.model('Profile',profileSchema);

module.exports = {
    profileSchema,
    profileModel
};