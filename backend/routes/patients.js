const express = require('express');
const{
    createPatient,
    getPatient,
    getPatients,
    deletePatient,
    updatePatient,
} = require('../controllers/patientController');

const router = express.Router();

//Get all patients
router.get('/', getPatients);

//Get single patient by unique id
router.get('/:id', getPatient);

//Create new patient
router.post('/', createPatient);

//Delete single patient by unique id
router.delete('/:id', deletePatient);

//Update single patient by unique id
router.patch('/:id', updatePatient);

module.exports = router;