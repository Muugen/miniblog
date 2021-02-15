import React, { useState, useEffect } from 'react';
import { FaUserLock, FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const authenticate = ()=>{
    const d = new Date();
    const test = d.toLocaleDateString();
    if(test === sessionStorage.getItem('token')){
       return true; 
    }else{
        return false;
    }
  }

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={process.env.PUBLIC_URL + "img/Cube.png"} alt="Logo" width="60" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Accueil</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Presentation' className='nav-links' onClick={closeMobileMenu}>Presentation</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                        </li>

                        <li>
                            <Link to='/Admin'className='nav-links-mobile'onClick={closeMobileMenu}>Admin</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        {!authenticate()
                        ?<NavLink className="nav-link" activeClassName="active" to="/login"><FaUserLock/> Connexion</NavLink >
                        :<NavLink className="nav-link" activeClassName="active" to="/logout"><FaUserTimes/> Déconnexion</NavLink >
                        }
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
