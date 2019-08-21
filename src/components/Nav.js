import React from 'react';
import { Link } from 'react-router-dom'
import './../css/Nav.css';


const Nav = () => {

  return (
    <nav>
      <Link className='navLinks' to="/">Home</Link>
      <Link className='navLinks' to="/about">About</Link>
      <Link className='navLinks' to="/projects">Projects</Link>
      <Link className='navLinks' to="/contact">Contact</Link>
    </nav>

  );
}

export default Nav;
