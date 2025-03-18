import React from 'react'
import logo from '../../assets/image.png'
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar'
import './Navbar.css'
import {MdLightMode} from 'react-icons/md'
import {BsGridFill} from 'react-icons/bs'


function Navbar() {
    const toggleDropdown = () => {
        const dropdown = document.querySelector('.Navbar-dropdown');
        dropdown.classList.toggle('hidden'); // Toggle the "hidden" class
    };
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='navbar-links'>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
                <Link>Services</Link>
                <Avatar onClick={()=>toggleDropdown(".Navbar-dropdown","hidden")} name='Lavish Sharma' size='40' round='50%'/>
            </div>

            <div className='Navbar-dropdown hidden'>
                <div>
                    <h3>Lavish Sharma</h3>
                    <hr/>
                </div>
                <i><MdLightMode/>Light Mode</i><br/>
                <i><BsGridFill/>Grid Layout</i>
            </div>
        </div>
    )
}

export default Navbar
