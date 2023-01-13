import React, { useState } from "react";
// import { useState } from 'react';
import axios from "axios"
import { usePatientsContext } from "../hooks/usePatientsContext";
import { Link } from "react-router-dom";

const PatientForm = () => {
    const { dispatch } = usePatientsContext();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [pronoun, setPronoun] = useState('');
    const [bp, setBp] = useState('');
    const [pr, setPr] = useState('');
    const [rr, setRr] = useState('');
    const [temp, setTemp] = useState('');
    const [weight, setWeight] = useState('');
    const [chiefComplaint, setChiefComplaint] = useState('');
    const [history, setHistory] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [medication, setMedication] = useState('');
    

    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const patient = {firstName, lastName, age, pronoun, bp, pr, rr, temp, weight, chiefComplaint, history, diagnosis, medication};

        const response = await fetch('/api/patients', {
            method: 'POST',
            body: JSON.stringify(patient),
            headers: {
                'Content-Type': 'application/json'
            }
            
        });

        // const json = response.json();
        const json = response.json();
console.log(json)
        if(!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        };
        if(response.ok) {


            setFirstName('');
            setLastName('');
            setAge('');
            setPronoun('');
            setBp('');
            setPr('');
            setRr('');
            setTemp('');
            setWeight('');
            setChiefComplaint('');
            setHistory('');
            setDiagnosis('');
            setMedication('');
            setError(null);
            setEmptyFields([]);
           
            console.log('New patient added', json);
            dispatch({type: 'CREATE_PATIENT', payload: json});
        }
        

            
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Patient:</h3>

            <div className="names">
            <div className="names-input">
            <label>First Name:</label>
            <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className={emptyFields.includes('firstName') ? 'error' : ''} 
            />
            </div>
            <div className="names-input">
            <label>Last Name:</label>
            <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className={emptyFields.includes('lastName') ? 'error' : ''}
            />
            </div>
            </div>

            <div className="demographics">
            <div className="demographics-input">
            <label>Age:</label>
            <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            className={emptyFields.includes('age') ? 'error' : ''}
            />
            </div>

            <div className="demographics-input">
            <label>Pronoun:</label>
            <input
            type="text"
            onChange={(e) => setPronoun(e.target.value)}
            value={pronoun}
            className={emptyFields.includes('pronoun') ? 'error' : ''}
            />
            </div>
            </div>

            <h4>Vital Signs: </h4>

            <div className="vitals">
            <div className="vitals-input">
            <label>Blood Pressure:</label>
            <input
            type="text"
            onChange={(e) => setBp(e.target.value)}
            value={bp}
            className={emptyFields.includes('bp') ? 'error' : ''}
            />
            </div>

            <div className="vitals-input">
            <label>Pulse Rate:</label>
            <input
            type="number"
            onChange={(e) => setPr(e.target.value)}
            value={pr}
            className={emptyFields.includes('pr') ? 'error' : ''}
            />
            </div>

            <div className="vitals-input">
            <label>Respiratory Rate:</label>
            <input
            type="number"
            onChange={(e) => setRr(e.target.value)}
            value={rr}
            className={emptyFields.includes('rr') ? 'error' : ''}
            />
            </div>

            <div className="vitals-input">
            <label>Temperature (Celsius):</label>
            <input
            type="number"
            onChange={(e) => setTemp(e.target.value)}
            value={temp}
            className={emptyFields.includes('temp') ? 'error' : ''}
            />
            </div>

            <div className="vitals-input">
            <label>Weight (Kg):</label>
            <input
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            className={emptyFields.includes('weight') ? 'error' : ''}
            />
            </div>
            </div>

            <h4>History Taking: </h4>

            <div className="chiefcomplaint">
            <label>Chief Complaint:</label>
            <input
            type="text"
            onChange={(e) => setChiefComplaint(e.target.value)}
            value={chiefComplaint}
            className={emptyFields.includes('chiefComplaint') ? 'error' : ''}
            />
            </div>

            
            <div className="history">
            <label>History:</label>
            <textarea
            type="text"
            onChange={(e) => setHistory(e.target.value)}
            value={history}
            className={emptyFields.includes('history') ? 'error' : ''}
            ></textarea>
            </div>

            <div className="end-of-session">
            <div className="diagnosis">
            <label>Diagnosis:</label>
            <textarea
            type="text"
            onChange={(e) => setDiagnosis(e.target.value)}
            value={diagnosis}
            className={emptyFields.includes('diagnsosis') ? 'error' : ''}
            ></textarea>
            </div>

            <div className="medication">
            <label>Medication:</label>
            <textarea
            type="text"
            onChange={(e) => setMedication(e.target.value)}
            value={medication}
            className={emptyFields.includes('medication') ? 'error' : ''}
            ></textarea>
            </div>
            </div>

            <button>Add Patient</button>
            
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default PatientForm;