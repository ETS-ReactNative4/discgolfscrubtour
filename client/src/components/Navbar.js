import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
   return( 
    <div className="navbar">    
        <nav className="navbar-nav">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                    PLAYERS
                </Link>
                <div className='menu-icon'>
                    
                </div>
            </div>
        </nav>
    </div> 
        
   )
}

export default Navbar;