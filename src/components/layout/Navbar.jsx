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
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b",
                isScrolled
                    ? "glass-nav py-4 shadow-sm"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                <a href="#hero" className="relative z-50 group" onClick={(e) => handleNavClick(e, 'hero')}>
                    <img src={logo} alt="TOBEESOFT" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative group py-1"
                                    onClick={(e) => handleNavClick(e, link.id)}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full opacity-100"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 pl-6 border-l border-slate-200">
                        {/* Language Selector */}
                        <div className="relative language-toggle">
                            <button
                                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
                            >
                                <Globe size={18} />
                                <span className="uppercase">{language}</span>
                                <ChevronDown size={14} className={cn("transition-transform duration-300", isLanguageMenuOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isLanguageMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1 z-50"
                                    >
                                        <button
                                            onClick={() => { toggleLanguage(); setIsLanguageMenuOpen(false); }}
                                            className={cn(
                                                "w-full px-4 py-2.5 text-sm text-left flex items-center justify-between hover:bg-slate-50 transition-colors",
                                                language === 'fr' ? "text-primary-600 font-medium" : "text-slate-600"
                                            )}
                                        >
                                            <span>Français</span>
                                            {language === 'fr' && <Check size={14} className="text-primary-600" />}
                                        </button>
                                        <button
                                            onClick={() => { toggleLanguage(); setIsLanguageMenuOpen(false); }}
                                            className={cn(
                                                "w-full px-4 py-2.5 text-sm text-left flex items-center justify-between hover:bg-slate-50 transition-colors",
                                                language === 'en' ? "text-primary-600 font-medium" : "text-slate-600"
                                            )}
                                        >
                                            <span>English</span>
                                            {language === 'en' && <Check size={14} className="text-primary-600" />}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Button
                            variant="primary"
                            size="sm"
                            className="bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-500/20 border-0"
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            {t.navbar.contact}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-50 p-2 text-slate-600 transition-colors duration-300 hover:text-primary-600"
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
                                    className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[999] lg:hidden"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />

                                {/* Side Drawer */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                                    className={cn(
                                        "fixed top-0 right-0 bottom-0 w-[280px] md:w-[320px] bg-white border-l border-slate-200 z-[1000] flex flex-col shadow-2xl lg:hidden overflow-y-auto"
                                    )}
                                >
                                    <div className="flex justify-end p-6">
                                        <button
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="p-2 text-slate-500 hover:text-primary-600 transition-colors bg-slate-100 rounded-full hover:bg-slate-200"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="flex flex-col px-8 pb-10 h-full">
                                        <div className="mb-10 text-center">
                                            <img src={logo} alt="TOBEESOFT" className="h-12 w-auto mx-auto object-contain" />
                                        </div>

                                        <ul className="flex flex-col gap-2 text-left mb-10">
                                            {navLinks.map((link) => (
                                                <li key={link.id}>
                                                    <a
                                                        href={`#${link.id}`}
                                                        className="text-lg font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 px-4 py-3 rounded-xl transition-all flex items-center justify-between group"
                                                        onClick={(e) => handleNavClick(e, link.id)}
                                                    >
                                                        {link.label}
                                                        <span className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary-600">→</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto space-y-6">
                                            <Button
                                                variant="primary"
                                                size="lg"
                                                className="w-full justify-center bg-primary-600 shadow-xl shadow-primary-500/20"
                                                onClick={(e) => handleNavClick(e, 'contact')}
                                            >
                                                {t.navbar.contact}
                                            </Button>

                                            {/* Mobile Footer Controls */}
                                            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                                <button
                                                    onClick={toggleLanguage}
                                                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors mx-auto px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
                                                >
                                                    <Globe size={18} />
                                                    <span className="uppercase">{language === 'en' ? 'English' : 'Français'}</span>
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
