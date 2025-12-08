import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

import logo from '../assets/tob.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = element.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, 'hero')}>
                        <img src={logo} alt="TOBEESOFT" className="h-12 w-auto object-contain" style={{ maxHeight: '50px' }} />
                    </a>
                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        aria-label="Toggle menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#accueil" className="nav-link" onClick={(e) => handleNavClick(e, 'accueil')}>Accueil</a></li>
                        <li><a href="#apropos" className="nav-link" onClick={(e) => handleNavClick(e, 'apropos')}>À Propos</a></li>
                        <li><a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
                        <li><a href="#processus" className="nav-link" onClick={(e) => handleNavClick(e, 'processus')}>Processus</a></li>
                        <li><a href="#expertise" className="nav-link" onClick={(e) => handleNavClick(e, 'expertise')}>Expertise</a></li>
                        <li><a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a></li>
                        <li><a href="#contact" className="nav-link cta-nav" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
                        <li>
                            <button className="theme-toggle" id="themeToggle" aria-label="Toggle theme" onClick={toggleTheme}>
                                <i className={`fas fa-sun ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} style={{ transition: 'all 0.3s ease' }}></i>
                                <i className={`fas fa-moon ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}`} style={{ transition: 'all 0.3s ease' }}></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
