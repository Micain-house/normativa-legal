import React from 'react';
import logo from '../../../assets/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='logo'>
                    {/* Aquí puedes colocar el logo de tu aplicación */}
                    <img src={logo} alt="Logo" />
                </div>
                {/* <nav className='nav-footer'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav> */}
                <div className='socialMedia'>
                    {/* Enlaces a redes sociales */}
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className='copy'>
                    &copy; 2024 Tu Empresa. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
