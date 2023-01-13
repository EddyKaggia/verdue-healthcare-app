import React from "react";
import { usePatientsContext } from '../hooks/usePatientsContext';

const PatientDetails = ({patient}) => {
    const { dispatch } = usePatientsContext();
    const handleClick = async () => {
        const response = await fetch('/api/patients/' + patient._id, {
            method: 'DELETE'
        })
        const json = await response.json();
        console.log(json)

        if (response.ok) {
            dispatch({type: 'DELETE_PATIENT', payload: json});
        };
    };

    return (
        <div className="patient-details">
            <h4>{patient.firstName} {patient.lastName}</h4>
            <p><strong>Age: </strong>{patient.age}</p>
            <p><strong>Pronouns: </strong>{patient.pronoun}</p>
            <p><strong>Condition: </strong>{patient.diagnosis}</p>
            <p><strong>Medication: </strong>{patient.medication}</p>
            <p>{Date(patient.createdAt)}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
};

export default PatientDetails;