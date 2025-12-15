import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';
import logo from '../../assets/tob.png';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

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
                            {t.hero.description}
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold text-lg mb-6">{t.navbar.services}</h4>
                        <ul className="space-y-3">
                            {[t.services.service1.title, t.services.service2.title, t.services.service3.title].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li key="about">
                                <a href="#apropos" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                                    {t.navbar.about}
                                </a>
                            </li>
                            <li key="careers">
                                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                                    Careers
                                </a>
                            </li>
                            <li key="contact">
                                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                                    {t.navbar.contact}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - Hardcoded for demo/template purposes if not in translations */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold text-lg mb-6">{t.navbar.contact}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm justify-center md:justify-start">
                                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                                <span>123 Tech Street, Digital City, Chad</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-start">
                                <Mail size={18} className="text-primary-500 shrink-0" />
                                <span>contact@tobeesoft.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-start">
                                <Phone size={18} className="text-primary-500 shrink-0" />
                                <span>+235 66 77 88 99</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Tobeesoft. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
