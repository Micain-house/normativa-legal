import React from 'react';
import logo from '../../../assets/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                    <span>Normativa Legal facilita el acceso y comprensión de las leyes chilenas usando IA. Utiliza nuestro buscador, filtra artículos por perfiles y conecta con especialistas según tus requerimientos. Mantente al día con las últimas normativas y proyectos de ley.</span>
                </div>
                <div className='footer-enlaces'>
                    <div className='enlaces-uno'>
                        <p>Enlace</p>
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <div className='enlaces-dos'>
                    <p>Enlace</p>
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <div className='enlaces-tres'>
                    <p>Enlace</p>
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                  
                </div>
            </div>
            <div className='footer-footer'>
                <div className='copyright'>
                  <span>© 2024 Normativa Legal. Derechos reservados</span>
                </div>
                <div className='politicas'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Términos de servicio</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
