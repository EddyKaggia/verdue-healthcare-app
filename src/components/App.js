import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//pages & components
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import NewPatient from '../pages/NewPatient';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';

class App extends Component {
    render () {
    return (
        <div className='App'>
            <BrowserRouter>
            <Navbar />
            <div className='pages'>
                <Routes>
                    <Route
                    path="/" element ={<Layout/>}
                    />
                    <Route 
                    index 
                    element = {<Home />}
                    />
                    <Route 
                    path="/NewPatient" element={<NewPatient/>}
                    />
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    );
    };
};

export default App;