import React from 'react';
import { Link } from 'react-router-dom';
import caduceus from '../images/caduceus.png'

const Navbar = () => {

    return (
        <header>
            <div className='container'>
                <img src={caduceus}/>
                <Link to='/'>
                    
                    <h1 >VERDURE</h1>
                    <h5>Healthcare Solutions</h5>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Dashboard</Link>
                        </li>
                        <li>
                        <Link to='/NewPatient'>New Patient</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Navbar;