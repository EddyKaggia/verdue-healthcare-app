mport React, { useEffect, useState } from "react";
import { usePatientsContext } from '../hooks/usePatientsContext';

//components
import PatientDetails from '../components/PatientDetails';
import PatientForm from '../components/PatientForm';

const Home = () => {
    const { patients, dispatch } = usePatientsContext();

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/api/patients');
            const json = await response.json();

            if(response.ok) {
                dispatch({
                    type: 'SET_PATIENT',
                    payload: json
                })
            }
        };
        fetchPatients();
    }, []);

    return (
        <div className="home">
            <div className="patients">
                {patients && patients.map((patient) => (
                    <PatientDetails key={patient._id} patient={patient}/>
                ))}
            </div>
        </div>
    )
};

export default Home;