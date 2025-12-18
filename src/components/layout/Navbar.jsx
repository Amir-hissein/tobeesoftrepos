import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import logo from '../../assets/tob.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleClickOutside = (event) => {
            if (isLanguageMenuOpen && !event.target.closest('.language-toggle')) {
                setIsLanguageMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isLanguageMenuOpen]);

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

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

            setIsMobileMenuOpen(false);
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
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-theme-glass border-theme shadow-lg py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                <a href="#hero" className="relative z-50" onClick={(e) => handleNavClick(e, 'hero')}>
                    <img src={logo} alt="TOBEESOFT" className="h-10 w-auto object-contain" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className="text-sm font-medium text-theme-secondary hover:text-primary-400 transition-colors relative group"
                                    onClick={(e) => handleNavClick(e, link.id)}
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                        {/* Language Selector */}
                        <div className="relative language-toggle">
                            <button
                                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                <Globe size={18} />
                                <span className="uppercase">{language}</span>
                                <ChevronDown size={14} className={cn("transition-transform", isLanguageMenuOpen && "rotate-180")} />
                            </button>

                            {isLanguageMenuOpen && (
                                <div className="absolute top-full right-0 mt-2 w-32 bg-dark-800 border border-white/10 rounded-lg shadow-xl overflow-hidden py-1">
                                    <button
                                        onClick={() => { toggleLanguage(); setIsLanguageMenuOpen(false); }}
                                        className={cn(
                                            "w-full px-4 py-2 text-sm text-left flex items-center justify-between hover:bg-white/5 transition-colors",
                                            language === 'fr' ? "text-primary-400" : "text-gray-300"
                                        )}
                                    >
                                        <span>Français</span>
                                        {language === 'fr' && <Check size={14} />}
                                    </button>
                                    <button
                                        onClick={() => { toggleLanguage(); setIsLanguageMenuOpen(false); }}
                                        className={cn(
                                            "w-full px-4 py-2 text-sm text-left flex items-center justify-between hover:bg-white/5 transition-colors",
                                            language === 'en' ? "text-primary-400" : "text-gray-300"
                                        )}
                                    >
                                        <span>English</span>
                                        {language === 'en' && <Check size={14} />}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Theme Toggle */}
                        {/* Theme Toggle Removed */}

                        <Button
                            variant="primary"
                            size="sm"
                            className="ml-2"
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            {t.navbar.contact}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-50 p-2 text-white transition-opacity duration-300 hover:text-primary-400"
                    onClick={() => setIsMobileMenuOpen(true)}
                    style={{ opacity: isMobileMenuOpen ? 0 : 1, pointerEvents: isMobileMenuOpen ? 'none' : 'auto' }}
                >
                    <Menu size={24} />
                </button>

                {/* Mobile Menu */}
                {createPortal(
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <>
                                {/* Backdrop */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />

                                {/* Side Drawer */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className={cn(
                                        "fixed top-0 right-0 bottom-0 w-[280px] md:w-[320px] bg-dark-900 border-l border-white/10 z-[1000] flex flex-col shadow-2xl lg:hidden overflow-y-auto"
                                    )}
                                >
                                    <div className="flex justify-end p-6">
                                        <button
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="p-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    <div className="flex flex-col px-8 pb-10">
                                        <ul className="flex flex-col gap-6 text-left mb-10">
                                            {navLinks.map((link) => (
                                                <li key={link.id} className="border-b border-white/5 pb-4 last:border-0">
                                                    <a
                                                        href={`#${link.id}`}
                                                        className="text-lg font-medium text-gray-300 hover:text-primary-400 transition-colors flex items-center justify-between group"
                                                        onClick={(e) => handleNavClick(e, link.id)}
                                                    >
                                                        {link.label}
                                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-500">→</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto space-y-6">
                                            <Button
                                                variant="primary"
                                                size="lg"
                                                className="w-full justify-center"
                                                onClick={(e) => handleNavClick(e, 'contact')}
                                            >
                                                {t.navbar.contact}
                                            </Button>

                                            {/* Mobile Footer Controls */}
                                            <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                                <button
                                                    onClick={toggleLanguage}
                                                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Globe size={18} />
                                                    <span className="uppercase">{language}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </nav>
    );
};

export default Navbar;
