import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X, Globe, ChevronDown, Check, Sun, Moon } from 'lucide-react';
// Helper function to merge class names
const cn = (...classes) => classes.filter(Boolean).join(' ');
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
                    <img src={theme === 'dark' ? tobee : logo} alt="TOBEESOFT" className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
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

                                {/* Top Dropdown Menu - Enhanced Premium Design */}
                                <motion.div
                                    initial={{ y: '-100%', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: '-100%', opacity: 0 }}
                                    transition={{ type: "spring", damping: 30, stiffness: 350 }}
                                    className={cn(
                                        "fixed top-0 left-0 right-0 max-h-[95vh] z-[1000] flex flex-col lg:hidden overflow-hidden",
                                        "bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl",
                                        "shadow-2xl shadow-slate-900/10 dark:shadow-none",
                                        "border-b-2 border-slate-200/50 dark:border-slate-700/50",
                                        "rounded-b-[2rem]"
                                    )}
                                    style={{
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                    }}
                                >
                                    {/* Gradient Overlay Top */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-primary-600" />

                                    {/* Header with Close Button - Enhanced */}
                                    <div className="relative flex items-center justify-between px-5 py-5 border-b border-slate-200/60 dark:border-slate-700/60 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-800/30">
                                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2.5 group">
                                            <motion.img
                                                src={theme === 'dark' ? tobee : logo}
                                                alt="TOBEESOFT"
                                                className="h-8 w-auto object-contain"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                            <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                TOBEESOFT
                                            </span>
                                        </Link>
                                        <motion.button
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-slate-100/80 dark:bg-slate-800/80 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/30 backdrop-blur-sm"
                                            whileHover={{ scale: 1.05, rotate: 90 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X size={20} strokeWidth={2.5} />
                                        </motion.button>
                                    </div>

                                    {/* Scrollable Content Area */}
                                    <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
                                        {/* Navigation Links - Premium Design */}
                                        <ul className="flex flex-col gap-2 mb-6">
                                            {navLinks.map((link, index) => (
                                                <motion.li
                                                    key={link.path}
                                                    initial={{ opacity: 0, x: -30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        delay: index * 0.05,
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20
                                                    }}
                                                >
                                                    <Link
                                                        to={link.path}
                                                        className={cn(
                                                            "relative group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 overflow-hidden",
                                                            isActive(link.path)
                                                                ? "bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-transparent dark:from-primary-500/20 dark:via-primary-500/10 border-l-4 border-primary-600 dark:border-primary-400 shadow-sm shadow-primary-500/10"
                                                                : "hover:bg-slate-100/80 dark:hover:bg-slate-800/50 hover:shadow-sm border-l-4 border-transparent hover:border-slate-300 dark:hover:border-slate-600"
                                                        )}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {/* Background gradient on hover */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                        <span className={cn(
                                                            "relative text-base font-bold tracking-tight transition-colors",
                                                            isActive(link.path)
                                                                ? "text-primary-600 dark:text-primary-400"
                                                                : "text-slate-700 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                                                        )}>
                                                            {link.label}
                                                        </span>

                                                        <motion.span
                                                            className={cn(
                                                                "text-lg font-bold",
                                                                isActive(link.path)
                                                                    ? "text-primary-600 dark:text-primary-400 opacity-100"
                                                                    : "text-primary-500 dark:text-primary-400 opacity-0 group-hover:opacity-100"
                                                            )}
                                                            initial={{ x: -10 }}
                                                            animate={{
                                                                x: isActive(link.path) ? 0 : -10
                                                            }}
                                                            whileHover={{ x: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            →
                                                        </motion.span>
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Contact Button - Premium Design */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.35, type: "spring" }}
                                            className="mb-6"
                                        >
                                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                                <motion.button
                                                    className="relative w-full py-4 rounded-xl font-bold text-base text-white overflow-hidden shadow-lg shadow-primary-500/30 dark:shadow-primary-500/20"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    {/* Animated gradient background */}
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-indigo-600"
                                                        animate={{
                                                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                                        }}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        }}
                                                        style={{ backgroundSize: '200% 200%' }}
                                                    />

                                                    {/* Shine effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                                    <span className="relative flex items-center justify-center gap-2">
                                                        {t.navbar.contact}
                                                        <motion.span
                                                            animate={{ x: [0, 4, 0] }}
                                                            transition={{ duration: 1.5, repeat: Infinity }}
                                                        >
                                                            →
                                                        </motion.span>
                                                    </span>
                                                </motion.button>
                                            </Link>
                                        </motion.div>

                                        {/* Mobile Footer Controls - Premium Design */}
                                        <motion.div
                                            className="flex items-center gap-3 pt-5 mt-2 border-t border-slate-200/60 dark:border-slate-700/60"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <motion.button
                                                onClick={toggleTheme}
                                                className="flex-1 flex items-center justify-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-all px-4 py-3.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-sm"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <motion.div
                                                    animate={{ rotate: theme === 'light' ? 0 : 180 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                                                </motion.div>
                                                <span className="hidden xs:inline">{theme === 'light' ? 'Sombre' : 'Clair'}</span>
                                            </motion.button>

                                            <motion.button
                                                onClick={toggleLanguage}
                                                className="flex-1 flex items-center justify-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-all px-4 py-3.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-sm"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Globe size={18} />
                                                <span className="uppercase font-black tracking-wider">{language}</span>
                                            </motion.button>
                                        </motion.div>
                                    </div>

                                    {/* Bottom Decorative Blur */}
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 dark:from-slate-900/80 to-transparent pointer-events-none" />
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
