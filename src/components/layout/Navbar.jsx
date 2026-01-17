import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X, Globe, ChevronDown, Check, Sun, Moon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import logo from '../../assets/TOBEESOFT.png';
import tobee from '../../assets/tobee.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

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

    const navLinks = [
        { path: '/', label: t.navbar.home },
        { path: '/about', label: t.navbar.about },
        { path: '/services', label: t.navbar.services },
        { path: '/process', label: t.navbar.process },
        { path: '/expertise', label: t.navbar.expertise },
        { path: '/blog', label: t.navbar.blog },
        { path: '/faq', label: t.navbar.faq },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

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
                <Link to="/" className="relative z-50 group flex items-center gap-0">
                    <img src={theme === 'dark' ? tobee : logo} alt="TOBEESOFT" className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    <span className="hidden lg:block text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-primary-600 transition-colors duration-300">
                        TOBEESOFT
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={cn(
                                        "text-sm font-medium transition-colors relative group py-1",
                                        isActive(link.path)
                                            ? "text-primary-600 dark:text-primary-400"
                                            : "text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
                                    )}
                                >
                                    {link.label}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300",
                                        isActive(link.path) ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                                    )}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-700">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        {/* Language Selector */}
                        <div className="relative language-toggle">
                            <button
                                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                                className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
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
                                        className="absolute top-full right-0 mt-2 w-36 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden py-1 z-50"
                                    >
                                        <button
                                            onClick={() => { toggleLanguage(); setIsLanguageMenuOpen(false); }}
                                            className={cn(
                                                "w-full px-4 py-2.5 text-sm text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors",
                                                language === 'fr' ? "text-primary-600 dark:text-primary-400 font-medium" : "text-slate-600 dark:text-slate-300"
                                            )}
                                        >
                                            <span>Français</span>
                                            {language === 'fr' && <Check size={14} className="text-primary-600 dark:text-primary-400" />}
                                        </button>
                                        <button
                                            onClick={() => { toggleLanguage(); setIsLanguageMenuOpen(false); }}
                                            className={cn(
                                                "w-full px-4 py-2.5 text-sm text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors",
                                                language === 'en' ? "text-primary-600 dark:text-primary-400 font-medium" : "text-slate-600 dark:text-slate-300"
                                            )}
                                        >
                                            <span>English</span>
                                            {language === 'en' && <Check size={14} className="text-primary-600 dark:text-primary-400" />}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/contact">
                            <Button
                                variant="primary"
                                size="sm"
                                className="bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-500/20 border-0"
                            >
                                {t.navbar.contact}
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-50 p-2 text-slate-600 dark:text-slate-300 transition-colors duration-300 hover:text-primary-600"
                    onClick={() => setIsMobileMenuOpen(true)}
                    style={{ opacity: isMobileMenuOpen ? 0 : 1, pointerEvents: isMobileMenuOpen ? 'none' : 'auto' }}
                >
                    <Menu size={24} />
                </button>

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
                                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[999] lg:hidden"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />

                                {/* Top Dropdown Menu */}
                                <motion.div
                                    initial={{ y: '-100%', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: '-100%', opacity: 0 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className={cn(
                                        "fixed top-0 left-0 right-0 max-h-[90vh] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-[1000] flex flex-col shadow-2xl lg:hidden overflow-y-auto rounded-b-3xl"
                                    )}
                                >
                                    {/* Header with Close Button */}
                                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                                            <img src={theme === 'dark' ? tobee : logo} alt="TOBEESOFT" className="h-10 w-auto object-contain" />
                                            <span className="text-lg font-bold text-slate-900 dark:text-white">TOBEESOFT</span>
                                        </Link>
                                        <button
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="p-2 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                                        >
                                            <X size={20} strokeWidth={2.5} />
                                        </button>
                                    </div>

                                    {/* Navigation Links */}
                                    <div className="flex flex-col px-5 py-4">
                                        <ul className="flex flex-col gap-1 mb-5">
                                            {navLinks.map((link, index) => (
                                                <motion.li
                                                    key={link.path}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.03 }}
                                                >
                                                    <Link
                                                        to={link.path}
                                                        className={cn(
                                                            "text-sm font-semibold hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-lg transition-all flex items-center justify-between group",
                                                            isActive(link.path)
                                                                ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
                                                                : "text-slate-700 dark:text-slate-200"
                                                        )}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <span>{link.label}</span>
                                                        <span className={cn(
                                                            "transition-all text-primary-600 dark:text-primary-400 text-base",
                                                            isActive(link.path) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"
                                                        )}>→</span>
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Contact Button */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                                <Button
                                                    variant="primary"
                                                    className="w-full justify-center py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/30 border-0 text-sm"
                                                >
                                                    {t.navbar.contact}
                                                </Button>
                                            </Link>
                                        </motion.div>

                                        {/* Mobile Footer Controls */}
                                        <motion.div
                                            className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.25 }}
                                        >
                                            <button
                                                onClick={toggleTheme}
                                                className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                                            >
                                                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                                                <span className="hidden sm:inline">{theme === 'light' ? 'Sombre' : 'Clair'}</span>
                                            </button>

                                            <button
                                                onClick={toggleLanguage}
                                                className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                                            >
                                                <Globe size={16} />
                                                <span className="uppercase font-bold">{language}</span>
                                            </button>
                                        </motion.div>
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
