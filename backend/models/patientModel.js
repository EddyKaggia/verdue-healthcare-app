const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
        firstName : {
            type: String,
            required: true
        },
        lastName : {
            type: String,
            required: true
        },
    age: {
        type: Number,
        required: true
    },
    pronoun: {
        type: String,
    },  
        bp: {
            type: String,
            required: true
        },
        pr: {
            type: Number,
            required: true
        },
        rr: {
            type: Number,
            required: true
        },
        temp: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        chiefComplaint: {
            type: String,
            required: true
        },
        history: {
            type: String,
            required: true
        },
        diagnosis: {
            type: String,
            required: true
        },
        medication: {
            type: String,
            required: true
        }
}, {timestamps: true});
module.exports = mongoose.model('Patient', patientSchema);