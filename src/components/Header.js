import React from 'react'
import {
    Link
} from "react-router-dom";
import logo from '../img/logo.png'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img src={logo} alt='logo' className='brand-icon' />
            </Link>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" id="toggler"/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul className='links'>
                                <li>
                                    <Link to='/' onClick={closeMenu}>Home</Link>
                                </li>
                                <li>
                                    <Link to='/menu' onClick={closeMenu}>Menu</Link>
                                </li>
                                <li className="locked-link">
                                    <Link to='/gallery' onClick={closeMenu}>Gallery</Link>
                                </li>
                                <li className="locked-link">
                                    <Link to='/contact' onClick={closeMenu}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function closeMenu() {
    document.getElementById('toggler').checked = false;
}

export default Header
