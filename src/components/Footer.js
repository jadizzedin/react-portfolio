import React from 'react';
import { Link } from 'react-router-dom'
import './../css/Footer.css';

const Footer = () => {

  return (
    <footer>
      <Link className='footerLinks' to="/">Home</Link>
      <Link className='footerLinks' to="/about">About</Link>
      <Link className='footerLinks' to="/projects">Projects</Link>
      <Link className='footerLinks' to="/contact">Contact</Link>
    </footer>

  );
}

export default Footer;
