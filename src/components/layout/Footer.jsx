import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/tob.png';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const navHeight = 80; // Approximate navbar height
            const targetPosition = element.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { id: 'hero', label: t.navbar.home },
        { id: 'apropos', label: t.navbar.about },
        { id: 'services', label: t.navbar.services },
        { id: 'processus', label: t.navbar.process },
        { id: 'expertise', label: t.navbar.expertise },
        { id: 'faq', label: t.navbar.faq },
    ];

    return (
        <footer className="bg-dark-900 pt-20 pb-10 border-t border-white/5">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6 text-center md:text-left">
                        <div className="flex justify-center md:justify-start">
                            <img src={logo} alt="TOBEESOFT" className="h-10 w-auto" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold text-lg mb-6">{t.footer.links.title}</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => handleNavClick(e, link.id)}
                                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm block"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold text-lg mb-6">{t.footer.services.title}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-400 hover:text-primary-400 transition-colors text-sm block">
                                    {t.footer.services.web}
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-400 hover:text-primary-400 transition-colors text-sm block">
                                    {t.footer.services.mobile}
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-400 hover:text-primary-400 transition-colors text-sm block">
                                    {t.footer.services.cloud}
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-400 hover:text-primary-400 transition-colors text-sm block">
                                    {t.footer.services.consulting}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold text-lg mb-6">{t.footer.contact.title}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm justify-center md:justify-start">
                                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                                <span>123 Tech Street, Digital City, Chad</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-start">
                                <Mail size={18} className="text-primary-500 shrink-0" />
                                <a href="mailto:contact@tobeesoft.com" className="hover:text-primary-400 transition-colors">
                                    contact@tobeesoft.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-start">
                                <Phone size={18} className="text-primary-500 shrink-0" />
                                <a href="tel:+23566778899" className="hover:text-primary-400 transition-colors">
                                    +235 66 77 88 99
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {currentYear} Tobeesoft. {t.footer.copyright}
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                            <a href="https://tobeesoftrepos.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
                                TOBEESOFT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
