import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/TOBEESOFT.png';

// TikTok icon component (since lucide-react doesn't have it)
const TikTokIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);


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
        <footer className="bg-white pt-20 pb-10 border-t border-slate-200 relative overflow-hidden">
            {/* Background Glow - Subtle for light theme */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6 text-center md:text-left">
                        <div className="flex justify-center md:justify-start">
                            <img src={logo} alt="TOBEESOFT" className="h-20 w-auto" />
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {[Facebook, Linkedin, TikTokIcon].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-slate-900 font-bold text-lg mb-6 tracking-tight">{t.footer.links.title}</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => handleNavClick(e, link.id)}
                                        className="text-slate-600 hover:text-primary-600 transition-colors text-sm flex items-center gap-2 justify-center md:justify-start group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="text-center md:text-left">
                        <h4 className="text-slate-900 font-bold text-lg mb-6 tracking-tight">{t.footer.services.title}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-600 hover:text-primary-600 transition-colors text-sm block hover:translate-x-1 duration-200">
                                    {t.footer.services.web}
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-600 hover:text-primary-600 transition-colors text-sm block hover:translate-x-1 duration-200">
                                    {t.footer.services.mobile}
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-600 hover:text-primary-600 transition-colors text-sm block hover:translate-x-1 duration-200">
                                    {t.footer.services.cloud}
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-600 hover:text-primary-600 transition-colors text-sm block hover:translate-x-1 duration-200">
                                    {t.footer.services.consulting}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-slate-900 font-bold text-lg mb-6 tracking-tight">{t.footer.contact.title}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-600 text-sm justify-center md:justify-start">
                                <MapPin size={18} className="text-primary-600 shrink-0 mt-0.5" />
                                <span>{t.footer.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 text-sm justify-center md:justify-start">
                                <Mail size={18} className="text-primary-600 shrink-0" />
                                <a href={`mailto:${t.footer.contact.email}`} className="hover:text-primary-600 transition-colors hover:underline">
                                    {t.footer.contact.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 text-sm justify-center md:justify-start">
                                <Phone size={18} className="text-primary-600 shrink-0" />
                                <a href={`tel:${t.footer.contact.phone.replace(/\s/g, '')}`} className="hover:text-primary-600 transition-colors hover:underline">
                                    {t.footer.contact.phone}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            © {currentYear} Tobeesoft. {t.footer.copyright}
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
