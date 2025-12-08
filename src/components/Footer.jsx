import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/tob.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <a href="#hero" className="logo" style={{ display: 'inline-block', marginBottom: '20px' }}>
                            <img src={logo} alt="TOBEESOFT" style={{ maxHeight: '60px' }} />
                        </a>
                        <p>
                            Partenaire de confiance pour votre transformation digitale. Nous créons des solutions logicielles
                            innovantes pour propulser votre entreprise vers l'avenir.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Développement Web</a></li>
                            <li><a href="#services">Applications Mobiles</a></li>
                            <li><a href="#services">Cloud & DevOps</a></li>
                            <li><a href="#services">Conseil & Audit</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Liens Utiles</h4>
                        <ul>
                            <li><a href="#apropos">À Propos</a></li>
                            <li><a href="#processus">Processus</a></li>
                            <li><a href="#expertise">Expertise</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <ul>
                            <li><i className="fas fa-envelope"></i> tobeesoft@gmail.com</li>
                            <li><i className="fas fa-phone"></i> +90 5355048712</li>
                            <li><i className="fas fa-map-marker-alt"></i> İstanbul, Turquie</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} TOBEESOFT. Tous droits réservés.</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
