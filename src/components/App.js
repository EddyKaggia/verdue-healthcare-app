import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages & components
import Home from './.components/Home';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
            <Navbar />
            <div className='pages'>
                <Routes>
                    <Route 
                    path = '/' 
                    element = {<Home />}
                    />
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
};

export default App;