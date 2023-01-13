const Patient = require('../models/patientModel');
const mongoose = require('mongoose');
const { UNSAFE_NavigationContext } = require('react-router-dom');

//Get all patients
const getPatients = async (req, res) => {
    const patients = await Patient.find({}).sort({createdAt: -1});

    res.status(200).json(patients);
};

//Get one patient
const getPatient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Patient does not exist in the system'});
    };

    const patient = await Patient.findById(id);

    if(!patient) {
        return res.status(400).json({error: 'Patient does not exist in the system'});
    };

    res.status(200).json(patient);
};

//Create a new patient
const createPatient = async (req, res) => {
    const {firstName, lastName, age, pronoun, bp, pr, rr, temp, weight, chiefComplaint, history, diagnosis, medication} = req.body;

    //Detect empty fields
    let emptyFields = [];

    if(!firstName) {
        emptyFields.push('firstName')
    };
    if(!lastName) {
        emptyFields.push('lastName')
    };
    if(!age) {
        emptyFields.push('age')
    };
    if(!pronoun) {
        emptyFields.push('pronoun')
    };
    if(!bp) {
        emptyFields.push('bp')
    };
    if(!pr) {
        emptyFields.push('pr')
    };
    if(!rr) {
        emptyFields.push('rr')
    };
    if(!temp) {
        emptyFields.push('temp')
    };
    if(!weight) {
        emptyFields.push('weight')
    };
    if(!chiefComplaint) {
        emptyFields.push('chiefComplaint')
    };
    if(!history) {
        emptyFields.push('history')
    };
    if(!diagnosis) {
        emptyFields.push('diagnosis')
    };
    if(!medication) {
        emptyFields.push('medication');
    };
    if(emptyFields.length > 0) {
        return res.status(400).json({
            error: 'Please fill in the fields',
            emptyFields
        })
    }

    //add document to database
    try {
        const patient = await Patient.create({firstName, lastName, age, pronoun, bp, pr, rr, temp, weight, chiefComplaint, history, diagnosis, medication});
        res.status(200).json(patient);
        // return next();
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//Delete a new patient
const deletePatient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Patient does not exist in the system'});
    };

    const patient = await Patient.findOneAndDelete({_id: id});

    if(!patient) {
        return res.status(400).json({error: 'Patient does not exist in the system'});
    };

    res.status(200).json(patient);
};

//Update a patient's file
const updatePatient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Patient does not exist in the system'});
    };

    const patient = await Patient.findOneAndUpdate({_id: id}, {...req.body});

    if(!patient) {
        return res.status(400).json({error: 'Patient does not exist in the system'});
    };

    res.status(200).json(patient);
};

module.exports = {
    getPatient,
    getPatients,
    createPatient,
    deletePatient,
    updatePatient
};