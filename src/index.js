import React from "react";
import ReactDOM from "react-dom"; 
import './index.css';
import App from './components/App';
import { PatientsContextProvider } from './context/PatientContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PatientsContextProvider>
            <App />
        </PatientsContextProvider>
    </React.StrictMode>
);