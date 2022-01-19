import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const linkStyle = {
    margin: "0.1rem",
    padding: "5px",
    textDecoration: "none",
    color: '#222',
  };

function Navbar() {
   return( 
    <div className="navbar">    
        <nav className="navbar-nav">
            <div className="navbar-container">
                <hr style={{color: 'white'}}/>
                <Link to='/players' className='navbar-logo' style={linkStyle}>
                    PLAYERS
                </Link>
                
                <Link to='/events' className='navbar-logo' style={linkStyle}>
                    EVENTS
                </Link>
                
                <Link to='/courses' className='navbar-logo' style={linkStyle}>
                    COURSES
                </Link>
                
                <Link to='/standings' className='navbar-logo' style={linkStyle}>
                    STANDINGS
                </Link> 
                {/*<div className='menu-icon'>
                    
                </div>*/}
                <hr style={{color: 'white'}}/>
            </div>
        </nav>
    </div> 
        
   )
}

export default Navbar;