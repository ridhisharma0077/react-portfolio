import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
   <>
   <div className='homepage'>
      <h1 className="logo">Ridhi Sharma</h1>
   <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-item">About</NavLink></li>
        <li><NavLink to="/projects" className="nav-item">Projects</NavLink></li>
        <li><NavLink to="/contact" className="nav-item">Contact</NavLink></li>
      </ul>
    </nav>
    </div>
   </>
  )
}

export default Navbar