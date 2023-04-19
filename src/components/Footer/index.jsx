// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-links">
                    <div className="footer-link-group">
                        <h4>À propos</h4>
                        <ul>
                            <li><Link to="/about-us">Qui sommes-nous</Link></li>
                            <li><Link to="/our-team">Notre équipe</Link></li>
                            <li><Link to="/careers">Carrières</Link></li>
                        </ul>
                    </div>
                    <div className="footer-link-group">
                        <h4>Contenu</h4>
                        <ul>
                            <li><Link to="/articles">Articles</Link></li>
                            <li><Link to="/news">Actualités</Link></li>
                            <li><Link to="/events">Événements</Link></li>
                        </ul>
                    </div>
                    <div className="footer-link-group">
                        <h4>Une question</h4>
                        <ul>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact-us">Contactez-nous</Link></li>
                            <li><Link to="/support">Support</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
